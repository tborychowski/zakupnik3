const path = require('path');

module.exports = {
	// devtool: 'inline-source-map',
	// mode: 'development',
	entry: { index: './client/index.js' },
	output: {
		filename: 'app.js',
		path: path.join(__dirname, 'public'),
		publicPath: './public/',
	},
	resolve: { extensions: ['.js', '.json', '.html'] },
	stats: 'normal',	// minimal
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
