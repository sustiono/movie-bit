const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Source Sans Pro", ...fontFamily.sans],
        serif: ["Playfair Display", ...fontFamily.serif],
      },
    },
  },
  variants: {
    extend: {
      textColor: ["group-hover"],
      borderColor: ["group-hover"],
      borderWidth: ["group-hover"],
      scale: ["group-hover"],
    },
  },
  plugins: [],
};
