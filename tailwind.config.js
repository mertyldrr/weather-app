const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      poppins: ['"Poppins"', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      backgroundImage: {
        munich: "url('assets/munich.jpg')",
      },
    },
  },

  plugins: [require("daisyui"), require("tailwind-scrollbar")],
};
