const path = require("path");

module.exports = {
  mode: "development",
  entry: ["./src/app.js"],
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "",
    filename: "app.js",
    sourceMapFilename: "app.js.map"
  },
  devtool: "inline-source-map",
  resolve: {
    modules: [path.resolve("./node_modules")],
    extensions: [".js", ".json", ".jsx", ".css"]
  },
  devServer: {
    contentBase: path.join(__dirname, "./"),
    publicPath: "/dist",
    compress: false,
    port: 9000
  }
};
