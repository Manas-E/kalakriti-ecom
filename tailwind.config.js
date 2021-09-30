module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        amazon_blue: {
          light: "#232F3E",
          DEFAULT: "#131921",
        },
        animation: ['group-hover'],

      },
    },
  },
  variants: {
    extend: {  transitionTimingFunction: {
      'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
      'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
     }},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
