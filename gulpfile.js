const gulp = require('gulp');

const sass = require('gulp-sass')(require('sass'));

const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');

const babel = require('gulp-babel');
const uglily = require('gulp-uglify');


const paths = {
    styles: {
      src: 'src/sass/**/*.scss',
      dest: 'public/styles/'
    },
    scripts: {
        src: 'src/js/**/*.js',
        dest: 'public/scripts/'
    },
    server: {
        base: './',
    },
};


function buildStyles() {
    return gulp.src(paths.styles.src)
    .pipe(sass({outputStyle : 'compressed'}))
    .pipe(autoprefixer({
        overrideBrowserslist: ['last 2 versions'],
        cascade: false
    }))
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(browserSync.stream());
}
gulp.task('sass', buildStyles);


function buildScripts() {
    return gulp.src(paths.scripts.src)
    .pipe(concat('main.js'))
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(uglily())
    .pipe(gulp.dest(paths.scripts.dest))
    .pipe(browserSync.stream());
}
gulp.task('scripts', buildScripts);


function browser() {
    browserSync.init({
        server: {
            baseDir: paths.server.base,
        }
    })
}
gulp.task('browser-sync', browser);


function watch() {
    gulp.watch(paths.styles.src, buildStyles);
    gulp.watch(paths.scripts.src, buildScripts);

    gulp.watch('*.html').on('change', browserSync.reload);
}
gulp.task('watch', watch);


gulp.task('default', gulp.parallel('watch', 'browser-sync', 'sass', 'scripts'));