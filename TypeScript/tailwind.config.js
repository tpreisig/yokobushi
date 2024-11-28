/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {
      backgroundImage: {
        'custom': 'linear-gradient(to right, #fff 2px, transparent 2px), linear-gradient(to top, #fff 2px, transparent 2px);',
      },
      backgroundSize: {
        'size': '600px 600px',
      },
    },
  },
  plugins: [],
}