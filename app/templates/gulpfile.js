var gulp = require('gulp-help')(require('gulp')),
  jshint = require('gulp-jshint'),
  gutil = require('gulp-util'),
  inject = require('gulp-inject'),
  shell = require('gulp-shell'),
  sass = require('gulp-sass'),
  del = require('del'),
  path = require('path'),
  fs = require('fs-extra'),
  wiredep = require('wiredep').stream,
  webpack = require('webpack'),
  webpackConfig = require('./webpack.config'),
  pkg = require('./package.json'),
  runSequence = require('run-sequence');

// Files that will be run against JSHint
var allSrcFiles = [
    'app/**/*.js',
    'jsx/**/*.jsx',
    'root/**/*.js'
  ],
  // The CSS files what will be injected into the index
  cssFiles = 'css/**/*.css',
  // Files that will be bundled with webpack
  jsFiles = 'app/**/*.js',
  // Files that will be built into CSS
  scssFiles = './sass/**/*.scss',
  // Files that will be compiled into the ZXP
  buildFiles = [
    'bundle/bundle.js',
    'CSXS/manifest.xml',
    'ext/**/*',
    'jsx/**/*',
    'root/**/*',
    'bower_components/**/*'
  ],
  // The selfSigned certificate used to compile the extension
  certPath = path.join('./bin', '<%= appName %>Cert.p12'),
  // The path and name of the compiled ZXP file
  zxpPath = path.join('./build', '<%= appName %>.zxp'),
  // The path to the zxpSignCmd binary
  binPath = path.join('./bin', 'ZXPSignCmd');

gulp.task('hint', 'Run JSHint against your project files', function () {
  return gulp.src(allSrcFiles)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('wire', 'Wire dependencies to index.html', function () {
  var libs = gulp.src('ext/**/*.js', {read: false});
  var frontEnd = gulp.src(['bundle/bundle.js', cssFiles], {read: false});
  var backEnd = gulp.src(['root/**/*.js'], {read: false});

  return gulp.src('./root/index.html')
    .pipe(inject(libs, {name: 'ext', relative: true}))
    .pipe(inject(frontEnd, {relative: true}))
    .pipe(inject(backEnd, {name: 'node', relative: true}))
    .pipe(wiredep({exclude:'jquery'}))
    .pipe(gulp.dest('./root'));
});

gulp.task('sass', 'Build sass files', function () {
  return gulp.src(scssFiles)
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('webpack', 'Compile your webpack bundle', function (callback) {
  webpack(webpackConfig, function(err, stats) {
          if(err) throw new gutil.PluginError("webpack", err);
          gutil.log("[webpack]", stats.toString({

          }));
          callback();
      });
});

gulp.task('watch', 'Build based on file changes', function () {
  gulp.watch(jsFiles, ['webpack']);
  gulp.watch(scssFiles, ['sass']);
  var dependencyFiles = ['bower.json', 'package.json', 'root/**/*.js'];
  dependencyFiles.forEach(function(files) {
      gulp.watch(files, ['wire']);
  });
});

gulp.task('cert', 'Create a signing cert for your extension', shell.task([
    InsertSpaces(binPath,
      '-selfSignedCert',
      '<%= country %>',
      '<%= province %>',
      '<%= companyName %>',
      '<%= appName %>',
      '01189998819991197253',
      path.join('./bin', '<%= appName %>Cert.p12'))
]));

gulp.task('build', 'Compile the bundled ZXP', function (cb) {
  runSequence('build:clean', 'sass', 'webpack', 'wire', 'build:dist', 'build:pkgDeps', 'build:compile', cb);
});

gulp.task('build:clean', false, function () {
  del.sync(['build/**/*', '!build', 'dist/**/*', '!dist']);
});

gulp.task('build:dist', false, function () {
  return gulp.src(buildFiles, {base: './'})
    .pipe(gulp.dest('dist'));
});

gulp.task('build:pkgDeps', false, function () {
  for(var dep in pkg.dependencies) {
    fs.copy(path.join('./node_modules/', dep), path.join('./dist', 'node_modules', dep), function (err) {
        if(err) {
          throw new gutil.PluginError('pkgDeps', err);
        }
    });
  }
});

gulp.task('build:compile', false, shell.task([
  InsertSpaces(binPath,
    '-sign',
    './dist',
    zxpPath,
    certPath,
    '01189998819991197253')
]));

function InsertSpaces () {
  var builtString = '';
  var args = Array.prototype.slice.call(arguments);
  args.forEach(function(val) {
      builtString = builtString + val + ' ';
  });
  return builtString;
};
