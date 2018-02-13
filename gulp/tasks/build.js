var gulp = require('gulp'),
imagemin = require('gulp-imagemin'),
del = require('del'),
usemin = require('gulp-usemin'),
rev = require('gulp-rev'),
cssnano = require('gulp-cssnano'),
uglify = require('gulp-uglify'),
browserSync = require( 'browser-sync' ).create();

gulp.task('previewDist', function() {
    browserSync.init( {
        notify: false,
		// where the browser lives
		server: {
			baseDir: "dist"
		}
	} );
});

gulp.task('deleteDistFolder', function() {
    return del('./dist');
});

gulp.task('optimizeImages', ['deleteDistFolder'], function(){
    return gulp.src(['./app/assets/images/**/*'])
    .pipe(imagemin({
        progressive: true,
        interlaced: true,
        optimizationLevel: 5,
        multipass: true
    }))
    .pipe(gulp.dest("./dist/assets/images"));
});

// by using 'usemin', you can copy to dist folder, compress file size, and revision
gulp.task('usemin', ['deleteDistFolder', 'styles', 'scripts'], function() {
    return gulp.src("./app/index.html")
    .pipe(usemin({
        //first fun is perform revision, the second on is to compress css
        css: [function() {return rev()}, function() {return cssnano()}],
        js: [function() {return rev()}, function() {return uglify()}]
    }))
    .pipe(gulp.dest("./dist"));
});

gulp.task('build', ['deleteDistFolder','optimizeImages', 'usemin']);
