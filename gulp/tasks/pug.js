var gulp=require('gulp')
    pug=require('gulp-pug2');

gulp.task('pugRender',function(){
    gulp.src('./src/*.pug')
        .pipe(pug(),function(erroInfo){
            console.log(errorIngo.toString())
            this.emit('end');
        })
        .pipe( gulp.dest('./dist/'));
    });