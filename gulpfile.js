
var gulp = require('gulp');

/*
    jshint
*/

// getting jshint options
var packageJSON  = require('./package.json');
var jshintConfig = packageJSON.jshintConfig;
jshintConfig.lookup = false;

// getting jshint and reporter
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');

// creating a task
gulp.task('lint', function() {
    return gulp.src(['src/**/*.js', '!src/lib/**/*.*'])
        .pipe(jshint(jshintConfig))
        .pipe(jshint.reporter(stylish));
});

/*
    server
*/

var serve = require('gulp-serve');
gulp.task('serve', serve('src'));
