module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less: {
            css: {
                options:{
                    paths: ["public/grunttest/css"],
                    cleancss: true
                },

                files:{
                    "public/grunttest/css/s.min.css": ["public/grunttest/css/s*.less","public/grunttest/css/s3.css"]
                }

            }
        },

        concat:{
            options: {
                banner: '/* banner */\n'
            },

            foo: {
                files:[
                {
                  src: ['public/grunttest/a.js', 'public/grunttest/b.js'],
                  dest: 'public/grunttest/com11.js'
                },
                {
                  src: ['public/grunttest/c.js', 'public/grunttest/b.js'],
                  dest: 'public/grunttest/com22.js'
                }]
            }
        },

        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: ['public/grunttest/a.js','public/grunttest/b.js' ],
                dest: 'public/grunttest/com22.min.js'
            }
        },

        csslint: {
            files:['public/grunttest/css/*.css']
        },

        jshint: {
            files:['public/grunttest/*.js']
        },

        watch: {
            files:['<%= jshint.files %>','<%= csslint.files %>'],
            tasks:['jshint','csslint']
        }


    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['less', 'csslint', 'jshint', 'concat', 'uglify']);

};