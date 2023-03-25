/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        GrayDefault: "#F7F3F2",
        BorderColor: "#E9E7E7",
        GreenDefault: "#4B5254",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
