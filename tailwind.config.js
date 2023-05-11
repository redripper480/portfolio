/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "Sans-serif"],
        lato: ["Lato", "Sans-serif"],
        robotomono: ["Roboto Mono", "monospace"],
        martianomono: ["Martian Mono", "monospace"],

      },
      colors:{
        "yellow-background": "#FDD000",
      }
    },
    
  },
  plugins: [],
}

