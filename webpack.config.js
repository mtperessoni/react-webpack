const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ModuleNotFoundPlugin = require('react-dev-utils/ModuleNotFoundPlugin')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const path = require('path');
const paths = require('config/paths');
const DotenvPlugin = require('webpack-dotenv-plugin');

module.exports = {
  resolve: {
    modules: [paths.srcPath, 'node_modules'],
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.css$/i,
        use: [
          'extract-loader',
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: paths.templatePath,
      filename: paths.filenamePath,
    }),
    new DotenvPlugin({
      sample: './.env',
      path: './.env'
    }),
    new ModuleNotFoundPlugin(path.resolve()),
    new webpack.HotModuleReplacementPlugin(),
    new CaseSensitivePathsPlugin(),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new ManifestPlugin({
      fileName: 'asset-manifest.json',
      publicPath: '/',
    }),
  ],
  output: {
    path: paths.outputPath,
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: paths.contentBasePath,
    inline: true,
    port: 3000,
  }
};