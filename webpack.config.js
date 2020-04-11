// module.exports = {
//         type: 'javascript/auto',
//         test: /\.html/,
//         use: [
//           {
//             loader: 'file-loader',
//             include: [path.resolve(__dirname, 'src/scripts/')],
//             options: {
//                 name: '[name].[ext]'
//             }
//           }
//         ]
// };
// // const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
// // const path = require('path');
// // module.exports = {
// //   // ...
// //   optimization: {
// //     minimize: false,
// //   },
// //   test: /\.(jpe?g|png|gif|svg)$/i,
// //   loader: "file-loader?name=/img/[name].[ext]",
// //   entry: './src/app.js',
// //   output: {
// //     filename: 'bundle.js',
// //     path: path.resolve(__dirname, 'dist')
// //   },
// //   watch: true,
// //   module: {
// //     rules: [
// //       {
// //         test: /\.(scss)$/,
// //         use: [
// //           {
// //             // Adds CSS to the DOM by injecting a `<style>` tag
// //             loader: 'style-loader'
// //           },
// //           {
// //             // Interprets `@import` and `url()` like `import/require()` and will resolve them
// //             loader: 'css-loader'
// //           },
// //           {
// //             // Loader for webpack to process CSS with PostCSS
// //             loader: 'postcss-loader',
// //             options: {
// //               plugins: function () {
// //                 return [
// //                   require('autoprefixer')
// //                 ];
// //               }
// //             }
// //           },
// //           {
// //             // Loads a SASS/SCSS file and compiles it to CSS
// //             loader: 'sass-loader'
// //           }
// //         ]
// //       }
// //     ]
// //   },
// //   plugins: [
// //     new BrowserSyncPlugin({
// //       // browse to http://localhost:3000/ during development,
// //       // ./public directory is being served
// //       host: 'localhost',
// //       port: 3000,
// //       server: { baseDir: ['dist'] }
// //     },
// //     // plugin options
// //     {
// //       // prevent BrowserSync from reloading the page
// //       // and let Webpack Dev Server take care of this
// //       reload: true
// //     }
// //     )
// //   ]
// // }
