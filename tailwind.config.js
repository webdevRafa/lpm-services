/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
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
