/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'wide': ['wide'], 
        'main': ['main'], 
      },
      colors: {
        'darkbrown': '#4b3d2d',
        'lightbrown': '#c1b49a',
      },
      textShadow: {
        'custom': '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
      },
    },
  },
  plugins: [],
}