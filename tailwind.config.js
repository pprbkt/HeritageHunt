/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rom: {
          bg: '#FFFFFF',
          notice: '#E2EEFD',
          noticeBorder: '#CCE0FA',
          black: '#0A0A0A',
          charcoal: '#1A1A1A',
          gray: '#757575',
          lightGray: '#F5F5F5',
          border: '#E5E5E5',
          darkBorder: '#333333',
          gold: '#C59A45',
          maroon: '#7A1C2E',
        }
      },
      fontFamily: {
        condensed: ['"Bebas Neue"', 'Oswald', 'Anton', 'sans-serif'],
        bebas: ['"Bebas Neue"', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
        sans: ['Inter', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        kannada: ['"Noto Sans Kannada"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
