var gulp = require('gulp'),

  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
  karma = require('gulp-karma');

  paths = {
    scripts: ['src/*.js'],
    dest: 'dist'
  };

gulp.task('scripts', function() {
  return gulp.src(paths.scripts)
    .pipe(gulp.dest(paths.dest));
});

gulp.task('scripts_min', function() {
  return gulp.src(paths.scripts)
    .pipe(uglify())
    .pipe(rename({extname: '.min.js'}))
    .pipe(gulp.dest('dist'));
});

gulp.task('test', function() {
  return gulp.src('please include files from karma.conf')
    .pipe(karma({
      configFile: 'karma.conf.js',
      action: 'run'
    }));
});

gulp.task('default', ['test', 'scripts', 'scripts_min']);
