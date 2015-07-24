var gulp = require('gulp'),
	glob = require('glob'),
	plugins = require('gulp-load-plugins')(),
	opts = {
		env: 'dev',
		paths: {
			cssDistFolder: './assets/css/',
			scssFolder: './assets/scss/',
			scssMainFile: './assets/scss/main.scss',
			jsDistFolder: './assets/js/build/',
			jsFileList: require('./assets/js/build/build.json'),
			indexHtml: './index.html'
		}
	},

	AUTOPREFIXER_BROWSERS = [
		'ie >= 10',
		'ie_mob >= 10',
		'ff >= 30',
		'chrome >= 34',
		'safari >= 7',
		'opera >= 23',
		'ios >= 7',
		'android >= 4.4',
		'bb >= 10'
	];


gulp.task('styles', function () {
	gulp.src(opts.paths.scssMainFile)
		.pipe(plugins.sass())
		.pipe(plugins.uncss({html: glob.sync(opts.paths.indexHtml)}))
		.pipe(plugins.autoprefixer(AUTOPREFIXER_BROWSERS))
		.pipe(plugins.minifyCss({processImport: true}))
		.pipe(gulp.dest(opts.paths.cssDistFolder));
});


gulp.task('scripts', function () {
	gulp.src(opts.paths.jsFileList)
		.pipe(plugins.concat('main.js'))
		.pipe(plugins.uglify())
		.pipe(gulp.dest(opts.paths.jsDistFolder));
});

gulp.task('watch', function() {
  console.log(opts.paths.jsFileList);
  gulp.watch(opts.paths.scssFolder + '**/*.scss', ['styles']);
  gulp.watch(opts.paths.jsFileList, ['scripts']);
});

gulp.task('default', ['watch']);