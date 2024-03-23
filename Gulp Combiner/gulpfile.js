var gulp = require("gulp");
var concat = require('gulp-concat');

gulp.task ("default",function(done){
	gulp.src("*.json")
		.pipe(concat('combined.json', {newLine: ''}))
	    .pipe(gulp.dest("./dist/"))
	done();
});