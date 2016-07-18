var path = require("path");
var webpack = require('webpack');

module.exports = {
  entry: {
    'react-ui': './src/components/index.js'
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    pathinfo: true,
    filename: "[name].js"
  },
  resolve: {
    root: [ path.join(__dirname, 'src') ]
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        include: [
          path.join(__dirname, 'src')
        ]
      }
    ]
  },
  devtool: 'eval'
};
