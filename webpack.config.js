const path = require("path");

module.exports = {
  mode: "production",
  entry: ["./src/app.js"],
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "",
    filename: "app.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        include: [path.resolve(__dirname, "src")],
        exclude: [path.resolve(__dirname, "node_modules")]
      }
    ]
  }
};
