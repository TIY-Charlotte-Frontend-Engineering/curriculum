/**
 * Gulp is a very popular build tool for Javascript.
 * 
 * A 'build tool' is a program that converts your code into something that's
 * ready to put on the internet. Oftentimes you'll want to write your code
 * in one way (convenient for developers) and put it online in another way
 * (convenient for users), and converting manually would be hard.
 * 
 * Examples:
 *  - Comments are helpful for developers, but useless to users.
 *  - Descriptive variable names are helpful for developers, but unnecessary for users.
 *  - Multiple files help keep developers organized, but make things slower for users.
 */

// Gulp requires code from npm. We'll need to install this every project
// (just like foundation sites).
let gulp = require('gulp');
let html_comments = require('gulp-remove-html-comments');
let html_validate = require('gulp-htmlhint');

let sass = require('gulp-sass');

// if you make an array the second parameter, its going
// to run all of those tasks instead.
gulp.task('default', ['html', 'css', 'js']);

// The big idea with gulp is that we're setting up different tasks that'll do
// things we don't want to do manually.
gulp.task('neat-stuff-123', function () {
    console.log('ahoy!');
});

/**
 * A 'normal' task will usually read in some files, do things to them,
 * and then output the modified version somewhere.
 */
gulp.task('html', function () {
    gulp.src('demo.html')
        .pipe(html_comments())
        .pipe(html_validate())
        .pipe(html_validate.reporter())
        .pipe(gulp.dest('public'));
});

/**
 * To write a gulpfile:
 * 
 * 1. figure out what tasks you need
 * 2. start with an extremely basic version of each
 * 3. add plugins one by one
 */
gulp.task('css', function () {
    gulp.src('style.scss')
        .pipe(sass())
        .pipe(gulp.dest('public'));
});

gulp.task('js', function () {
    gulp.src('app.js')
        .pipe(gulp.dest('public'));
});

// watching
// very very useful; one downside is that it crashes more
// than sass does.

gulp.task('watch', function () {
    // gulp.watch(filenames, task)
    gulp.watch('demo.html', ['html']);
    gulp.watch('*.scss', ['css']);
});