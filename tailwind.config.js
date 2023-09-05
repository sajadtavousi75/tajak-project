/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bg:"#E0EAF1",
        text:"#2E3A48",
        gmain:"#519D9E",
        red:"#EB4B5A",
        gmelo:"#C9DEE2",
        m22:"#8DBEC0"
        
      },
      fontFamily:{
        roya:['Roya']
      }
    },
  },
  plugins: [],
}

