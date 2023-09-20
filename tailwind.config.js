/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      primary: "#1C1936",
      secondary: "#544f86",
      rebeccapurple: "#663399",
      white: "#ffffff",
    },
    extend: {},
  },
  plugins: [],
};
