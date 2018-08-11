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
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        include: [path.resolve(__dirname, "src")],
        exclude: [path.resolve(__dirname, "node_modules")]
      }
    ]
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
