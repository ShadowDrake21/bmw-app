/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'gray-20': '#F8F4EB',
        'gray-50': '#EFE6E6',
        'gray-100': '#DFCCCC',
        'gray-500': '#5E0000',
        'primary-100': '#FFE1E0',
        'primary-300': '#FFA6A3',
        'primary-500': '#FF6B66',
        'secondary-400': '#FFCD5B',
        'secondary-500': '#FFC132',
      },
      fontFamily: {
        dmsans: ['DM Sans', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        helveticaNeue: ['Helvetica Neue Light'],
      },
      backgroundImage: {
        'new-sound': "url('./assets/model-i5/newSound/newSoundBackground.jpg')",
      },
      dropShadow: {
        '10px': '0 10px 5px #e9e9e9',
      },
      fontSize: {
        11: '11px',
        13: '13px',
        15: '15px',
        23: '23px',
        28: '28px',
      },
      letterSpacing: {
        minusSX: '-0.1px',
        0.25: '0.25px',
        0.5: '0.5px',
        2.75: '2.75px',
      },
      margin: {
        smallProcents: '4%',
        normalProcents: '8%',
      },
      padding: {
        60: '60px',
        80: '80px',
      },
    },
    screens: {
      xs: '480px',
      sm: '768px',
      md: '1060px',
      xl: '1280px',
      xxl: '1600px',
    },
  },
  plugins: [],
}
