const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssPlugin = require("mini-css-extract-plugin");
module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: "development",
  entry: "./index.js",
  output: {
    filename: "bundle.[hash].js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extentions: [".js"],
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@core": path.resolve(__dirname, "src/core"),
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: "index.html",
    }),
    new CopykPlugin([
      {
        from: path.resolve(__dirname, "src/favicon.ico"),
        to: path.resolve(__dirname, "dist"),
      },
    ]),
    new MiniCssPlugin({
      filename: "bundle.[hash].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
};
