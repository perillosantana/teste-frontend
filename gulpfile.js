const gulp  = require('gulp');
const $     = require('gulp-load-plugins')()

const path = {
    sass: './src/sass',
    css: './dist',
    foundation: 'node_modules/foundation-sites/scss'
}

const sassLocation = path.sass + '/main.scss'
const allSassFiles = path.sass + '/**/*.scss'

gulp.task('style', () => {
    gulp.src(sassLocation)
    .pipe($.sass({
        includePaths: path.foundation,
        outputStyle: 'compressed'
    }))
    .pipe($.autoprefixer({
        browsers: ['last 2 versions', 'ie >= 9', 'android >= 4.4', 'ios >= 7']
    }))
    .pipe(gulp.dest(path.css))
})

gulp.task('watch', () => {
    gulp.watch(allSassFiles, ['style'])
})