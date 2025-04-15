/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#00AEEF',
          light: '#33BEFF',
          dark: '#0090C8',
        },
        secondary: {
          DEFAULT: '#8A2BE2',
          light: '#9D44FF',
          dark: '#6A1CB3',
        },
        metallic: {
          DEFAULT: '#71809B',
          light: '#A3AEBF',
          dark: '#4A5568',
        },
        dark: {
          DEFAULT: '#1A1A2E',
          light: '#2D2D44',
          dark: '#0F0F1A',
        }
      },
    },
  },
  plugins: [],
};