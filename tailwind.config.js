/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'yellow': 'hsl(47, 88%, 63%)',
        'white': 'hsl(0, 0%, 100%)',
        'black': 'hsl(0, 0%, 0%)',
        'grey': 'hsl(0, 0%, 48%)',
      },
      fontFamily: {
        'figtree': ['Figtree', 'sans-serif'],
      }
    },
  },
  plugins: [],
}