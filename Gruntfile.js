module.exports = function(grunt) {
	"use strict";

	grunt.initConfig({
		filerev: {
			options: {
			  encoding: 'utf8',
			  algorithm: 'md5',
			  length: 8
			},
			css: {
			  src: 'css/main.min.css',
			  dest: 'css/'
			},
			js: {
				src: 'js/global.min.js',
				dest: 'js/'
			}
		},
	  /* // only use if you need the json saved to a file:
		filerev_assets: {
			dist: {
				options: {
					dest: 'assets/assets.json',
					// cwd: 'public/',
					// prefix: '/static/'
				}
			}
		},
		*/
		processhtml: {
			options: {
				process: false,
				data: { mydataJS: "<%= grunt.option(\"mydataJS\") %>",
						mydataCSS: "<%= grunt.option(\"mydataCSS\") %>" }
				
			},
			release: {
				files: {
					"index.release.html": ["index.html"]
				},
			}
		},
		
		clean: ['js/global.min.?*.js', 'css/main.min.?*.css']
    
	});
	

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks("grunt-filerev");
	grunt.loadNpmTasks("grunt-processhtml");
	
	/* optional */ // grunt.loadNpmTasks("grunt-filerev-assets");
	
	grunt.registerTask("processPrepare", 'Updates processhtml attributes with filerev data. Must be run *after* filerev and *before* processhtml.', function() {
		// grunt.log.writeln('grunt.filerev', grunt.filerev.summary);
		
		grunt.option("mydataJS", grunt.filerev.summary['js/global.min.js']);
		grunt.option("mydataCSS", grunt.filerev.summary['css/main.min.css']);
	});
	
	grunt.registerTask('default', [
		'clean',
		'filerev',
		'processPrepare',
		'processhtml'
	]);
};