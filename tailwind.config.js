/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#0088cc',
      },
    },
  },
  variants: {},
  plugins: [
    require('tailwindcss'),
    require('autoprefixer')
  ],
}