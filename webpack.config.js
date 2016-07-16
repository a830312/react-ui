var path = require("path");
var webpack = require('webpack');

module.exports = {
  entry: {
    'tars-react-ui': './src/components/index.js'
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].js"
  },
  resolve: {
    root: [ path.join(__dirname, 'src') ]
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel?presets[]=react,presets[]=es2015',
        exclude: /node_modules/,
        include: [
          path.join(__dirname, 'src')
        ]
      }
    ]
  }
};
