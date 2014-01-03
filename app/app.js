var grunt = require('grunt');
var geddy = require('geddy');

grunt.tasks(null, null, function(){
   geddy.start({
       environment: process.env.GEDDY_ENVIRONMENT || 'production'
   });
});

