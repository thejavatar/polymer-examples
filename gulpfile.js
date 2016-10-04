var gulp = require("gulp");
var webserver = require("gulp-webserver");

gulp.task("default", function () {
    gulp.src('.')
        .pipe(webserver({
            /*host: 'pcgsttl80',
            port: 8080,*/
            livereload: true,
            directoryListing: true,
            open: true
        }));
});
