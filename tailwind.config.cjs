/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        lightTheme: {
          primary: "#FFFFFF",
          secondary: "#f472b6",
          accent: "#22c55e",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      {
        darkTheme: {
          primary: "#000000",
          secondary: "#ec4899",
          accent: "#16a34a",
          neutral: "#ffffff",
          "base-100": "#1e293b",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
