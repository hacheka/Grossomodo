var webpack = require('webpack');

var config = {
  context: __dirname,
  entry: "./src/app.js",
  output: {
      path: __dirname + '/output',
      filename: "bundle.js"
  },
  module: {
      loaders: [
        { test: /\.js$/, loader: 'ng-annotate', exclude: /node_modules/ },
        { test: /\.html$/, loader: "html", exclude: /node_modules/ }
      ]
  },
  devServer: {
    publicPath: '/output/'
  },
  plugins: []
};

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = config;