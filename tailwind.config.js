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
        sdg1: "#e5233d",
        sdg2: "#dda73a",
        sdg3: "#4CA146",
        sdg4: "#C7212F",
        sdg5: "#EF402D",
        sdg6: "#27BFE6",
        sdg7: "#FBC412",
        sdg8: "#A31C44",
        sdg9: "#F26A2E",
        sdg10: "#E01483",
        sdg11: "#F89D2A",
        sdg12: "#BF8D2C",
        sdg13: "#407F46",
        sdg14: "#1F97D4",
        sdg15: "#59BA47",
        sdg16: "#136A9F",
        sdg17: "#14496B"
      },
      backgroundImage: {
        hero: "url('/images/bangkok-map-blur.png')",
      },
    },
  },
  plugins: [],
};
