const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js",
    clean: true
  },
  resolve: {
    modules: [path.resolve(__dirname, './src'), 'node_modules'],
    extensions: ['.js', '.jsx', '.json']
  },
  devtool: 'source-map',
  devServer: {
    static: path.join(__dirname, "/dist"),
    port: 3000,
    open: true
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: "./public/index.html"
    })
  ],
  module: {
    rules: [
      {
        test: [/\.m?js$/, /\.m?jsx$/],
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
       }
    ]
  }
};