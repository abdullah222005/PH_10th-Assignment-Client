// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: { extend: {} },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: "#2563eb", // professional blue
          secondary: "#64748b", // neutral gray
          accent: "#22c55e", // subtle green
          neutral: "#1e293b",
          "base-100": "#ffffff",
        },
      },
      {
        dark: {
          ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
          primary: "#3b82f6",
          secondary: "#94a3b8",
          accent: "#10b981",
          neutral: "#0f172a",
          "base-100": "#1e293b",
        },
      },
    ],
  },
};
