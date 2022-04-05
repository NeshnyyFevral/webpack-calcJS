const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	entry: './src/index.js',
	module: {
		rules: [
      { test: /\.css$/i, use: [MiniCssExtractPlugin.loader, "css-loader"],},
			{ test: /\.(js)$/, use: 'babel-loader' },
			{ test: /\.html$/i, loader: "html-loader", },
    ],
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [
    new HtmlWebpackPlugin({
            template:'./src/index.html',
            filename:'index.html',
            chunks:['main']
        }),
		new MiniCssExtractPlugin({
			filename: "style.css"
		}),
  ],
	 mode: process.env.NODE_ENV === 'production' ? 'production' : 'development'
}