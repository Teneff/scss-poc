import path from 'path';
import PluginHTML from "html-webpack-plugin";

export default {
  mode: 'development',
  devServer: {
    open: true,
    compress: true,
    watchContentBase: true
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader"
        ]
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new PluginHTML({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};
