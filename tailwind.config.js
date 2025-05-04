const { transform } = require('typescript')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 1s ease-in forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { oapcity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)"},
        }
      },
      colors: {
        spurs: {
          silver: '#C4CED4',
          black: '#000000',
          teal: '#00B2A9',
          pink: '#EC008C',
          orange: '#F9423A',
          charcoal: '#1D252D',
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
