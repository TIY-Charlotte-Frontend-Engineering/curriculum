/**
 * The point of gulp watch is to set up gulp tasks to run whenever
 * specific files change.
 * 
 * For example, when my HTML files change, run 'html' task.
 *              when my SCSS files change, run 'css' task.
 *              when my JS files change, run 'js' task.
 */

let gulp = require('gulp');
let sass = require('gulp-sass');
let browser = require('gulp-browser');

gulp.task('default', ['html', 'css', 'js']);

gulp.task('html', function () {
    return gulp.src('index.html')
        .pipe(gulp.dest('public/'));
});

gulp.task('css', function () {
    return gulp.src('scss/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('public/'));
});

gulp.task('js', function () {
    return gulp.src('js/app.js')
        .pipe(browser.browserify())
        .pipe(gulp.dest('public/'));
});

/**
 * Gotcha's:
 *  - Only checks the files you specify. Make sure directories are correct!
 *  - Only checks files that EXIST WHEN YOU START GULP WATCHING
 *  - It gets feisty with syntax / sass errors and will crash more than it should.
 */
gulp.task('watch', ['default'], function () {
    // gulp.watch('files-to-watch', 'tasks-to-run')
    gulp.watch('*.html', ['html']);
    gulp.watch('scss/*.scss', ['css']);
    gulp.watch('js/*.js', ['js']);
});