var dest = './app';
var src = './app';

module.exports = {
	browser: {
		baseDir: './app',
		port: 4000
	},

	clean: {
		path: dest
	},

	markup: {
		src: src + '/**/*',
		dest: dest
	}
};
