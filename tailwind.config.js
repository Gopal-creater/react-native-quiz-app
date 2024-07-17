/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FEFEFF",
        secondary: {
          DEFAULT: "#A52EC1",
        },
        black: {
          DEFAULT: "#000",
        },
        gray: {
          DEFAULT: "#CDCDE0",
        },
      },
      fontFamily: {
        jReg: ["JetBrainsMono-Regular"],
        jMed: ["JetBrainsMono-Medium"],
        jBold: ["JetBrainsMono-Bold"],
        jExtraBold: ["JetBrainsMono-ExtraBold"],
      },
    },
  },
  plugins: [],
};
