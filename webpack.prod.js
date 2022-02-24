const path = require("path");
const config = require("./webpack.config.js");
const { merge } = require('webpack-merge');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(config, {
  mode: "production",
  output: {
    filename: "[name].[contentHash].js",
    path: path.resolve(__dirname, "dist")
  },
  optimization: {
    minimizer: [
      new TerserPlugin(),
    ]
  },
});