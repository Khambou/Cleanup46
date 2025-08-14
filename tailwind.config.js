module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#00A1F2",
        "dark-primary": "#00A1F2",
        "text-primary": "#374955",
        "green-color": "#39C08F",
        secondary: "#F2F2F2",
        "red-color": "#FA6A72",
        "sky-blue-color": "#F0FBFF",
        "white-color": "#FFFFFF",
        "dark-color": "#1E1E1E",
        "grey-blue-color": "#2A323A",
        "grey-green-color": "#227255",
        "logo-grey": "rgba(67, 67, 67, 1)",
        gray: "#C4C3C3",
      },
      fontFamily: {
        "dm-sans": ["Rubik", "sans-serif"],
        grotesque: ["Bricolage Grotesque", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient": "url('/src/assets/images/HeroBg.svg')",
      },
    },
  },
  plugins: [],
};
