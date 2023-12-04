/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily:{
        nunitoSans: ['Nunito Sans'],
        dmSans: ['DM Sans']
      },
      colors: {
        testimonial: '#E7E7DA'
      },
      textColor:{
        
      },
      backgroundColor:{
        testimonial: '#E7E7DA'
      }
    },
  },
  plugins: [],
}

