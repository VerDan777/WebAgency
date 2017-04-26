var gulp=require('gulp');
    sass=require('gulp-sass');
    sassModuleImporter=require('sass-module-importer');

    gulp.task('styles',function() {
    gulp.src('./src/sass/**/*.scss')
    .pipe(sass({importer:sassModuleImporter()}),function(errorInfo){
        console.log(errorInfo.toString())
        this.emit('end')
    })
    .pipe(gulp.dest('./dist/'))
});