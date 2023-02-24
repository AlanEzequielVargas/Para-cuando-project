/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages//*.{js,ts,jsx,tsx}',
    './components//*.{js,ts,jsx,tsx}',
  ],
  // Ensure these match with .storybook/preview.js
  theme: {
    extend: {
      colors: {
        'BLUE': '#1B4DB1',
        'YELLOW': '#F3F243',
        'PINK': '#FF64BC',
        'BLACK': '#000000',
        'BLACKLIGHT': '#1A1E2E',
        'GRAY DARK': '#6E6A6C',
        'GRAY': '#A7A6A7',
        'GRAY LIGHTER': '#F8F7FA',
        'GRAY LIGHT': '#D9D9D9',
        'RED': '#EF3F47'
      },
      screens: {
        xs: '375px',
        sm: '600px',
        md: '900px',
        lg: '1200px',
        xl: '1536px',
      },
      height: {
        '483px': '30.188rem',
        "488px": "30.5rem",
        "454": '454px'
      },
      width: {
        '362px': "22.625rem",
        '299' : '299px'
      },
    },
    plugins: [],
  }
};