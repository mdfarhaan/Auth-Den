module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      text: "#d5d6d7",
      primary: "#2b343b",
      secondary: "#1e272e",
    },
    extend: {
      borderRadius: {
        round: "2.5px",
      },
    },
  },
  plugins: [],
};
