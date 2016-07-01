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

  createDirectories : function () {
    mkdirp(this.destinationPath('bin'), function (err) {
      if (err) {
        console.error(err);
      } else {
        log('bin directory created');
      }
    });

    mkdirp(this.destinationPath('dist'), function (err) {
      if (err) {
        console.error(err);
      } else {
        log('dist directory created');
      }
    });

    mkdirp(this.destinationPath('docs'), function (err) {
      if (err) {
        console.error(err);
      } else {
        log('docs directory created');
      }
    });

    mkdirp(this.destinationPath('build'), function (err) {
      if (err) {
        console.error(err);
      } else {
        log('build directory created');
      }
    });
  }
});

module.exports = GizmoGenerator;
