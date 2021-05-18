const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/app.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "dist",
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  devServer: {
    contentBase: "./",
    hot: true,
    inline: true,
    host: "localhost",
    port: 8000,
    watchOptions: {
      poll: true,
    },
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
};
