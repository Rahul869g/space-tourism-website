/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "home-xs": "url('src/assets/home/background-home-mobile.jpg')",
        "home-sm": "url('src/assets/home/background-home-tablet.jpg')",
        "home-md": "url('src/assets/home/background-home-desktop.jpg')",
        "destination-xs":
          "url('src/assets/destination/background-destination-mobile.jpg')",
        "destination-sm":
          "url('src/assets/destination/background-destination-tablet.jpg')",
        "destination-md":
          "url('src/assets/destination/background-destination-desktop.jpg')",
        "crew-xs": "url('src/assets/crew/background-crew-mobile.jpg')",
        "crew-sm": "url('src/assets/crew/background-crew-tablet.jpg')",
        "crew-md": "url('src/assets/crew/background-crew-desktop.jpg')",
        "technology-xs":
          "url('src/assets/technology/background-technology-mobile.jpg')",
        "technology-sm":
          "url('src/assets/technology/background-technology-tablet.jpg')",
        "technology-md":
          "url('src/assets/technology/background-technology-desktop.jpg')"
      }
    }
  },
  colors: {
    "main-white": "#E5E7DC",
    "white-opacity": "rgba(255, 255, 255, 0.1)"
  },
  fontFamily: {
    barlow: ["Barlow Condensed", "sans-serif"],
    bellefair: ["Bellefair", "serif"]
  },
  plugins: []
};
