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
        transitionTimingFunction: {
          'inBounce': 'cubic-bezier(0.8, 0, 1, 1)',
          'outBounce': 'cubic-bezier(0, 0, 0.2, 1)',
         },
        keyframes: {
          "animate-bounce": {
            '0%, 100%': { transform: 'translateY(0)',
                         
                          transitionTimingFunction: 'inBounce'
              },
            '50%': {     transform: 'translateY(25%)',
                        
                        transitionTimingFunction: 'outBounce'
               },
          }
        },
        animation:{
          animatebounce:" bounce 1s infinite"
        } ,
      
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
}
