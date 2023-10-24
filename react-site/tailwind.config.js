/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'main': ['main'],
      },
      colors: {
        'lightbrown': '#c1b49a',
        'darkbrown': '#4b3d2d',
      },
    },
  },
  plugins: [],
}