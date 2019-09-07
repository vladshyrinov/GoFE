var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglifyjs = require('gulp-uglify');
var uglifycss = require('gulp-uglifycss');
var rename = require('gulp-rename');
var imagemin = require('gulp-imagemin');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var paths = {
	html:['./index.html'],
	scss:['./src/sass/style.scss'],
	js:['./src/js/**/*.js'],
	img: ['./src/img/**/*.+(jpg|png|svg|jpeg)']
};

gulp.task('html', function() {
	gulp.src(paths.html)
	.pipe(reload({stream:true}));
});

gulp.task('sass_to_mincss', function() {
	gulp.src(paths.scss)
	.pipe(sass().on('error', sass.logError))
	.pipe(uglifycss({
		"maxLineLen": 80,
		"uglyComments": true
	}))
	.pipe(gulp.dest('./dist/css'))
	.pipe(reload({stream:true}));
});

gulp.task('scripts', function() {
	return gulp.src(paths.js)
	.pipe(concat('main.js'))
	.pipe(uglifyjs())
	.pipe(gulp.dest('./dist/js/'))
	.pipe(reload({stream:true}));
});

gulp.task('imagemin', function() {
	gulp.src(paths.img)
	.pipe(imagemin())
	.pipe(gulp.dest('./dist/img/'));
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
	gulp.start('imagemin','sass_to_mincss','html','scripts');
	gulp.watch(paths.scss,['sass_to_mincss']);
	gulp.watch(paths.html, ['html']);
	gulp.watch(paths.js, ['scripts']);
	gulp.watch(paths.img, ['imagemin']);
});

gulp.task('default', ['watcher', 'browserSync']);


