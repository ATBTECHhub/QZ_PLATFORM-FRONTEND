/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        heroBg: "url('../src/assets/hero-Bg.svg')",
      },
    },
    fontFamily: {
      poppin: "'Poppins', sans-serif",
      rubik: "'Rubik', serif",
      inter: "'Inter', sans-serif",
      Montserrat: "'Montserrat', sans-serif",
    },
  },
  plugins: [],
};

