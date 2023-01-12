/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#d5d6e0",
          200: "#aaadc0",
          300: "#8084a1",
          400: "#555b81",
          500: "#2b3262",
          600: "#22284e",
          700: "#1a1e3b",
          800: "#111427",
          900: "#090a14",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
