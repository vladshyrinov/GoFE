var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task("default", function () {
  return gulp.src("js/*.js")
    .pipe(babel())
    .pipe(gulp.dest("babel_js"));
});



