module.exports = {
    entry: "./src/app.js",
    output: {
        path: __dirname,
        filename: "./output/bundle.js"
    },
    module: {
        loaders: [{
          test: /\.html$/,
          loader: "html"
      }]
    }
};