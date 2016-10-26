var path = require('path');

module.exports = {
	entry: {
		app: ['./src/main.js']
	},
	resolve: {
		alias: {
			vue: 'vue/dist/vue.js'
		},
        root: [path.join(__dirname, 'src')]
    },
	output: {
		path: path.resolve(__dirname, "build"),
		publicPath: "/assets/",
		filename: "bundle.js"
	},
	devServer: {
    	contentBase: "./public"
	},
	module: {
		loaders: [
			{ 
				test: /\.vue$/, 
				loader: "vue-loader" 
			},
			{ test: /\.css$/, loader: "style-loader!css-loader" },
			{ test: /\.(woff|woff2)$/,  loader: "url-loader?limit=10000&mimetype=application/font-woff" },
			{ test: /\.ttf$/,    loader: "file-loader" },
			{ test: /\.eot$/,    loader: "file-loader" },
			{ test: /\.svg$/,    loader: "file-loader" }
		]
	}
}; 