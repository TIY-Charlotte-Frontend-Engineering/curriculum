/**
 * Purpose of a gulpfile is to describe 'tasks' that
 * convert from 'developer mode' to 'production mode'. Things
 * like converting Sass => CSS, removing comments, merging
 * files, etc.
 */

// Step 1: import gulp
let gulp = require('gulp');
let sass = require('gulp-sass');

// Step 2: create default task 
gulp.task('default', ['html', 'css', 'js']);

// Step 3: create subtasks
gulp.task('html', function () {
    // Copy index.html into the public/ directory.
    return gulp.src('index.html')
        .pipe(gulp.dest('public/'));
});

gulp.task('css', function () {
    // Convert style.scss into style.css.
    // Copy to public/
    return gulp.src('scss/style.scss')
        .pipe(sass()) // requires gulp-sass
        .pipe(gulp.dest('public/'));
});

gulp.task('js', function () {
    // Copy js file into public/
    return gulp.src('app.js')
        .pipe(gulp.dest('public/'));
});