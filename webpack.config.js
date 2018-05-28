const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'production',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'build.js',
    library: 'stellarkit-js',
    libraryTarget: 'umd'
  },
  externals: [
    "stellar-sdk",
    "axios"
  ],
  module: {
    rules: [{
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "eslint-loader",
          options: {
            fix: true
          }
        }
      },
      {
        test: /\.js$/,
        use: [{
          loader: 'babel-loader'
        }],
        exclude: /node_modules/
      }
    ]
  }
}