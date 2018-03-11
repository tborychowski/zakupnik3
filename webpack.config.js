const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	devtool: 'inline-source-map',
	mode: 'development',
	entry: { index: './src/index.js' },
	output: {
		path: path.resolve(__dirname, 'assets'),
		filename: '[name].js',
	},
	resolve: {
		extensions: ['.js', '.json']
	},
	module: {
		rules: [
			{
				test: /\.html$/,
				use: { loader: 'html-loader' }
			},
			{
				test: /\.css$/,
				use: [ { loader: 'css-loader' } ]	// translates CSS into CommonJS
			},
			{
				test: /\.js$/,
				use: 'babel-loader',
				exclude: /node_modules/
			}
		]
	},
	plugins: [
		new CopyWebpackPlugin([
			{
				from: path.resolve(__dirname, 'node_modules/@webcomponents/webcomponentsjs/*.{js,map}'),
				ignore: 'gulpfile.js',
				flatten: true
			},
			{
				from: path.resolve(__dirname, 'src/*.css'),
				copyUnmodified: true,
				flatten: true
			},
		])
	]
};
