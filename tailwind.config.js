const colors = require("tailwindcss/colors");
module.exports = {
  purge: {
    mode: "layers",
    content: [
      "src/**/*.js",
      "src/**/*.jsx",
      "src/**/*.ts",
      "src/**/*.tsx",
      "public/**/*.html",
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: colors.lightBlue,
        gray: colors.trueGray,
        red: colors.yellow,
        "btn-teal": "#0bb7b7",
        "graph-teal": "#66cdcd",
        "navy-blue": "#143047",
        "gradient-teal": "#27e3e3",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
