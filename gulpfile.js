let gulp  = require('gulp');
let nodemon    = require('gulp-nodemon');
let concat    = require('gulp-concat');
let runSequence = require('run-sequence');
let del = require('del');

let paths = {
  sources : [
    '*.js',
    'app/**/*.js'
    ]
};

gulp.task('clean', (cb) => {
  del(['./dist/*']).then(function (paths) {
    console.log("[clean]", paths);
    cb();
  });
});

gulp.task('nodemon', function () {
  return nodemon({
    script: './index.js',
    ext: 'js json',
    legacyWatch: true
  });
});

gulp.task('html', function(){
  return gulp.src('./public/**/*.html')
    .pipe(gulp.dest('dist/'));
});

gulp.task('js', function(){
  return gulp.src('./public/**/*.js')
    .pipe(concat('app.min.js'))
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('vendor-js', function(){
  return gulp.src(['./node_modules/matter-js/build/matter.min.js'])
    .pipe(concat('vendor.min.js'))
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('public', function(done) {
  runSequence('clean', ['html', 'js', 'vendor-js'], done);
});



gulp.task('build', function(done) {
  runSequence('public', done);
});

gulp.task('default', function(done){
  runSequence(['nodemon', 'public'], done);
});
