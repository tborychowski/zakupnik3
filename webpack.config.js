const path = require('path');

module.exports = {
	devtool: 'inline-source-map',
	// mode: 'development',
	entry: { index: './src/index.js' },
	output: {
		filename: '[name].js',
		path: path.join(__dirname, 'assets'),
		publicPath: './assets/',
	},
	resolve: { extensions: ['.js', '.json', '.html'] },
	stats: 'minimal',
	module: {
		rules: [
			{ test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
			{
				test: /\.html$/,
				exclude: /node_modules/,
				use: { loader: 'svelte-loader', options: { css: false } },
			},
		]
	}
};
