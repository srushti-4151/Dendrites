/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',   // Small screens (default Tailwind value)
        'md': '768px',   // Medium screens
        'lg': '1025px',  // Large screens
      },
    },
  },
  plugins: [],
}

