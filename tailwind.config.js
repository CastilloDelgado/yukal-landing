/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#E096E3',
          200: '#AE74B0',
          300: '#4C334D',
          400: '#302030',
          500: '#1C131C',
        },
        light: {
          100: '#FFDCD4',
          200: '#F2D1C9',
          300: '#D8BBB4',
          400: '#B89F98',
          500: '#85736E',
        }
      },
    },
  },
  plugins: [],
}