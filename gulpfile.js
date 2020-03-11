const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');
const del = require('del');

const clean = () => del(['css/*.min.css', 'img/*.min.*']);

async function css() {
    return gulp
        .src('css/!(*.min)*.css')
        .pipe(cleanCSS())
        .pipe(
            rename({
                suffix: '.min'
            })
        )
        .pipe(gulp.dest('css'));
}

async function img() {
    gulp.src('img/!(*.min).*')
        .pipe(imagemin())
        .pipe(
            rename({
                suffix: '.min'
            })
        )
        .pipe(gulp.dest('img'));
}

async function serve() {
    browserSync.init({
        server: './'
    });
}

async function reload() {
    browserSync.reload();
}

async function watch() {
    gulp.watch('css/!(*.min)*.css', gulp.series(clean, css, reload));
    gulp.watch('img/!(*.min).*', gulp.series(clean, img, reload));
    gulp.watch('*.html', reload);
}

exports.default = gulp.series(clean, css, img, serve, watch);
