'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('angular-spring generator', function () {

  var resourceDir       = 'src/main/resources/';
  var testResourceDir   = 'src/test/resources/';
  var webappDir         = 'src/main/webapp/';
  var javaSrcDir        = 'src/main/java/';
  var javaPackageDir    = javaSrcDir + 'com/mycompany/myapp/';
  
  var defaultFiles = [
    '.gitignore',
    '.travis.yml',
    'bower.json',
    'package.json',
    'pom.xml',
    'Gruntfile.js',
    'README.md'
  ];

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
    webappDir + 'app/components/main/controllers/main.js',
    webappDir + 'app/components/main/services/main.js'
  ];

  var defaultPrompt = {          
          projectName: 'angular-spring',
          projectAuthor: 'John Doe',
          projectWebsite: 'http://github.com/madtrax',
          projectEmail: 'john@mycompany.com',
          packageName: 'com.mycompany.myapp',
          useAngularStrap: false,
          userFontAwesome: false
      };
  
  var expected = defaultFiles.concat(expectedAdditionalFiles);
      
  it('creates expected files (without any optional stuff)', function (done) {


      helpers
        .run(path.join( __dirname, '../app'))
        .inDir(path.join(__dirname, 'temp'))
        .withPrompt(defaultPrompt)
        .on('ready', function() { })
        .on('end', function() { 
          assert.file(expected);
          assert.noFileContent(webappDir + 'app/app.js', /mgcrea\.ngStrap/g);
          assert.noFileContent(webappDir + 'templates/main/main.html', /AngularStrap/g);
          assert.noFileContent(webappDir + 'templates/main/main.html', /FontAwesome/g);
          assert.noFileContent('bower.json', /angular\-strap/g);
          assert.noFileContent('bower.json', /components\-font\-awesome/g);
          
          done();
        })
  });


  it('creates expected files (+AngularStrap)', function (done) {

      defaultPrompt.useAngularStrap = true;

      helpers
        .run(path.join( __dirname, '../app'))
        .inDir(path.join(__dirname, 'temp'))
        .withPrompt(defaultPrompt)
        .on('ready', function() { })
        .on('end', function() { 
          assert.file(expected);
          assert.fileContent(webappDir + 'app/app.js', /mgcrea\.ngStrap/g);
          assert.fileContent(webappDir + 'templates/main/main.html', /AngularStrap/g);
          assert.noFileContent(webappDir + 'templates/main/main.html', /FontAwesome/g);
          assert.fileContent('bower.json', /angular\-strap/g);
          assert.noFileContent('bower.json', /components\-font\-awesome/g);

          done();
        })
  });

  it('creates expected files (+AngularStrap +FontAwesome)', function (done) {

      defaultPrompt.useAngularStrap = true;
      defaultPrompt.useFontAwesome = true;

      helpers
        .run(path.join( __dirname, '../app'))
        .inDir(path.join(__dirname, 'temp'))
        .withPrompt(defaultPrompt)
        .on('ready', function() { })
        .on('end', function() { 
          assert.file(expected);
          assert.fileContent(webappDir + 'app/app.js', /mgcrea\.ngStrap/g);
          assert.fileContent(webappDir + 'templates/main/main.html', /AngularStrap/g);
          assert.fileContent(webappDir + 'templates/main/main.html', /FontAwesome/g);
          assert.fileContent(webappDir + 'templates/main/main.html', /FontAwesome/g);
          assert.fileContent('bower.json', /angular\-strap/g);
          assert.fileContent('bower.json', /components\-font\-awesome/g);
          done();
        })
  });




});