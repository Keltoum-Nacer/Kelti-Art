/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        beige: "#DDD3C8",
        dark: "#2A2A33",
        primary:"#7AA1B8",
        secondary:"#49657B",
        button: "#314151"
      },
      fontFamily: {
        basic: ["Basic", "sans-serif"],
      },
       dropShadow: {
        blue: "0px 0px 10px #49657B",
      },
    },
  },
  plugins: [],
};
