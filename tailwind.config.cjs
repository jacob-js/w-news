/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      animation: {
        'grow': 'grow .3s ease-in'
      },
      keyframes: {
        'grow': {
          '0%': {'width': '0%'},
          '100%': {'width': '100%'}
        }
      }
    },
  },
  plugins: [],
}
