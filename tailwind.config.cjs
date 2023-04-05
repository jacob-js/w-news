/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      animation: {
        'grow': 'grow .3s ease-in',
        'maximize': 'maximize 1s alternate'
      },
      keyframes: {
        'grow': {
          '0%': {'width': '0%'},
          '100%': {'width': '100%'}
        },
        'maximize': {
          '0%': {'width': '0px', 'height': '0px'},
          '100%': {'width': 'max-content', 'height': 'max-content'}
        }
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
