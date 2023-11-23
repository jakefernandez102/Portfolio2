/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        ephesis: ['Ephesis', 'cursive'],
        arvo: ['Arvo', 'serif'],
      }
    },
    screens: {
      'xs': { 'min': '0px', 'max': '460px' },
      'sm': { 'min': '461px', 'max': '768px' },
      'md': { 'min': '768px' },
    },
  },
  plugins: [],
}

