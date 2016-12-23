let gulp  = require('gulp');
let nodemon    = require('gulp-nodemon');
let runSequence = require('run-sequence');

let paths = {
  sources : [
    '*.js',
    'app/**/*.js'
    ]
};

gulp.task('develop', function () {
  return nodemon({
    script: './app',
    ext: 'js json',
    legacyWatch: true
  });
});

gulp.task('default', function(done){
  runSequence('develop', done);
});
