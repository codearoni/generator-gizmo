'use strict';

var generators = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');
var mkdirp = require('mkdirp');

var prompts = require('./prompts');
var files = require('./files.json');
var responses = {};
var log;

var GizmoGenerator = generators.Base.extend({
  constructor: function () {
    generators.Base.apply(this, arguments);
    log = this.log;

    this.argument('appName', {
      type: String,
      required: false
    });

  },

  info: function () {
    log(yosay(
        chalk.red('Allo!') + '\n' +
        chalk.yellow('This is ') + chalk.inverse('Gizmo') + chalk.yellow(' - a generator for Adobe Photoshop Extensions!')
    ));
  },

  askQuestions: function () {
    return this.prompt(prompts).then(function (answers) {
      responses = answers;
    }.bind(this));
  },

  writeFiles : function () {
    for(var i = 0; i < files.length; i++) {
      // copy all template files
      this.fs.copyTpl(
        this.templatePath(files[i]),
        this.destinationPath(files[i]),
        responses
      );
      // gitignore must be renamed at runtime
      this.fs.copyTpl(
        this.templatePath('gitignoreTemplate'),
        this.destinationPath('.gitignore'),
        {title: 'Generating .gitignore file'}
      );
    }
  },

  installDeps : function () {
    this.installDependencies();
  }
  
});

module.exports = GizmoGenerator;
