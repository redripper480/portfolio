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
        cornerstone: ["Cornerstone", "monospace"],
        isidora: ["Isidora", "monospace"],
        simplifica: ["Simplifica", "monospace"],


      },
      colors:{
        "yellow-background": "#facb2e",
        "light-black": "#292929",
        "lighter-black": "#555555",
        "dark-black": "#282828",
        "lighterer-black": "#292929",



        "underline-blue":"#0087ca"
      }
    },
    
  },
  plugins: [],
}

