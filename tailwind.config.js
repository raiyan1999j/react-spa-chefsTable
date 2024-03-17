/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'lexend':["Lexend","sans-serif"]
      },
      backgroundImage:{
        'bannerImg':"linear-gradient(0.00deg, #150b2be6,#150b2b00 100%),url('./public/bannerImg.png')"
      },
      screens:{
        'small':{'min':'0px','max':'576px'},
        'medium':{'min':'576px','max':'768px'}
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui:{
    darkTheme: "light"
  }
}

