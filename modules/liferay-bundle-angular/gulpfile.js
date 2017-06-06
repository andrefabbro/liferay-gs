/* globals require */

'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');

var css = [];

var libJS = [];
//libJS.push('node_modules/todomvc-common/base.js');
libJS.push('node_modules/angular/angular.min.js');
libJS.push('node_modules/angular-route/angular-route.min.js');
libJS.push('node_modules/angular-resource/angular-resource.min.js');

// Settings tasks
gulp.task('libs', function() {
	return gulp.src(libJS).pipe(concat('libs.js')).pipe(gulp.dest('src/main/resources/META-INF/resources/vendor'));
});

gulp.task('default', ['libs']);