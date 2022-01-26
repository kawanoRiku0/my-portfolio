module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Pacifico: ["Pacifico"],
      },
      colors: {
        "main-purple": "#D08DEB",
        "main-blue": "#4CC0F5",
        "main-green": "#6ADE50",
        "main-yellow": "#F5C34C",
        "main-red": "#F09C9C",
      },
    },
  },
  plugins: [],
};
