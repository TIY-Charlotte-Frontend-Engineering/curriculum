# gulp-browser
browserify and other goodies for gulp

## Availabililty
[![npm](https://push.rocks/assets/repo-button-npm.svg)](https://www.npmjs.com/package/gulp-browser)
[![git](https://push.rocks/assets/repo-button-git.svg)](https://GitLab.com/pushrocks/gulp-browser)
[![git](https://push.rocks/assets/repo-button-mirror.svg)](https://github.com/pushrocks/gulp-browser)
[![docs](https://push.rocks/assets/repo-button-docs.svg)](https://pushrocks.gitlab.io/gulp-browser/)

## Status for master
[![build status](https://GitLab.com/pushrocks/gulp-browser/badges/master/build.svg)](https://GitLab.com/pushrocks/gulp-browser/commits/master)
[![coverage report](https://GitLab.com/pushrocks/gulp-browser/badges/master/coverage.svg)](https://GitLab.com/pushrocks/gulp-browser/commits/master)
[![npm downloads per month](https://img.shields.io/npm/dm/gulp-browser.svg)](https://www.npmjs.com/package/gulp-browser)
[![Dependency Status](https://david-dm.org/pushrocks/gulp-browser.svg)](https://david-dm.org/pushrocks/gulp-browser)
[![bitHound Dependencies](https://www.bithound.io/github/pushrocks/gulp-browser/badges/dependencies.svg)](https://www.bithound.io/github/pushrocks/gulp-browser/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/pushrocks/gulp-browser/badges/code.svg)](https://www.bithound.io/github/pushrocks/gulp-browser)
[![TypeScript](https://img.shields.io/badge/TypeScript-2.x-blue.svg)](https://nodejs.org/dist/latest-v6.x/docs/api/)
[![node](https://img.shields.io/badge/node->=%206.x.x-blue.svg)](https://nodejs.org/dist/latest-v6.x/docs/api/)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

## Usage
Use TypeScript for best in class instellisense.

#### Browserify:
```javascript
    let gulp = require("gulp");
    let gulpBrowser = require("gulp-browser");
    
    let transforms = [
        {
            transform: "babelify",
            options: {presets: ["es2015"]}
        }
    ];
    
    gulp.task('gulpBrowserTest',function() {
        var stream = gulp.src('./test/*.js')
            .pipe(gulpBrowser.browserify(transforms)) // gulp.browserify() accepts an optional array of tansforms
            .pipe(gulp.dest("./test/browserifiedJS/"));
        return stream;
    });
```

> **Note:** Be aware of how gulp.src creates values of file.base and file.path since that is important to the require statements.

### Contributors
* [Phil Kunz](https://github.com/philkunz)
* [Steffan Donal](https://github.com/SteffanDonal)

[![npm](https://push.rocks/assets/repo-header.svg)](https://push.rocks)
