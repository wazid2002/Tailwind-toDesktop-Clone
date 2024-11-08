/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily:{
        'display':['Poppins','sans-serif'],
        'main':['Inter','sans-serif']
      },

      colors:{
        'primary':'#3238f2'
      }

    },
  },
  plugins: [],
}



