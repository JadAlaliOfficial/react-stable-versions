/** @type {import('tailwindcss').Config} */

const config = {
  darkMode: 'class', // or 'media' for system preference
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 0px 2px  rgba(0, 0, 0, 0.5)',
        'custom-dark': '0 0px 2px rgba(255, 255, 255, 0.5)' // White shadow for dark mode
      },
      keyframes: {
        shine: {
          '0%': { 'background-position': '100%' },
          '100%': { 'background-position': '-100%' },
        },
      },
      animation: {
        shine: 'shine 5s linear infinite',
      },
    },
  },
  plugins: [],
}

export default config
