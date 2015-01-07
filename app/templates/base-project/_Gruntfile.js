module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    folders: {
      webapp: {
        root: 'src/main/webapp/',
        build: 'src/main/webapp/WEB-INF/'
      }
    },

    banner: '/*!\n * <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? " * " + pkg.homepage + "\\n" : "" %>' +
      ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %>\n*/\n',

    bower_concat: {
      all: {
        dest: '<%= folders.webapp.build %>js/lib.js',
        cssDest: '<%= folders.webapp.build %>style/lib.css',
        bowerOptions: {
          relative: false
        }
      }
    },

    concat: {
      js: {
        src: [ '<%= folders.webapp.root %>/app/app.js', '<%= folders.webapp.root %>/app/**/*.js' ],
        dest: '<%= folders.webapp.build %>js/app.js'
      },
      css:{
        src: [ '<%= folders.webapp.root %>/style/**/*.css' ],
        dest: '<%= folders.webapp.build %>style/app.css'
      }
    },

    copy: {
      tomcat: {
        src: ['<%= folders.webapp.root %>/web.xml'],
        dest: '<%= folders.webapp.build %>/web.xml'
      },
      resources: {
        expand: true,
        cwd: '<%= folders.webapp.root %>/../resources/',
        src: ['**/**/*'],
        dest: '<%= folders.webapp.build %>/resources/'
      },
      config: {
        expand: true,
        cwd: '<%= folders.webapp.root %>/config/',
        src: ['**/**/*'],
        dest: '<%= folders.webapp.build %>config/'
      },
      img: {
        expand: true,
        cwd: '<%= folders.webapp.root %>/img/',
        src: ['**/**/*'],
        dest: '<%= folders.webapp.build %>img/'
      },
      templates: {
        expand: true,
        cwd: '<%= folders.webapp.root %>',
        src: ['index.html', 'templates/**/*.html'],
        dest: '<%= folders.webapp.build %>'
      },
      fonts: {
        expand: true,
        flatten: true,
        src: [ 'bower_components/components-font-awesome/fonts/**/*'],
        dest: '<%= folders.webapp.build %>/fonts/'
      }      
    },

    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      js: {
        src: '<%= concat.js.dest %>',
        dest: '<%= folders.webapp.build %>js/app.min.js'
      }
    },

    jshint: {
      options: {
        curly:    false,
        eqeqeq:   true,
        immed:    true,
        latedef:  false,
        newcap:   true,
        noarg:    true,
        sub:      true,
        undef:    false,
        unused:   true,
        boss:     true,
        eqnull:   true,
        browser:  true,
        globals: {
          jQuery: true
        }
      },
      all: ['Gruntfile.js', '<%= folders.webapp.root %>/app/**/*.js']
    },

    qunit: {
      files: ['test/**/*.html']
    },

    watch: {
      js: {
        files: '<%= jshint.all %>',
        tasks: ['concat:js']
      },
      templates: {
        files: ['<%= folders.webapp.root %>/index.html', '<%= folders.webapp.root %>templates/**/*.html'],
        tasks: [ 'copy:templates' ]
      },
      css: {
        files: '<%= folders.webapp.root %>/style/*.css',
        tasks: [ 'concat:css' ]
      }

    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.loadNpmTasks('grunt-bower-concat');

  grunt.registerTask('default', ['bower_concat', 'copy', 'concat', 'uglify']);
  grunt.registerTask('dev', ['jshint', 'concat']);

};
