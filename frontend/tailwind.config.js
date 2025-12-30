/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        beige: "#DDD3C8",
        dark: "#2A2A33",
      },
      fontFamily: {
        basic: ["Basic", "sans-serif"],
      },
    },
  },
  plugins: [],
};
