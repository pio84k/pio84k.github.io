var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass())
        .on('error', function (err) {
            console.log(err.toString());
            this.emit('end');

        })
        .pipe(gulp.dest('app/css'));

});
gulp.task('watch', function () {
    gulp.watch('app/scss/**/*.scss', ['sass']);

});
