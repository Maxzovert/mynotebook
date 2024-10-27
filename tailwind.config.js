/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#fffcf2',
      'lgrey': '#ccc5b9',
      'dgrey': '#403d39',
      'black': '#252422',
      'orange': '#eb5e28',
    },
  },
  plugins: [],
}

