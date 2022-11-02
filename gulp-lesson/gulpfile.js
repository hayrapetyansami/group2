import gulp from "gulp";
import concat from "gulp-concat";
import autoPrefixer from "gulp-autoprefixer";
import GulpCleanCss from "gulp-clean-css";
import dartSass from "sass";
import gulpSass from "gulp-sass";
import GulpUglify from "gulp-uglify";
import { deleteSync } from "del";
import browserSync from "browser-sync";
import imagemin from "gulp-imagemin";
import gcmq from "gulp-group-css-media-queries";
import sourcemaps from "gulp-sourcemaps";
import babel from "gulp-babel";

// fix sass bug
const sass = gulpSass(dartSass);

// output path
const path = "./build";

// task for scss convert to css
async function preproc () {
	return gulp.src("./src/scss/styles.scss")
		.pipe(sass().on("error", sass.logError))
		.pipe(gcmq())
		.pipe(sourcemaps.init())
		.pipe(concat("styles.css"))
		.pipe(autoPrefixer({
			overrideBrowserslist: ["> 0.0001%"],
			cascade: false
		}))
		.pipe(GulpCleanCss({
			level: 2
		}))
		.pipe(sourcemaps.write("."))
		.pipe(gulp.dest(path+"/css"))
		.pipe(browserSync.stream());
}

// task for other css files to concat in one file
async function otherCSS () {
	return gulp.src("./src/css/**/*.css")
		.pipe(gcmq())
		.pipe(concat("otherCSS.css"))
		.pipe(autoPrefixer({
			overridebrowserslist: ["> 0.0001%"],
			cascade: false
		}))
		.pipe(GulpCleanCss({
			level: 2
		}))
		.pipe(gulp.dest(path+"/css"))
		.pipe(browserSync.stream());
}

// task for all javascript files with babel
async function scripts () {
	return gulp.src("./src/js/**/*.js")
		.pipe(sourcemaps.init())
		.pipe(concat("all.js"))
		.pipe(babel({
			presets: ["@babel/preset-env"]
		}))
		.pipe(GulpUglify({
			toplevel: true,
			warnings: false
		}))
		.pipe(sourcemaps.write("."))
		.pipe(gulp.dest(path+"/js"))
		.pipe(browserSync.stream());
}

// task for pictures
async function pictures () {
	return gulp.src("./src/img/**/*")
		.pipe(imagemin())
		.pipe(gulp.dest(path+"/img"));
}

// task for remove build folder
async function toClear () {
	return deleteSync([path]);
}

// task for fonts folder to build folder
async function fonts () {
	return gulp.src("./src/fonts/**")
		.pipe(gulp.dest(path+"/fonts"));
}

// task for libs folder to build folder
async function libs () {
	return gulp.src("./src/libs/**")
		.pipe(gulp.dest(path+"/libs"))
		.pipe(browserSync.stream());
}

// task for all html files
async function htmls () {
	return gulp.src("./src/*.html")
		.pipe(gulp.dest(path))
		.pipe(browserSync.stream());
}

// task for gulp watching
async function watch () {
	browserSync.init({
		server: path,
		tunnel: false,
		port: 3000 // default: 3000
	});

	gulp.watch("./src/scss/styles.scss", preproc);
	gulp.watch("./src/css/**/*.css", otherCSS);
	gulp.watch("./src/js/**/*.js", scripts);
	gulp.watch("./src/img/**/*", pictures);
	gulp.watch("./src/fonts/**", fonts);
	gulp.watch("./src/libs/**", libs);
	gulp.watch("./src/*.html", htmls);
	gulp.watch("./*.html").on("change", browserSync.reload);
}

// all gulp tasks
// gulp.task("toClear", toClear);
// gulp.task("htmls", htmls);
// gulp.task("preproc", preproc);
// gulp.task("otherCSS", otherCSS);
// gulp.task("scripts", scripts);
// gulp.task("pictures", pictures);
// gulp.task("fonts", fonts);
// gulp.task("libs", libs);

// task for stream our project
gulp.task("watch", watch);

// task for build / production
gulp.task("build", gulp.series(toClear, gulp.parallel(htmls, preproc, otherCSS, scripts,  pictures, fonts, libs)));

// task for parallel build and watch taks
gulp.task("dev", gulp.series("build", "watch"));