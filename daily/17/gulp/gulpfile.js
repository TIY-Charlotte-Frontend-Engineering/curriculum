'use strict'
/**
 * 'gulpfile.js' is the name because that's what gulp expects. Stick with it otherwise gulp 
 * is gonna get lost.
 */

// 'require' is how we import modules. we'll go over it later. we need to npm install things 
// before we can require them.
// find what gulp plugins you want with good ol' google
let gulp = require('gulp');
let sass = require('gulp-sass');
let htmlhint = require('gulp-htmlhint');
let commentless = require('gulp-strip-css-comments');

// Create a task that has prerequisites of 'html', 'css', and 'js'
gulp.task('default', ['html', 'css', 'js']);

// Create a task by giving it a name and then a function to run when that task gets executed.
gulp.task('html', function () {
    return gulp.src('index.html')
        .pipe(htmlhint())
        .pipe(htmlhint.reporter())
        .pipe(gulp.dest('public/'));
});

gulp.task('css', function () {
    return gulp.src('style.scss')
        .pipe(sass())
        .pipe(commentless())
        .pipe(gulp.dest('public/'));
});

gulp.task('js', function () {
    return gulp.src('app.js')
        .pipe(gulp.dest('public/'));
});

// Create a new task, arbitarily called 'watch', that will watch certain files 
// for changes.
gulp.task('watch', function () {
    // gulp.watch(what files to watch, what task to run when they change)
    gulp.watch('index.html', ['html']);
    gulp.watch('scss/*.scss', ['css']);
    gulp.watch('app.js', ['js']);
});