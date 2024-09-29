/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        buttonBgColor: "#009129",
        cardImgBgColor: "#03252B",
      },
      fontFamily: {
        "montserrat": ["Montserrat", "sans-serif"]
      },
      screens: {
        '2sm': '280px', // Custom for 280px
        'tablet': '684px', // Custom for 684px breakpoint
        'large-tablet': '703px', // Custom for 703px breakpoint
        'lg-desktop': '900px', // Custom for 900px breakpoint
        'max-desktop': '1220px', // Custom for 1220px breakpoint
      }
    },
  plugins: [],
  }
}