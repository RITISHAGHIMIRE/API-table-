/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        ds:'rgba(255,255,255,.6)'
      }
    },
  },
  plugins: [],
}

