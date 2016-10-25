module.exports = function (grunt) {
    grunt.initConfig({

	 	dirs: {
            js_dir: 'src',

    	},



    uglify: {

        options:{
                mangle:false
        },


        vendor: {
            files: {
                  'uplift.min.js': 'src/uplift.js'
            }
        }


    }
});

// load plugins
grunt.loadNpmTasks('grunt-contrib-uglify');

// register at least this one task
grunt.registerTask('default', [ 'uglify' ]);

};
