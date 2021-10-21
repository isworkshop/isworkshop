const gulp = require('gulp')
const plumber = require('gulp-plumber')
const postcss = require('gulp-postcss')
const sourcemaps = require('gulp-sourcemaps')
const autoprefixer = require('autoprefixer')
const sass = require('gulp-sass')(require('sass'))
const imagemin = require('gulp-imagemin')
const browserSync = require('browser-sync').create()
const gutil = require('gulp-util')
const ftp = require('vinyl-ftp')
const del = require('del')

// compile scss into css
function style() {
  return gulp
    .src('./app/scss/**/*.scss')
    .pipe(
      plumber({
        errorHandler(err) {
          console.log(err)
          this.emit('end')
        },
      }),
    )
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sass({ errLogToConsole: true }))
    .pipe(postcss([autoprefixer()]))
    .pipe(sourcemaps.write('../maps'))
    .pipe(gulp.dest('./app/css'))
    .pipe(browserSync.stream())
}

// Image optimize
function imgmin() {
  return gulp.src('./raw/*').pipe(imagemin()).pipe(gulp.dest('./app/img'))
}

// Listen to actions in VSCode
function watch() {
  browserSync.init({
    server: {
      baseDir: './app/',
    },
  })
  gulp.watch('./raw/*', imgmin)
  gulp.watch('./app/scss/**/*.scss', style)
  gulp.watch('./app/*.html').on('change', browserSync.reload)
  gulp.watch('./app/js/**/*.js').on('change', browserSync.reload)
}

function clean() {
  return del(['./dist/**'])
}

function publish() {
  clean()
  return gulp
    .src([
      './app/**',
      '!./dist/**',
      '!./app/maps/**',
      '!./app/scss/**',
      '!./raw/**',
      '!./node_modules/**',
      '!./.git/**',
      '!./gulpfile.js',
      '!./gitignore',
      '!./package-lock.json',
      '!./package.json',
      '!./README.md',
      '!./LICENCE',
    ])
    .pipe(gulp.dest('./dist'))
}

function deploy() {
  var conn = ftp.create({
    host: 'ftp.iswdesign.com',
    user: 'isw@iswdesign.com',
    password: '373DvnL$swWW',
    parallel: 10,
    log: gutil.log,
  })

  var globs = ['dist/**/*']

  return gulp
    .src(globs, { base: './dist', buffer: false })
    .pipe(conn.newer('/isworkshop.net')) // only upload newer files
    .pipe(conn.dest('/isworkshop.net'))
}

exports.imgmin = imgmin
exports.style = style
exports.watch = watch
exports.publish = publish
exports.deploy = deploy
