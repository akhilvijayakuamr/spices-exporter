/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a4d2e',
          light: '#4f772d',
          dark: '#0f2b1d',
        },
        secondary: '#ff9f1c',
        accent: '#e8f5e9',
        dark: '#0f2b1d',
        bg: '#f9fbf9',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
