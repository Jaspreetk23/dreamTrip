/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-radial-gradient': 'radial-gradient(circle, #53B667 20%, #4EAF61 40.79%, #43A156 80%)',
      },
      fontFamily: {
        'rob': ['Roboto'],
        'outfit': ['Outfit'],
        'poppins': ['Poppins', 'sans-serif'],
        'sans': ['Open Sans','Poppins', 'sans-serif'],
        'quasi':['Quasi' , 'Open Sans'],
      },
      fontSize:{
        'xxs': '0.625rem',
      },
    },
    screens: {
      xsm: { max: "480px" },
      sm: { min: "481px", max: "720px" },
      md: { min: "721px", max: "1024px" },
      lg: { min: "1025px", max: "1599px" },
      xl: { min: "1600px", max: "1999px" },
      "2xl": { min: "2000px" },
    },
  },
  plugins: [],
};
