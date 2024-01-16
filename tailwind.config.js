/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        VeryDark_bg: "hsl(228, 28%, 20%)",
      },
      backgroundImage: {
        toggle: "linear-gradient(to right,hsl(210, 78%, 56%),hsl(146, 68%, 55%))   ",
      },
    },
  },
  plugins: [function ({ addVariant }) {}],
};
