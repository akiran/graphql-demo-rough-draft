var path = require('path')

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "app.js"
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' },
    ]
  }
}
