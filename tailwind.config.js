/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        dm: ["DM Sans", "sans-serif"],
      },
      boxShadow: {
        "3xl": "14px 17px 40px 4px",
        inset: "inset 0px 18px 22px",
        darkinset: "0px 4px 4px inset",
      },
    },
  },
  plugins: [],
}

