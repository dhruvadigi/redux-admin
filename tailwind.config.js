/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Arial", "Helvetica ",'sans-serif'],
        'jost':[ 'Jost', 'sans-serif' ]
      },
      colors: {
        primary: "#000000", customBackgroundColor: "#27ceb4",
        abc:"#171825", 
       




      }
    },
  },
  variants: {},
  plugins: [],
};