/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react")
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
    "./public/index.html",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [nextui()],
};
