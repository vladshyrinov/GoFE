var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var paths = {
	html:['./index.html'],
	js:['./js/**/*.js'],
};

gulp.task('html', function() {
	gulp.src(paths.html)
	.pipe(reload({stream:true}));
});

gulp.task('scripts', function() {
	return gulp.src(paths.js)
	.pipe(reload({stream:true}));
});

gulp.task('browserSync', function() {
	browserSync({
		server: {
			baseDir: "./"
		},
		port: 8080,
		open: true,
		notify: false
	});
});

gulp.task('watcher', function() {
	gulp.start('html','scripts');
	gulp.watch(paths.html, ['html']);
	gulp.watch(paths.js, ['scripts']);
});

gulp.task('default', ['watcher', 'browserSync']);


