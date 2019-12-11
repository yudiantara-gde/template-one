'use strict';

const gulp         = require("gulp");
const browserSync  = require("browser-sync").create();
const pug          = require("gulp-pug");
const sass         = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const uglify       = require("gulp-uglify"); 
const csso         = require("gulp-csso");
const postcss      = require("gulp-postcss");
const rename       = require("gulp-rename");

//BrowserSync Reload
function reload() {
    browserSync.reload();
}

//CSS
function css() {
    
    var plugins = [
        autoprefixer,
        csso
    ];

    return gulp 
        .src("src/source/scss/**/*.scss")
        .pipe(sass())
        .pipe(postcss(plugins))
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.reload({stream: true}));
}

//PUG Compiler
function html() {
    return gulp
        .src("src/source/pug/*.pug")
        .pipe(pug({pretty: true}))
        .pipe(gulp.dest("src"))
        .pipe(browserSync.reload({stream: true}));
}

//JS
function js() {
    return gulp 
        .src("src/source/js/*.js")
        .pipe(uglify())
        .pipe(rename({ suffix: ".min" }))
        .pipe(gulp.dest("src/js"))
        .pipe(browserSync.reload({stream: true}));
}

//Watch
function watch() {

    browserSync.init({
        //for running in multiple port
        port: 3000,
        server: {
            baseDir: "src/"
        }
    });

    gulp.watch("src/source/scss/**/*.scss", css);
    gulp.watch("src/source/js/*.js", js);
    gulp.watch("src/source/pug/", html);
    gulp.watch("src/*.html", reload);
}

// export tasks
exports.css         = css;
exports.watch       = watch;
exports.html        = html;
exports.js          = js;

// define complex tasks
const build = gulp.parallel(css, html, watch, js);

// running task
gulp.task('build', build);
gulp.task('default', build);