'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('angular-spring generator', function () {

  it('creates expected files', function (done) {
      var defaultFiles = [
        '.gitignore',
        '.travis.yml',
        'bower.json',
        'package.json',
        'pom.xml',
        'Gruntfile.js',
        'README.md'
      ];

      var resourceDir       = 'src/main/resources/';
      var testResourceDir   = 'src/test/resources/';
      var webappDir         = 'src/main/webapp/';
      var javaSrcDir        = 'src/main/java/';
      var javaPackageDir    = javaSrcDir + 'com/mycompany/myapp/';

      var expectedAdditionalFiles = [
        resourceDir + 'spring/application-config.xml',
        resourceDir + 'spring/mvc-config.xml',
        webappDir + 'index.html',
        webappDir + 'web.xml',
        webappDir + 'config/config.properties',
        
        webappDir + 'templates/header.html',
        webappDir + 'templates/main/main.html',

        webappDir + 'app/app.js',
        webappDir + 'app/config.js',
        webappDir + 'app/routes.js',

        webappDir + 'app/components/core/directives/directives.js',
        webappDir + 'app/components/main/controllers/application.js',
        webappDir + 'app/components/main/services/application.js'
      ];

      var expected = defaultFiles.concat(expectedAdditionalFiles);
      
      helpers
        .run(path.join( __dirname, '../app'))
        .inDir(path.join(__dirname, 'temp'))
        .withPrompt({
          projectName: 'angular-spring',
          projectAuthor: 'John Doe',
          projectWebsite: 'http://github.com/madtrax',
          projectEmail: 'john@mycompany.com',
          packageName: 'com.mycompany.myapp'
        })
        .on('ready', function() { })
        .on('end', function() { 
          assert.file(expected);
          done();
        })
  });

});