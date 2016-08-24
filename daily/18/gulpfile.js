'use strict';

let gulp = require('gulp');
let htmlhint = require('gulp-htmlhint');

// Default task is an umbrella for html + js tasks
gulp.task('default', ['html', 'js']);

gulp.task('html', function () {
    return gulp.src('index.html')
        .pipe(htmlhint())
        .pipe(htmlhint.reporter())
        .pipe(gulp.dest('public/'));
});

gulp.task('js', function () {
    return gulp.src('app.js')
        .pipe(gulp.dest('public/'));
});