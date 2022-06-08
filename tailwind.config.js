module.exports = {
  mod: "jit",
  content: ["./src/**/*.{html,tsx,ts}"],
  theme: {
    extend: {},
    colors: {
      "white": "#fff",
      "orange": "hsl(25, 97%, 53%)",
      "lightGray":  "hsl(217, 12%, 63%)",
      "mediumGray": "hsl(216, 12%, 54%)",
      "darkBlue": "hsl(213, 19%, 18%)",
      "veryDarkBlue": "hsl(216, 12%, 8%)"
    },
    "fontFamily": {
      "main": ['Overpass', "sans-serif"]
    }
  },
  variant: {},
  plugins: [],
}
