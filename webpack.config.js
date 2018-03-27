const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	devtool: 'inline-source-map',
	mode: 'development',
	entry: { index: './client/index.js' },
	output: {
		filename: '[name].js',
		path: path.join(__dirname, 'assets'),
		publicPath: path.join('..', 'assets/'),
	},
	resolve: { extensions: ['.js', '.json'] },
	stats: 'minimal',
	module: {
		rules: [
			{ test: /\.html$/, use: 'html-loader' },
			// { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
			{ test: /\.css$/, use: 'css-loader', include: /client\/components/ },
			{ test: /\.css$/, use: ['style-loader', 'css-loader'], exclude: /client\/components/ },
		]
	},
	plugins: [
		new CopyWebpackPlugin([
			{
				from: path.resolve(__dirname, 'node_modules/@webcomponents/webcomponentsjs/*.{js,map}'),
				ignore: 'gulpfile.js',
				flatten: true
			},
			// {
			// 	from: path.resolve(__dirname, 'src/*.css'),
			// 	copyUnmodified: true,
			// 	flatten: true
			// },
		])
	]
};
