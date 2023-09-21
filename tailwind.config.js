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
      Rebeccapurple: "#663399",
      secondary: "#544f86",
      white: "#ffffff",
      gray: "#f2f2f2",
    },
    extend: {},
  },
  plugins: [],
};
