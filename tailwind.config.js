/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html,css}"],
  theme: {
    extend: {
      colors:{
        primary:{
          400:"#0008C1"
        },
        secondary:{
          400:"#2146C7"
        },
        tertiary:{
          400:"#E6CBA8"
        }
      }
    },
  },
  plugins: [],
}


