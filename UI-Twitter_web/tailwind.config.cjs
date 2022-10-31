/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    fontSize: {
      '2xs': 13,
      xs: 14,
      sm: 15,
      md: 16,
      lg: 19,
      xl: 20,
      '2xl': 21,
    },
    colors: {
      'Dark1': '#17202A',
      'Dark2': '#1C2733',
      'Dark3': '#283340',
      'Dark4': '#3A444C',
      'Dark5': '#5B7083',
      'Dark6': '#8899A6',
      'Dark7': '#EBEEF0',
      'Dark8': '#F7F9FA',
      'White': '#FFFFFF',
      'Black': '#0F1419',
      'Primary_Blue': '#1DA1F2',
      'Red_Rose': '#F4245E'
    },
    extend: {
      fontFamily: {
        sans: 'Poppins, sans-serif'
      },
    },
  },
  plugins: [],
}
