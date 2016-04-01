var gulp = require('gulp');
var browserify = require('gulp-browserify');

gulp.task('default', ['html', 'js']);

gulp.task('html', function () {
    return gulp.src('./*.html')
        .pipe(gulp.dest('./public/'));
});

gulp.task('js', function () {
    return gulp.src('./js/app.js')
        .pipe(browserify())
        .pipe(gulp.dest('./public/js'));
});