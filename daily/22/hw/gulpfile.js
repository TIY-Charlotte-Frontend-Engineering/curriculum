var gulp = require('gulp');
var sass = require('gulp-sass');
var browserify = require('gulp-browserify');

gulp.task('default', ['html', 'css', 'js']);

gulp.task('html', function () {
    return gulp.src('./*.html')
        .pipe(gulp.dest('./public/'));
});

gulp.task('css', function () {
    return gulp.src('./scss/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('./public/css'));
});

gulp.task('js', function () {
    return gulp.src('./js/app.js')
        .pipe(browserify())
        .pipe(gulp.dest('./public/js/'));
});