/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      sans:'Roboto Mono, monospace'
    },
    extend: {
      backgroundColor: {
        'body': 'white', // Set your desired background color
      },
    },
  },
  plugins: [],
}