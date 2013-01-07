/*global module:false*/
module.exports = function (grunt) {

    grunt.initConfig({
        pkg: '<json:package.json>',
        meta: {
            banner: '/**\n' +
				' * <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
				'<%= grunt.template.today("yyyy-mm-dd") %>\n' +
				'<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' +
				' * Copyright (c) 2008-<%= grunt.template.today("yyyy") %> <%= pkg.author.name %>\n' +
				' * Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %>\n */'
        },
        concat: {
            dist: {
                src: [ '<banner:meta.banner>', '<file_strip_banner:src/<%= pkg.name %>.js>' ],
                dest: 'dist/<%= pkg.name %>.js'
            }
        },
        min: {
            dist: {
                src: [ '<banner:meta.banner>', 'src/js/ui.coverflow.js' ],
                dest: 'dist/ui.coverflow.min.js'
            }
        },
		qunit: {
			all: ['tests/qunit/**/*.html']
		},
        lint: {
			all : [ 'src/js/ui.coverflow.js' ]
        },
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                boss: true,
                eqnull: true,
                browser: true,
				laxbreak: true
            },
            globals: {
                jQuery: true,
				Modernizr: true,
				requestAnimationFrame: true
            }
        }
    });

	grunt.registerTask( 'default', 'lint qunit min' );

};
