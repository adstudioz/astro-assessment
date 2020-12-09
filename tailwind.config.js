module.exports = {
  theme: {
    screens: {
      sm: '640px',
      md: '800px',
      lg: '1024px',
      xl: '1440px',
    },
    fontFamily: {
      display: ['Roboto', 'sans-serif'],
      body: ['Roboto', 'sans-serif'],
    },
    fontSize: {
      10: '10px',
      12: '12px',
      14: '14px',
      16: '16px',
      20: '20px',
      28: '28px',
      32: '32px',
    },
    borderWidth: {
      1: '1px',
    },
    spacing: {
      '05': '0.5px',
      0: '0',
      1: '1px',
      4: '4px',
      6: '6px',
      10: '10px',
      12: '12px',
      14: '14px',
      16: '16px',
      18: '18px',
      20: '20px',
      25: '25px',
      30: '30px',
      34: '34px',
      40: '40px',
      50: '50px',
      80: '80px',
      100: '100px',
      150: '150px',
      200: '200px',
      250: '250px',
      300: '300px',
      500: '500px',
    },
    extend: {
      colors: {
        white: {
          100: '#FFFFFF',
        },
        gray: {
          100: '#F6F6F6',
          200: '#9B9B9B',
          300: '#E6E6E6',
          400: '#CDCDCD',
        },
        black: {
          100: '#0F0F0F',
        },
        red: {
          100: '#ea148c',
        },
      },
    },
    maxWidth: {
      0: '0',
      1: '25%',
      2: '50%',
      4: '75%',
      100: '100px',
      150: '150px',
      400: '400px',
      500: '500px',
      full: '100%',
    },
    customForms: (theme) => ({
      default: {
        input: {
          '&:focus': {
            boxShadow: undefined,
            borderColor: undefined,
          },
        },
        checkbox: {
          '&:focus': {
            boxShadow: undefined,
            borderColor: undefined,
          },
        },
      },
    }),
  },
  purge: ['./src/**/*.html', './src/**/*.vue'],
  variants: {},
  corePlugins: {
    float: false,
    clear: false,
    scale: false,
    rotate: false,
  },
};
