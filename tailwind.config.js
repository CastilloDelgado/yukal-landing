/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['acumin-pro', 'sans'],
    },
    extend: {
      colors: {
        primary: {
          50: "#FBF8FB",
          100: "#F6F0F7",
          200: "#EBE0EE",
          300: "#DDC7E0",
          400: "#C9A5CD",
          500: "#AF80B5",
          600: "#936198",
          700: "#7A4E7D",
          800: "#654167",
          900: "#4C334D",
          950: "#341D35"
        },
        light: {
          50: "#FCF9F8",
          100: "#F8F3F2",
          200: "#EFE4E1",
          300: "#E8D8D3",
          400: "#E0C8C3",
          500: "#D8BBB4",
          600: "#BD8C7F",
          700: "#9E6152",
          800: "#684036",
          900: "#36211C",
          950: "#1B110E"
        },
        secondary: {
          50: "#FBF0EF",
          100: "#F7E2DE",
          200: "#F0C8C2",
          300: "#E7ABA1",
          400: "#E09185",
          500: "#D87464",
          600: "#CC4833",
          700: "#973526",
          800: "#66241A",
          900: "#31110C",
          950: "#180906"
        },
        dark: {
          50: "#EDEEF2",
          100: "#DCDEE5",
          200: "#B6BAC9",
          300: "#9299AF",
          400: "#6C7593",
          500: "#52596F",
          600: "#414658",
          700: "#323643",
          800: "#21232C",
          900: "#111317",
          950: "#09090C"
        }
      },
    },
  },
  plugins: [],
}