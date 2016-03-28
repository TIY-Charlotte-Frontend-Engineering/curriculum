var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var browserify = require('gulp-browserify');

gulp.task('default', ['html', 'js', 'css']);

gulp.task('html', function () {
    return gulp.src('html/*.html')
        .pipe(gulp.dest('public/'));
});

gulp.task('js', function () {
    return gulp.src('js/app.js')
        .pipe(browserify())
        .pipe(gulp.dest('public/js'));
});

gulp.task('css', function () {
    return gulp.src('scss/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('public/css'));
})