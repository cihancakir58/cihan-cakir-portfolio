/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        gradient: 'gradient 8s linear infinite'
      },
      rotate: {
        360: '360deg',
      },
      backgroundColor : {
        'background': '#11071f',
      },
      fontFamily : {
        'Playfair' : ["Playfair Display", "serif"],
        'russo' : ["Russo One", "serif"],
        'Great-Vibes' : ["Great Vibes", "serif"]
      },
      space: {
        'wide': '5rem',
      },
    },
  },
  plugins: [],
}