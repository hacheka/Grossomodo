var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

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
        { test: /\.html$/, loader: "html", exclude: /node_modules/ },
        { test: /\.css$/, loader: 'style-loader!css-loader!postcss-loader' },
        { test: /\.png$/, loader: 'url-loader' }
      ]
  },
  devServer: {
    publicPath: '/output/'
  },
  postcss: [ autoprefixer({ browsers: ['last 2 versions'] })],
  plugins: []
};

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = config;