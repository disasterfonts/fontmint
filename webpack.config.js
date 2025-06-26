var path = require('path');

module.exports = {
	watch: true,
	entry: "./src/index.js",
	output: {
		path: path.join(__dirname, "dist/assets"),
		filename: "bundle.js",
		sourceMapFilename: 'bundle.map'
	},
	devtool: 'source-map',
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env', '@babel/react']
				}
			},
			{
				test: /\.less$/,
				use: ['style-loader','css-loader', 'postcss-loader', {
					loader: 'less-loader',
					options: {
						postcssOptions: {
							plugins: () => [require('autoprefixer')]
						}
					}
				}]
			}
		]
	}
}