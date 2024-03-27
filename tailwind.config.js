/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#22d3ee",
        dark: "#1e293b",
        darken: "#64748b",
        warnawarni:
          "radial-gradient(circle, rgba(195, 202, 214, 1) 0%, rgba(199, 251, 254, 1) 50%, rgba(195, 202, 214, 1) 100%)",
      },
      screens: {
        "2xl": "1320px",
      },
      rotate: {
        30: "30deg",
        31: "31deg",
        32: "32deg",
        33: "33deg",
        34: "34deg",
        35: "35deg",
      },
    },
  },
  plugins: [],
};
