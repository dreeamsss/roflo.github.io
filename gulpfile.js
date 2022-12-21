const {src, dest, parallel, series, watch} = require('gulp');
const sass = require('gulp-sass')(require("sass"));
const notify = require('gulp-notify');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();
const fileinclude = require('gulp-file-include');
const svgSprite = require('gulp-svg-sprite');
const del = require('del');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const uglify = require('gulp-uglify-es').default;
const concat = require('gulp-concat');
const gulpif = require('gulp-if');
const babel = require('gulp-babel');


const fonts = () => {
	return src("./src/fonts/**")
		.pipe(dest('./app/fonts'));
};

const svgSprites = () => {
	return src('./src/img/svg/**.svg')
		.pipe(svgSprite({
			mode: {
				stack: {
					sprite: "../sprite.svg"
				}
			}
		}))
		.pipe(dest('./app/img'));
};

const styles = (done) => {
	return src('./src/scss/main.scss')
		.pipe(sourcemaps.init())
		.pipe(sass({
			outputStyle: 'expanded'
		}).on('error', notify.onError()))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(autoprefixer({
			cascade: false,
		}))
		.pipe(cleanCSS({
			level: 2
		}))
		.pipe(sourcemaps.write('.'))
		.pipe(dest('./app/css/'))
		.pipe(browserSync.stream());
};

const htmlInclude = () => {
	return src(['./src/index.html'])
		.pipe(fileinclude({
			prefix: '@',
			basepath: '@file'
		}))
		.pipe(dest('./app'))
		.pipe(browserSync.stream());
};

const imgToApp = () => {
	return src(['./src/img/**/*.jpg', './src/img/**/*.png', './src/img/**/*.jpeg', './src/img/**/*.svg'])
		.pipe(dest('./app/img'));
};

const resources = () => {
	return src('./src/resources/**')
		.pipe(dest('./app/resources'));
};

const clean = () => {
	return del(['app/*']);
};

const  scripts = async() => {
	src('./src/js/vendor/**.js')
		.pipe(uglify())
		.pipe(concat('vendor.js'))
		.on("error", notify.onError())
		.pipe(dest('./app/js/'));
  	return src(
    ['./src/js/functions/**.js', './src/js/components/**.js', './src/js/main.js'])
	.pipe(uglify())	
    .pipe(sourcemaps.init())
	.pipe(babel({
			presets: ['@babel/env']
		}))
    .pipe(concat('main.js'))
    .on("error", notify.onError())
    .pipe(sourcemaps.write('.'))
    .pipe(dest('./app/js'))
    .pipe(browserSync.stream());
};

const watchFiles = () => {
	browserSync.init({
		server: {
			baseDir: "./app"
		}
	});

	watch('./src/scss/**/*.scss', styles);
	watch('./src/index.html', htmlInclude);
	watch('./src/index.html', browserSync.reload);
	watch('./src/partials/*.html', htmlInclude);
	watch('./src/img/**/*.jpg', imgToApp);
	watch('./src/img/**/*.png', imgToApp);
	watch('./src/img/**/*.jpeg', imgToApp);
	watch('./src/img/svg/*.svg', svgSprites);
	watch('./src/resources/**', resources);
	watch('./src/js/**/*.js', scripts);
	watch('./src/fonts/**/*.woff', fonts);
	watch('./src/fonts/**/*.woff2', fonts);
};

exports.styles = styles;
exports.watchFiles = watchFiles;
exports.fileinclude = htmlInclude;

exports.default = series(clean, parallel(htmlInclude, scripts, fonts, resources, imgToApp, svgSprites), styles, watchFiles);


exports.build = series(clean, parallel(htmlInclude, scripts, fonts, resources, imgToApp, svgSprites), styles, watchFiles);

