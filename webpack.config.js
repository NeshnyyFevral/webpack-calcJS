const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
	entry: './src/index.js',
	module: {
		rules: [
			{ test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
			{ test: /\.(js)$/, use: 'babel-loader' }
		],
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [
    new HtmlWebpackPlugin(),
  ],
	 mode: process.env.NODE_ENV === 'production' ? 'production' : 'development'
}