var gulp = require( 'gulp' ), // first need to import gulp
	watch = require( 'gulp-watch' ), // then let gulp-watch the specific file changes
	browserSync = require( 'browser-sync' ).create();

// task one: first argument is task name, the second one is what you want to do
// create a watch task, watch index.html file, then implement html task created before
gulp.task( 'watch', function() {
	browserSync.init( {
		notify: false,
		// where the browser lives
		server: {
			baseDir: "app"
		}
	} );

	watch( './app/index.html', function() {
		// auto refresh
		browserSync.reload();
	} );

	watch( './app/assets/styles/**/*.css', function() {
		gulp.start( 'cssInject' );
	} );

	watch('./app/assets/scripts/**/*.js', function() {
		gulp.start('scriptsRefresh');
	});

} );

gulp.task( 'cssInject', ['styles'], function() {
	return gulp
		.src( './app/compile/styles/styles.css' )
		.pipe( browserSync.stream() );
});

gulp.task('scriptsRefresh', ['scripts'], function() {
	browserSync.reload();
});
