const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    color:{
      primary: colors.cyan,
      secondary: colors.slate,
      neutral: colors.gray,
    },
  },
  plugins: [],
}