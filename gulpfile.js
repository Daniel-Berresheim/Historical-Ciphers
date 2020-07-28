
var gulp = require('gulp');

var build = require('gulp-file-include');
 
gulp.task('build', function(done) {
  gulp.src(['*.html'])
    .pipe(build({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('Build'));
	gulp.src(['*.css']).pipe(gulp.dest('build'));
	gulp.src(['*.js']).pipe(gulp.dest('build'));
	done();
});