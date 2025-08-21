/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-primary': '#3758F9',
        'dark-primary': '#152C52',
        'dark-secondary': '#111928',
        'gray-secondary': '#6B7280',
        'stroke': '#D4DCE6',
        'orange': '#F7941E',
      },
      fontFamily: {
        'inter': ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
