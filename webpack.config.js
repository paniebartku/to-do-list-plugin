/* eslint-disable */

const path = require("path");
const webpack = require("webpack"); // reference to webpack Object

// include the js minification plugin
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

// include the css extraction and minification plugins
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const StyleLintPlugin = require("stylelint-webpack-plugin");
const paths = {
  DIST: path.resolve(__dirname, "public/dist/"),
  SRC: path.resolve(__dirname, "public/src/"),
  ADMINDIST: path.resolve(__dirname, "admin/dist/"),
  ADMINSRC: path.resolve(__dirname, "admin/src/"),
};

module.exports = {
  entry: {
    public: [path.join(paths.SRC, "index.js")],
    admin: [path.join(paths.ADMINSRC, "index.js")],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    // sourceMapFilename: "[name].map",
    chunkFilename: "[id].js",
  },
  // Adding jQuery as external library
  externals: {
    jquery: "jQuery",
  },
  devtool: "source-map",
  performance: { hints: false },
  module: {
    rules: [
      // perform js babelization on all .js files
      {
        enforce: "pre",
        exclude: /node_modules/,
        test: /\.js$/,
        loader: "eslint-loader",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "../dist/images/[name].[ext]",
            },
          },
        ],
      },
      // compile all .scss files to plain old css
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "fonts/[name].[ext]",
              outputPath: "",
            },
          },
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: { sourceMap: true } },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              sourceMap: true,
              plugins: [
                require("autoprefixer")({
                  browserlist: ["> 1%", "last 2 versions"],
                }),
              ],
            },
          },
          { loader: "sass-loader", options: { sourceMap: true } },
        ],
      },
    ],
  },
  plugins: [
    new StyleLintPlugin(),
    // extract css into dedicated file
    new MiniCssExtractPlugin({
      path: path.resolve(__dirname, "dist"),
      filename: "[name].css",
      // sourceMapFilename: "[name].map",
      chunkFilename: "[id].css",
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),
  ],
  optimization: {
    minimizer: [
      // enable the js minification plugin
      new UglifyJSPlugin({
        test: /\.js(\?.*)?$/i,
        cache: true,
        parallel: true,
      }),
      // enable the css minification plugin
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
};
