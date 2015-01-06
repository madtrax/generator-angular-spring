'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    this.log(yosay(
      'Thank you for using ' + chalk.red('angular-spring') + ' generator!'
    ));

    var prompts = [
      { type: 'input', name: 'projectName', message: 'What\'s the name of the project?', default: 'MyProject' },
      { type: 'input', name: 'projectAuthor', message: 'Project author?', default: 'John Doe' },
      { type: 'input', name: 'projectWebsite', message: 'Project website?', default: 'localhost' },
      { type: 'input', name: 'projectEmail', message: 'Author\'s email?', default: 'john.doe@localhost' },
      { type: 'input', name: 'packageName', message: 'What is your default Java package name?',
          validate: function (input) {
                if (/^([a-z_]{1}[a-z0-9_]*(\.[a-z_]{1}[a-z0-9_]*)*)$/.test(input)) return true;
                return 'The package name you have provided is not a valid Java package name.'; 
            },
            default: 'com.mycompany.myapp'
      }
    ];

    this.prompt(prompts, function (props) {
      this.properties               = props;
      this.properties.generatorName = this.pkg.name;

      done();
    }.bind(this));
  },


  writing: {

    app: function () {

      var underscoreParams        = { evaluate: /\<\%([\s\S]+?)\%\>/g, interpolate: /\<\%\=([\s\S]+?)\%\>/g, escape: /\<-([\s\S]+?)\>/g };
      var baseProjectPath         = 'base-project/';

      var genericTemplateFiles    = ['_package.json', '_bower.json', '_pom.xml', '_README.md', '_.gitignore', '_.travis.yml']
      var genericCopyFiles        = ['_Gruntfile.js'];
      var packagePath             = this.properties.packageName.replace(/\./g, '/');
      var javaSrcPath             = baseProjectPath + 'src/main/java/'
      var javaPath                = 'src/main/java/' + packagePath + '/';

      for (var f in genericTemplateFiles)
        this.template(baseProjectPath + genericTemplateFiles[f], genericTemplateFiles[f].substr(1,500), this, underscoreParams);

      for (var t in genericCopyFiles)
        this.copy(baseProjectPath + genericCopyFiles[t], genericCopyFiles[t].substr(1,500), this, underscoreParams);

      this.directory(baseProjectPath + 'src/main/webapp/', 'src/main/webapp/');
      this.directory(baseProjectPath + 'src/main/resources/', 'src/main/resources/');
      this.directory(baseProjectPath + 'src/test/', 'src/test/');
      this.directory(baseProjectPath + 'src/main/java/package/', 'src/main/java/' + packagePath + '/');

      this.template(baseProjectPath + 'src/main/webapp/app/app.js', 'src/main/webapp/app/app.js', this, underscoreParams);
      this.template(baseProjectPath + '_web.xml', 'src/main/webapp/web.xml', this, underscoreParams);
      
      this.template(baseProjectPath + 'src/main/webapp/config/config.properties', 'src/main/webapp/config/config.properties', this, underscoreParams);
      this.template(baseProjectPath + 'src/main/resources/spring/application-config.xml', 'src/main/resources/spring/application-config.xml', this, underscoreParams);
      this.template(baseProjectPath + 'src/main/resources/spring/mvc-config.xml', 'src/main/resources/spring/mvc-config.xml', this, underscoreParams);

      this.template(javaSrcPath + 'package/controller/ApplicationController.java', javaPath + 'controller/ApplicationController.java', this, underscoreParams);
      this.template(javaSrcPath + 'package/service/ApplicationService.java', javaPath + 'service/ApplicationService.java', this, underscoreParams);
      this.template(javaSrcPath + 'package/utils/JSONObjectMapperLazy.java', javaPath + 'utils/JSONObjectMapperLazy.java', this, underscoreParams);

    },

    projectfiles: function () {

    }
  },

  install: function () {
    this.installDependencies({
      skipInstall: this.options['skip-install']
    });
  }
});
