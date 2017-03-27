"use strict";
const plugins = require("./gulpbrowser.plugins");
let browserify = function (transforms = []) {
    if (!Array.isArray(transforms)) {
        transforms = [transforms];
    }
    let forEach = function (file, enc, cb) {
        let bundleCallback = function (err, bufferedContent) {
            if (Buffer.isBuffer(bufferedContent)) {
                file.contents = bufferedContent;
            }
            else {
                console.log('gulp-browser: .browserify() ' + err.message);
                cb(new Error(err.message), file);
                return;
            }
            cb(null, file);
        };
        if (file.contents.length > 0) {
            let browserified = plugins.browserify(file, { basedir: file.base });
            transforms.forEach(function (transform) {
                if (typeof transform === 'function') {
                    browserified.transform(transform);
                }
                else {
                    browserified.transform(transform.transform, transform.options);
                }
            });
            browserified.bundle(bundleCallback);
        }
        else {
            console.warn('gulp-browser: .browserify() file.contents appears to be empty');
            cb(null, file);
        }
        ;
    };
    let atEnd = function (cb) {
        cb();
    }; // no need to clean up after ourselves
    return plugins.through2.obj(forEach, atEnd); // this is the through object that gets returned by gulpBrowser.browserify();
};
module.exports = browserify;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VscGJyb3dzZXIuYnJvd3NlcmlmeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL2d1bHBicm93c2VyLmJyb3dzZXJpZnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGlEQUFpRDtBQUdqRCxJQUFJLFVBQVUsR0FBRyxVQUFVLFVBQVUsR0FBRyxFQUFFO0lBRXRDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0IsVUFBVSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUE7SUFDN0IsQ0FBQztJQUVELElBQUksT0FBTyxHQUFHLFVBQVUsSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFFO1FBRWpDLElBQUksY0FBYyxHQUFHLFVBQVUsR0FBRyxFQUFFLGVBQWU7WUFDL0MsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsZUFBZSxDQUFBO1lBQ25DLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDSixPQUFPLENBQUMsR0FBRyxDQUFDLDhCQUE4QixHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtnQkFDekQsRUFBRSxDQUFDLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQTtnQkFDaEMsTUFBTSxDQUFBO1lBQ1YsQ0FBQztZQUNELEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDbEIsQ0FBQyxDQUFBO1FBRUQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzQixJQUFJLFlBQVksR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQTtZQUVuRSxVQUFVLENBQUMsT0FBTyxDQUFDLFVBQVUsU0FBUztnQkFDbEMsRUFBRSxDQUFDLENBQUMsT0FBTyxTQUFTLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQztvQkFDbEMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQTtnQkFDckMsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDSixZQUFZLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFBO2dCQUNsRSxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUE7WUFFRixZQUFZLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFBO1FBQ3ZDLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLE9BQU8sQ0FBQyxJQUFJLENBQUMsK0RBQStELENBQUMsQ0FBQTtZQUM3RSxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQ2xCLENBQUM7UUFBQSxDQUFDO0lBQ04sQ0FBQyxDQUFBO0lBRUQsSUFBSSxLQUFLLEdBQUcsVUFBVSxFQUFFO1FBQ3BCLEVBQUUsRUFBRSxDQUFBO0lBQ1IsQ0FBQyxDQUFBLENBQUMsc0NBQXNDO0lBRXhDLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUEsQ0FBQyw2RUFBNkU7QUFDN0gsQ0FBQyxDQUFBO0FBRUQsaUJBQVMsVUFBVSxDQUFBIn0=