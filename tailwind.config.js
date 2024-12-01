/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        NavbarImg: "url('https://i.ibb.co.com/M577vs9/15.jpg')",
       bannerImg: "url('https://i.ibb.co.com/mFVwnJR/3.png')",
      }
    },
  },
  plugins: [require('daisyui'),],
}