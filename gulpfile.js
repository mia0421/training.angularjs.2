const gulp = require('gulp');
const ts = require('gulp-typescript');
const connect = require('gulp-connect');

var path = {
    tsPath: ["src/**/*.ts"],
};

gulp.task('default',['watch','connect']);
gulp.task('connect', function() {
    connect.server();
});

gulp.task('tsc', function () {
    return gulp.src('src/**/*.ts')
        .pipe(ts({
            noImplicitAny: true,
            outFile: 'output.js'
        }))
        .pipe(gulp.dest('built/local'));
});

gulp.task('watch', function () {
    gulp.watch(path.tsPath, ['tsc']);
});




