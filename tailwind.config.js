const tailwindColors = require('tailwindcss/colors');

const sizes = {};

for (let i = 0; i < 500; i++) {
  sizes[i] = `${i / 4}rem`;
  sizes[`${i}.5`] = `${(i + 0.5) / 4}rem`;
}

const textSizes = {};

for (let i = 0; i < 100; i++) {
  textSizes[i] = `${i}px`;
}

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}', './styles/**/*.scss'],
  theme: {
    screens: {
      xxs: '320px',
      xs: '480px',
      sm: '600px',
      'max-md': { max: '767px' },
      md: '768px',
      'max-lg': { max: '989px' },
      lg: '990px',
      'max-xl': { max: '1199px' },
      xl: '1200px',
    },
    extend: {
      spacing: sizes,
      minHeight: sizes,
      minWidth: sizes,
      maxHeight: sizes,
      maxWidth: sizes,
      borderRadius: sizes,
      fontSize: sizes,
      colors: {
        primary: {
          DEFAULT: '#8CD790',
          dark: '#285943',
          light: '#D7FFF1',
        },
        red: {
          DEFAULT: '#dc3545',
        },
        blue: {
          DEFAULT: '#8CD790',
          dark: '#285943',
          light: '#D7FFF1',
          100: '#2bb1e0',
          200: '#1facde',
          700: '#061429',
        },
        black: {
          DEFAULT: '#000000',
          dark: '#2d2d2d',
          light: '#6B6A75',
        },
        gray: {
          ...tailwindColors.gray,
          DEFAULT: '#656567',
          dark: '#333333',
          light: '#dee2e6',
        },
      },
      fontFamily: {
        default: ['Nunito'],
      },
      zIndex: {
        '-1': -1,
      },
      boxShadow: {
        'yellow-md': '0 0 0 0.25rem #8d101740',
        'green-md': '0 0 0 0.25rem #00522c40',
        normal: '0 0.5rem 1rem rgba(0,0,0,0.15)',
      },
    },
    backgroundPosition: {
      'top-right': 'top right',
    },
  },
  plugins: [],
};
