/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: ["var(--font-sophia)", ...fontFamily.sans],
        Nanum: ['Nanum Gothic']
      },
      backgroundImage: {
        'banner': "url('../src/Images//Logos/Banner.png')",
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}

