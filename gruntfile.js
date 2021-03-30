module.exports = function (grunt) {

	require("load-grunt-tasks")(grunt);
	require('time-grunt')(grunt);


	grunt.initConfig({
		less: {
			style: {
				files: {
					'css/style.css': 'less/style.less'
				}
			}
		},
		postcss: {
			style: {
				options: {
					processors: [
						require('autoprefixer')()
					]
				},
				src: "css/*.css"

			}
		},
		csso: {
			style: {
				options: {
					report: "gzip"
				},
				files: {
					"css/style.min.css": ["css/style.css"],
					"css/normalize.min.css": ["css/normalize.css"]
				}
			}
		},
		uglify: {
			style: {
				files: {
					"scripts/main-nav.min.js": ["scripts/main-nav.js"],
					"scripts/basket-catalog.min.js": ["scripts/basket-index.js"],
					"scripts/basket-index.min.js": ["scripts/basket-catalog.js"]
				}
			}
		},
		imagemin: {
			images: {
				options: {
					optimizationLevel: 3,
					svgoPlugins: [{
						removeViewBox: false
					}],
					progressive: true
				},
				files: [{
					expand: true,
					src: ["img/**/*.{png,jpg,svg}"]
				}]
			}
		},
		cwebp: {
			images: {
				options: {
					q: 90
				},
				files: [{
					expand: true,
					src: ["img/**/*.{png,jpg}"]
				}]
			}
		},
		browserSync: {
			server: {
				bsFiles: {
					src: ["*.html", "css/*.css"]
				},
				options: {
					server: ".",
					watchTask: true,
					notify: false,
					open: true,
					cors: true,
					ui: false
				}
			}
		},
		watch: {
			style: {
				files: ["less/**/*.less"],
				tasks: ["less"]
				//				files: ["less/**/*.less", "scripts/**/*.js"],
				//				tasks: ["less", "postcss", "csso", "uglify"]
			}
		}
	});

	grunt.registerTask("serve", ["browserSync", "watch"]);

	grunt.registerTask("build", [
		"less",
		"postcss",
		"csso",
		"uglify",
		"imagemin",
		"cwebp"
	]);

	grunt.registerTask("go", [
		"less"
	]);
};
