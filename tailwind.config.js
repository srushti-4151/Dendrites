/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // animation: {
      //   'fade-in-line': 'fade-in-line 0.5s ease-out forwards',
      // },
      // keyframes: {
      //   'fade-in-line': {
      //     '0%': { opacity: '0', width: '0' },
      //     '100%': { opacity: '1', width: '100%' },
      //   },
      //   'fade-in': {
      //     '0%': { opacity: '0' },
      //     '100%': { opacity: '1' },
      //   },
      // },
      keyframes: {
        hideAfter: {
          '0%': { transform: 'scaleX(1)', visibility: 'visible' },
          '100%': { transform: 'scaleX(0)', visibility: 'hidden' },
        },
      },
      animation: {
        hideAfter: 'hideAfter 0.3s ease-out',
      },
      
    },
  },
  plugins: [
    
  ],
}

