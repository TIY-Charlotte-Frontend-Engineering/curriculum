
// Gulp is a tool for automating repetitive
// tasks like converting sass => css and
// merging JS modules into one big file.

// gulp is broken into tasks, and you run tasks to
// do stuff ('using gulp' means running tasks)

let gulp = require('gulp');
let browser = require('gulp-browser');

gulp.task('combine-js', function () {
    console.log('combining js files!');

    // You almost always start with a source and end
    // with a destination. We use chaining here.
    return gulp.src('./app.js')
            .pipe(browser.browserify()) // incomplete
            .pipe(gulp.dest('./out'));
});