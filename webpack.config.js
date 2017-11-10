let webpack = require('webpack')
let path = require('path')

let htmlPlugin = require('html-webpack-plugin')
let ExtractTextPlugin = require('extract-text-webpack-plugin')

let extractHtml = new htmlPlugin({
  title: 'Kent Delante',
  template: path.resolve(__dirname, 'src/pug/index.pug')
})

let extractCss = new ExtractTextPlugin({
  filename: 'css/app.min.css',
  disable: process.env.NODE_ENV === 'development'
})

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, '/'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
	test: /\.scss$/,
	use: ExtractTextPlugin.extract({
	  use: [ 'css-loader', 'sass-loader'],
	  fallback: 'style-loader'
	})
      },
      {
	test: /\.pug$/,
	use: ['html-loader', 'pug-html-loader']
      }
    ]
  },
  devServer: {
    publicPath: '/',
    contentBase: path.resolve(__dirname, '/'),
    hot: false,
    inline: false
  },
  plugins: [
    extractCss,
    extractHtml
  ]
}
