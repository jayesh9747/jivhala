/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-jivhala': 'var(--BLUE-Jivhala, #0B1956)',
        cream: '#FAF3EB',
      },
      screens: {
        xs: { max: '378px' }, // Custom breakpoint for screens below 375px
        // 'sm': '374px',    // Small devices (phones)
        // 'md': '768px',    // Default medium size
        // 'lg': '1024px',   // Default large size
        'xl': '1200px',   // Custom breakpoint for 1200px
        '2xl': '1440px',  // Custom breakpoint for 1440px
      },
      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif'],
        inter:['Inter', 'sans-serif'],
        bebas: ["Bebas Neue", "sans-serif"],
        roboto: ['Roboto', 'sans-serif'],
      },
      
    },
  },
  plugins: [],
}