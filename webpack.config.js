// https://www.codecademy.com/articles/react-setup-iv
var HTMLWebpackPlugin = require('html-webpack-plugin');

var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
	template: __dirname + '/index.html',
	filename: 'index.html',
	inject: 'body'
});

module.exports = {
	entry: __dirname + '/app/script.js',
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	},
	output: {
		filename: 'transformed_script.js',
		path: __dirname + '/build'
	},
	plugins: [HTMLWebpackPluginConfig]
};
