var gulp = require('gulp');
let sass = require('gulp-sass');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var browserSync = require('browser-sync').create();
var imagemin = require('gulp-imagemin');
var runSequence = require('gulp4-run-sequence');
var del = require('del');

gulp.task('browserSync', () => {
    browserSync.init({
      server: {
        baseDir: 'app'
      },
      notify: true
    })
})

gulp.task('sass', () => {
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

// gulp.task('watch', () => {
//     gulp.watch('app/scss/**/*.scss', (done) => {
//         console.log(done)
//         gulp.series(['sass'])(done);
//     })
// })

gulp.task('watch', gulp.parallel('browserSync', function (done){
    gulp.watch('app/scss/**/*.scss', gulp.series(['sass'])); 
    gulp.watch('app/*.html', browserSync.reload); 
    gulp.watch('app/scss/**/*.scss', browserSync.reload);
    done()
}));


//Not sure it is minifying css or js so check this.
gulp.task('useref', function(){
    return gulp.src('app/*.html')
      .pipe(useref())
      .pipe(gulpIf('*.js', uglify()))
      // Minifies only if it's a CSS file
      .pipe(gulpIf('*.css', cssnano()))
      .pipe(gulp.dest('dist'))
});
//Not working
gulp.task('images', function(){
  return gulp.src('app/images/**/*.+(png|jpg|gif|svg)')
  .pipe(cache(imagemin({
        // Setting interlaced to true
        interlaced: true
    })))
  .pipe(gulp.dest('dist/images'))
});
gulp.task('clean:dist', function() {
    return new Promise((resolve) => {
		del.sync('dist');
		resolve()
	})
  })
gulp.task('build', function(done) {
    runSequence('clean:dist', ['useref'], 
    done())
});