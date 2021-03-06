const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const WriteFilePlugin = require("write-file-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const PreloadWebpackPlugin = require("preload-webpack-plugin");
const ScriptExtHtmlWebpackPlugin = require("script-ext-html-webpack-plugin");
module.exports = {
  mode: "development",
  entry: {
    home: "./src/index.js",
    vendor: "./src/vendor.js",
    notfound: "./src/404.js"
  },
  module: {
    rules: [
      {
        test: /\.txt$/,
        use: "raw-loader"
      },
      {
        type: "javascript/auto",
        test: /\.json$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "scripts/",
              publicPath: "/scripts/"
            }
          }
        ]
      },
      // {
      //   test: /\.(png|jpg)$/,
      //   loader: 'url-loader',
      //   options:{
      //     name:"[name].[ext]",
      //     outputPath:"images/",
      //     publicPath:"/images/"
      //   }
      // },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              esModule: false,
              name: "[name].[ext]",
              outputPath: "images/",
              publicPath: "/images/"
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|ttf|otf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              esModule: false,
              name: "[name].[ext]",
              outputPath: "fonts/",
              publicPath: "fonts/"
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.mp4$/,
        use: [
          {
          loader: "file-loader",
          options: {
          name: "[name].[ext]",
          outputPath: "videos/",
          publicPath: "videos"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new WriteFilePlugin(),
    new CopyPlugin([
      {
        from: path.resolve(__dirname, "src", "robots.txt"),
        to: path.resolve(__dirname, "dist", "robots.txt")
      }
    ]),
    new HtmlWebpackPlugin({
      title: "patricio-home-page",
      filename: "index.html",
      template: "./src/index.html",
      inject: "head",
      excludeChunks: ["notfound"]
    }),
    new HtmlWebpackPlugin({
      title: "patricio-404-page",
      filename: "404.html",
      template: "./src/404.html",
      chunks: ["notfound"]
    }),
    new PreloadWebpackPlugin({
      rel: "preload",
      as(entry) {
        if (/\.(woff|woff2|ttf|otf)$/.test(entry)) return "font";
      },
      fileWhitelist: [/\.(woff|woff2|ttf|otf)$/],
      include: "allAssets"
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: "async"
    }),
    new ScriptExtHtmlWebpackPlugin({
      $: "jquery",
      jQuery: "jquery",
      jquery: "jQuery",
      "window.jQuery": "jquery"
    })
  ]
};
