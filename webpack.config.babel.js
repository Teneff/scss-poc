import path from 'path';
import PluginHTML from "html-webpack-plugin";
import PluginMiniCssExtract from 'mini-css-extract-plugin';

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
          PluginMiniCssExtract.loader,
          // Translates CSS into CommonJS
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                context: path.resolve(__dirname, 'src'),
              },
            }
          },
          // Compiles Sass to CSS
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          }
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
    }),
    new PluginMiniCssExtract({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
    })
  ]
};
