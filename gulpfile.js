const gulp = require('gulp');
const ts = require('gulp-typescript');

var path = {
    tsPath: ["src/**/*.ts"],
};

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




