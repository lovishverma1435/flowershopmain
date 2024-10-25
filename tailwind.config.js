/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors:{
        customBlack:"#121212"
      }
    },
  },
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
  ],
}