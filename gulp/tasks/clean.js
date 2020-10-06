module.exports = function () {
    $.gulp.task('clean', function () {
        return $.del([
            //'public_html',
            'public_html/css/**/*',
            '!public_html/css/import.css',
            '!public_html/css/import',
            'public_html/js/**/*',
            'public_html/img/**/*',
            '!public_html/img/fav',
            'dist/**/*',
            '!dist/css/import.css',
            '!dist/css/import'
        ])
    })
};