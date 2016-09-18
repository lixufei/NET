var gulp = require('gulp');
var mocha = require('gulp-mocha');
var gutil = require('gulp-util');
var sass = require('gulp-sass');

gulp.task('mocha:unit', function() {
    return gulp.src(['test/test-*.js'], { read: false })
        .pipe(mocha({
            reporter: 'spec',
            globals: {
                should: require('should')
            }
        }));
});

gulp.task('mocha', function () {
   return "this is mocha.."; 
});

gulp.task('watch-mocha', function() {
    gulp.watch(['lib/**', 'test/**'], ['mocha']);
});

gulp.task('sass', function () {
    return gulp.src('resources/public/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('resources/public/assets'));
});

gulp.task('javascript', function () {
    return gulp.src('resources/public/javascript/**/*.js')
        .pipe(gulp.dest('resources/public/assets'));
});

gulp.task('watch', function () {
    gulp.watch('resources/public/sass/**/*.scss', ['sass']);
    gulp.watch('resources/public/javascript/**/*.js', ['javascript']);
});


gulp.task('default', ['javascript', 'sass', 'mocha:unit']);