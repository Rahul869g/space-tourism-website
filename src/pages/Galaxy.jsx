import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const GalaxyBackground = ({ render }) => {
  const containerRef = useRef();

  useEffect(() => {
    if (!render) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      800
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    if (containerRef.current) {
      containerRef.current.appendChild(renderer.domElement);
    }

    const starsGeometry = new THREE.BufferGeometry();
    const starsPositions = [];
    for (let i = 0; i < 200000; i++) {
      const x = THREE.MathUtils.randFloatSpread(window.innerWidth);
      const y = THREE.MathUtils.randFloatSpread(window.innerHeight);
      const z = THREE.MathUtils.randFloatSpread(200000);
      starsPositions.push(x, y, z);
    }

    starsGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(starsPositions, 3)
    );
    const starsMaterial = new THREE.PointsMaterial({ color: 0xffffff });
    const starField = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(starField);

    camera.position.z = 5;

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    const animate = () => {
      requestAnimationFrame(animate);
      starField.rotation.y += 0.001;
      renderer.render(scene, camera);
    };
    animate();

    window.addEventListener("resize", handleResize);

    return () => {
      if (
        containerRef.current &&
        containerRef.current.contains(renderer.domElement)
      ) {
        containerRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, [render]);

  if (!render) return null;

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1
      }}
    />
  );
};

export default GalaxyBackground;
