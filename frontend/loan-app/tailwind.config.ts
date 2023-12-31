/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      primary: {
        1: '#228a95',
        2: '#187680',
      },
      secondary: {
        1: '#ef9c4b',
        2: '#fd8030',
      },
      background: {
        1: '#f8f8f8',
        2: '#efdf4b'
      },
      alert: {
        1: '#CD2B31',
        2: '#FDD8D8',
        3: '#FFE5E5',
      },
      success: {
        1: '#31AC2B',
        2: '#CCEBD7',
        3: '#DDF3E4',
      },
      font: {
        1: '#777777',
        2: '#ffffff',
      }
    },
    fontSize: {
      heading1: ['44px', '56px'],
      heading2: ['36px', '45px'],
      heading3: ['32px', '40px'],
      heading4: ['28px', '35px'],
      heading5: ['24px', '30px'],
      heading6: ['20px', '25px'],
      heading7: ['16px', '20px'],
      body1: ['16px', '28px'],
      body2: ['14px', '24px'],
      btnBig: ['16px', '0px'],
      btnMedium: ['14px', '0px'],
      inputPlace: ['16px', '0px'],
      inputLabel: ['14px', '17px'],
    },
    fontFamily: {
      flexo: ['flexo', 'sans-serif'],
    }

  },
  plugins: [],
};


