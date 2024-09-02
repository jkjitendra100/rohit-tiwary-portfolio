/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust paths according to your project structure
    "./public/index.html",
  ],

  plugins: ["prettier-plugin-tailwindcss"],

  theme: {
    extend: {
      colors: {
        primary: "#7e22ce",
        primaryDark: "#5b21b6",
        secondary: "#f59e0b",
        secondaryDark: "#d97706",
        primaryLight: "#e9d5ff",
        secondaryLight: "#ddd6fe",
        backgroundColor: "#f3f4f6",
        borderColor: "#e2e8f0",
        shadowColor: "#e2e8f0",
      },
      scale: {
        90: "0.9",
        80: "0.8",
        70: "0.7",
        60: "0.6",
        50: "0.5",
        40: "0.4",
        30: "0.3",
        20: "0.2",
        10: "0.1",
      },
    },
  },

  variants: {
    extend: {
      scale: ["responsive"],
    },
  },
};
