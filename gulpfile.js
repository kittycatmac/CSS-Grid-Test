‘use strict’;

var gulp = require(‘gulp’);

var sass = require(‘gulp-sass’);

compile gulp.task(‘sass’, function () { gulp.src(‘./app/css/scss/main_style.scss’) .pipe(sass().on(‘error’, sass.logError)) .pipe(gulp.dest(‘app/css’)); });

compile and watch gulp.task(‘sass:watch’, function() { gulp.watch(‘app/css/scss/main_style.scss’, [‘sass’]);});
