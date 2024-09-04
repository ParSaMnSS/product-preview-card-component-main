/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/main.html"],
  theme: {
    extend: {
      colors:{
        'dark-green' : 'hsl(158, 36%, 37%)',
        'cream' : 'hsl(30, 38%, 92%)',
        'very-dark-blue' : 'hsl(212, 21%, 14%)',
        'dark-grayish-blue' : 'hsl(228, 12%, 48%)',
      },
      fontSize:{
        'paragraph' : '14px'
      },
    },
  },
  plugins: [],
}

