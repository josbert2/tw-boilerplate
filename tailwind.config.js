const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  presets: [
    require('./public/presets/tw-minimalist.js')
  ],
  theme: {
   
    fontFamily: {
      sans: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: [
        'Georgia',
        'Cambria',
        '"Times New Roman"',
        'Times',
        'serif',
      ],
      mono: [
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
    },
    fontSize: {
      xs: '0.75rem',
      '13px': '13px',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      colors: {
        'blueGray': {
            '50': '#f7f8f9', 
            '100': '#f0f1f3', 
            '200': '#d8dce2', 
            '300': '#c1c7d1', 
            '400': '#939eae', 
            '500': '#64748b', 
            '600': '#5a687d', 
            '700': '#4b5768', 
            '800': '#3c4653', 
            '900': '#313944'
        },
        'blue': {
          '50': '#f4f7fe', 
          '100': '#e9effd', 
          '200': '#c9d8fa', 
          '300': '#a8c1f7', 
          '400': '#6692f1', 
          '500': '#2563eb', 
          '600': '#2159d4', 
          '700': '#1c4ab0', 
          '800': '#163b8d', 
          '900': '#123173'
        }
      }
    },
  },
  variants: {
    fill: ['hover', 'focus'],
  },
  plugins: [],
}
