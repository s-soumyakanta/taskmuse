/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary:{
          400:"11009E"
        },
        secondary:{
          400:"4942E4"
        },
        tertiary:{
          400:"8696FE"
        }
      }
    },
  },
  plugins: [],
}