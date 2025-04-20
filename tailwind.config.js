/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'base-theme': '#c26a23',
          'base-theme-light': '#fff4eb',
          'base-theme-dark': '#e76f51',
          'bg-gradient-light': '#ffe8d6', 
          'bg-gradient-dark': '#f9bb8b',
          'font-color-light': '#ffe8d6',
          'font-color-dark': '#6a2c1a',
        },
      },
    },
    plugins: [],
  }