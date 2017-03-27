/**
 * Requirement: 
 *  - you must have a file called gulpfile.js
 * 
 * The purpose of a gulpfile is to describe 'tasks' for converting from
 * developer to production view. Read in our files, do x, and output to somewhere else.
 * 
 * Read in all js files  =>  Remove all comments  =>  Output to public/ directory
 */

let gulp = require('gulp'); // 'require' is how we import other js files into this one
                            // mariam can you believe it?????
let removeComments = require('gulp-strip-comments');
let sass = require('gulp-sass');

// Organized into tasks 
// Create a task called 'default' that does whatever this function says
// 'Default' is the task that will run by...default...when you run 'gulp' in terminal
// gulp.task('default', function () {
    // gulp.src() is how you read files 
    // gulp.dest() is how you write files
// });
// Second form of task: an umbrella task (list of subtasks)
gulp.task('default', ['html', 'css', 'js']);

// Four tasks: default, html, css, js
gulp.task('html', function () {
    gulp.src('gulp.html')
        .pipe(removeComments())
        .pipe(gulp.dest('public/')); // copy 'gulp.html' into 'public/' directory
});

gulp.task('css', function () {
    gulp.src('style.scss')
        .pipe(sass())
        .pipe(removeComments())
        .pipe(gulp.dest('public/')); // copy 'gulp.html' into 'public/' directory
});

gulp.task('js', function () {
    gulp.src('app.js')
        .pipe(removeComments())
        .pipe(gulp.dest('public/')); // copy 'gulp.html' into 'public/' directory
});