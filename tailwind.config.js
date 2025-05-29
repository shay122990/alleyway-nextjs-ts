/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        grayCustom: "#545454",
        mustard: "#df8a17",
        lightMustard: "#fea537",
        eggshell: "#fdf5e6",
        tealCustom: "#2bbfbb",
      },
      scale: {
        120: "1.2",
      },
      animation: {
        "infinite-scroll": "infinite-scroll 40s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      perspective: {
        1000: "1000px",
      },
      rotate: {
        "y-180": "180deg",
      },
    },
  },
  plugins: [],
};
