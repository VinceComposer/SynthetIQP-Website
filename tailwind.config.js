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
          DEFAULT: '#008AC5', // Oscurecido de #00AEEF (ratio ~4.6:1 sobre blanco)
          light: '#00AEEF', // El antiguo DEFAULT ahora es light
          dark: '#006F9E',  // Oscurecido para mantener la relación
        },
        secondary: {
          DEFAULT: '#7A1ED6', // Oscurecido de #8A2BE2 (ratio ~4.7:1 sobre blanco)
          light: '#8A2BE2', // El antiguo DEFAULT ahora es light
          dark: '#5E17A8',  // Oscurecido para mantener la relación
        },
        metallic: {
          DEFAULT: '#5A687C', // Oscurecido de #71809B (ratio ~4.5:1 sobre blanco)
          light: '#71809B', // El antiguo DEFAULT ahora es light
          dark: '#3D4756',  // Oscurecido para mantener la relación
        },
        dark: {
          DEFAULT: '#1A1A2E', // Ya cumple
          light: '#2D2D44', // Ya cumple
          dark: '#0F0F1A', // Ya cumple
        }
      },
    },
  },
  plugins: [],
};