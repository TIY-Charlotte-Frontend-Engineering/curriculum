let gulp = require('gulp');
let rename = require('gulp-rename');
let browserify = require('gulp-browserify');

gulp.task('default', ['html', 'js']);

gulp.task('html', function () {
    // start with a file called index.html
    return gulp.src('index.html')
        .pipe(rename('rascal.html'))
        .pipe(gulp.dest('public/'));
});

gulp.task('js', function () {
    return gulp.src('app.js')
        .pipe(browserify())
        .pipe(rename('rascal.js'))
        .pipe(gulp.dest('public/'));
});

gulp.task('watch', function () {
    // when index.html changes, run html task
    gulp.watch('index.html', ['html']);
    gulp.watch('app.js', ['js']);
})