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
        'GRAY2': '#D9D9D9',
        'RED': '#EF3F47',
        'grey': '#F8F7FA',
        'grey2': '#6E6A6C',
        
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
        "454": '454px',
        "550": '550px',
        '560': '560px',
        '529': '529px',
        '381': '381px',
        '700': '700px',
        '208': '208px',
        '129': '129px',
        '117': '117px',
        '152': '152px',


      },
      width: {
        '362px': "22.625rem",
        '299' : '299px',
        '539': '539px',
        '557': '557px',
        '380': '380px',
        '117': '117px',
        '373': '373px',
        '378': '378px',
        '640': '640px',
        '350': '350px',
        '300': '300px'
      },
      minWidth: {
        '220': "220px"
      },
      gridTemplateRows: {
        // Simple 8 row grid
        '8': 'repeat(8, minmax(0, 1fr))',

        
      },
      spacing: {
        '150px': '150px',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
    plugins: [],
  }
};