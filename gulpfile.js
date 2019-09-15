const gulp = require('gulp');
const Slideshow = require('slideshow');
const rename = require('gulp-rename');

gulp.task('default', function () {
    return gulp.src(['./src/slides/**/*.md', './src/scss/**/*.scss', './src/js/**/*.js'])
        .pipe(Slideshow.stream({
            title: 'Barrierefreiheit im Web — Bildschirmpräsentation vom 16. September 2019',
            author: 'Joschi Kuphal',
            description: 'Grundlagen für Webdesigner, -entwickler & -redakteure',
            language: 'de',
            charset: 'UTF-8',
        }))
        .pipe(rename('index.html'))
        .pipe(gulp.dest('./public'));
});

gulp.task('watch', function () {
    gulp.watch([
        'src/slides/**/*.md',
        'src/scss/**/*.scss',
        'src/js/**/*.js',
    ], gulp.series('default'));
});
