/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "Noto-Sans": ["Noto Sans Thai", "sans-serif"],
        "IBM-Plex-Sans": ["IBM Plex Sans", "sans-serif"],
      },
      colors: {
        navy: "#0A2468",
        skyblue: "#28B6EF",
        lightblue: "#3558F0",
        lightgreen: "#11C277",
      },
      backgroundImage: {
        hero: "url('/images/bangkok-map-blur.png')",
      },
    },
  },
  plugins: [],
};
