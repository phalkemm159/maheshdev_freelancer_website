/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: { sans: ["Arial", "Helvetica", "sans-serif"] },
      colors: {
        ink: "#101828",
        muted: "#667085",
        accent: "#16a36a",
        paper: "#f7f9f8"
      },
      boxShadow: {
        soft: "0 18px 60px rgba(16,24,40,.08)"
      }
    },
  },
  plugins: [],
};
