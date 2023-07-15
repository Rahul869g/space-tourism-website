import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const GalaxyBackground = ({ render }) => {
  const containerRef = useRef();

  useEffect(() => {
    if (!render) return; // Do not proceed if render is false

    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Create the galaxy background
    const starsGeometry = new THREE.BufferGeometry();
    const starsPositions = [];
    for (let i = 0; i < 10000; i++) {
      const x = THREE.MathUtils.randFloatSpread(window.innerWidth);
      const y = THREE.MathUtils.randFloatSpread(window.innerHeight);
      const z = THREE.MathUtils.randFloatSpread(200000);
      starsPositions.push(x, y, z);
    }
    // for (let i = 0; i < 10000; i++) {
    //   const x = THREE.MathUtils.randFloatSpread(window.innerWidth);
    //   const y = THREE.MathUtils.randFloatSpread(window.innerHeight);
    //   const z = THREE.MathUtils.randFloatSpread(2000);
    //   starsPositions.push(x, y, z);
    // }
    starsGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(starsPositions, 3)
    );
    const starsMaterial = new THREE.PointsMaterial({ color: 0xffffff });
    const starField = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(starField);

    // Position the camera
    camera.position.z = 5;

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    // Render the scene
    const animate = () => {
      requestAnimationFrame(animate);
      starField.rotation.y += 0.001;
      renderer.render(scene, camera);
    };
    animate();

    // Event listeners for window resize
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => {
      containerRef.current.removeChild(renderer.domElement);
      window.removeEventListener("resize", handleResize);
    };
  }, [render]);

  if (!render) return null; // Do not render anything if render is false

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
      }}
    />
  );
};

export default GalaxyBackground;

// import React, { useRef, useEffect } from "react";
// import * as THREE from "three";

// const GalaxyBackground = () => {
//   const containerRef = useRef();

//   useEffect(() => {
//     // Set up the scene, camera, and renderer
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(
//       75,
//       window.innerWidth / window.innerHeight,
//       0.1,
//       1000
//     );
//     const renderer = new THREE.WebGLRenderer({ antialias: true });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     containerRef.current.appendChild(renderer.domElement);

//     // Create the galaxy background
//     const starsGeometry = new THREE.BufferGeometry();
//     const starsPositions = [];
//     for (let i = 0; i < 10000; i++) {
//       const x = THREE.MathUtils.randFloatSpread(window.innerWidth);
//       const y = THREE.MathUtils.randFloatSpread(window.innerHeight);
//       const z = THREE.MathUtils.randFloatSpread(200000);
//       starsPositions.push(x, y, z);
//     }
//     // for (let i = 0; i < 10000; i++) {
//     //   const x = THREE.MathUtils.randFloatSpread(window.innerWidth);
//     //   const y = THREE.MathUtils.randFloatSpread(window.innerHeight);
//     //   const z = THREE.MathUtils.randFloatSpread(2000);
//     //   starsPositions.push(x, y, z);
//     // }
//     starsGeometry.setAttribute(
//       "position",
//       new THREE.Float32BufferAttribute(starsPositions, 3)
//     );
//     const starsMaterial = new THREE.PointsMaterial({ color: 0xffffff });
//     const starField = new THREE.Points(starsGeometry, starsMaterial);
//     scene.add(starField);

//     // Position the camera
//     camera.position.z = 5;

//     // Handle window resize
//     const handleResize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     };

//     // Render the scene
//     const animate = () => {
//       requestAnimationFrame(animate);
//       starField.rotation.y += 0.001;
//       renderer.render(scene, camera);
//     };
//     animate();

//     // Event listeners for window resize
//     window.addEventListener("resize", handleResize);

//     // Clean up
//     return () => {
//       containerRef.current.removeChild(renderer.domElement);
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       style={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         right: 0,
//         bottom: 0,
//         zIndex: -1,
//       }}
//     />
//   );
// };

// export default GalaxyBackground;
