/**
 * Purpose of a gulpfile is to describe 'tasks' that
 * convert from 'developer mode' to 'production mode'. Things
 * like converting Sass => CSS, removing comments, merging
 * files, etc.
 */

// Step 1: import gulp
let gulp = require('gulp');
let sass = require('gulp-sass');
let browser = require('gulp-browser');

// Step 2: create default task 
gulp.task('default', ['html', 'css', 'js']);

// Step 3: create subtasks
gulp.task('html', function () {
    // Now that I have a templates directory, I also need to copy 
    // those over.
    gulp.src('templates/*.html')
        .pipe(gulp.dest('public/templates'));

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
    return gulp.src('js/app.js')
        .pipe(browser.browserify())
        .pipe(gulp.dest('public/'));
});

gulp.task('watch', ['default'], function () {
    // When a js file in js/ changes, run 'js' task
    gulp.watch('js/*.js', ['js']);
    gulp.watch('js/*/*.js', ['js']);
    gulp.watch('scss/*.scss', ['css']);
    gulp.watch('*.html', ['html']);
    gulp.watch('templates/*.html', ['html']);
});