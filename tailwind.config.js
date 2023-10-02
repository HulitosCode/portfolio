module.exports = {
  content: [
      "./templates/*",
      "./static/css/*",
      "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("flowbite/plugin")
  ],
}