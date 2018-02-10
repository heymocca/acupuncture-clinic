var gulp = require('gulp'),
webpack = require('webpack');   // for running gulp locally, you need install webpack in dev

gulp.task('scripts', function(callback) {
    webpack(require('../../webpack.config.js'), function(err, stats) {
        if(err) {
            console.log(err.toString());
        }

        console.log(stats.toString());
        callback();
    });
});
