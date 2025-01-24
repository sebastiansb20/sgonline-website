/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-100%)" },
          "50%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
      animation: {
        "slide-down": "slideDown 2s infinite linear",
        "appear-down": " ease-in-out duration-500 "
      },
    },
  },
  plugins: [],
}

