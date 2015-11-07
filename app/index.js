'use strict';

var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');
var mkdirp = require('mkdirp');
var _ = require('lodash');

var prompts = require('./prompts');
var files = require('./files.json');
var responses = {};

var GizmoGenerator = yeoman.generators.Base.extend({
  constructor: function () {
    yeoman.generators.Base.apply(this, arguments);

    this.argument('appName', {
      type: String,
      required: false
    });
  },

  info: function () {
    this.log(yosay(
        chalk.red('Allo!') + '\n' +
        chalk.yellow('This is ') + chalk.inverse('Gizmo ') + chalk.yellow('- a generator for Adobe Photoshop Extensions!')
    ));
  },

  askQuestions: function () {
    var done = this.async();
    this.prompt(prompts, function (props) {
      responses = props;
      this.props = _.merge(this.props, props);
      this.config.set('props', this.props);
      done();
    }.bind(this));
  },

  debug: function () {
    this.log(JSON.stringify(responses));
  },

  writeFiles : function () {
    for(var i = 0; i < files.length; i++) {
      this.fs.copyTpl(
        this.templatePath(files[i]),
        this.destinationPath(files[i]),
        responses
      );
    }
  },

  createDirectories : function () {
    mkdirp(this.destinationPath('bin'), function (err) {
      if (err) {
        console.error(err);
      } else {
        console.log('bin directory created');
      }
    });

    mkdirp(this.destinationPath('dist'), function (err) {
      if (err) {
        console.error(err);
      } else {
        console.log('dist directory created');
      }
    });

    mkdirp(this.destinationPath('docs'), function (err) {
      if (err) {
        console.error(err);
      } else {
        console.log('docs directory created');
      }
    });

    mkdirp(this.destinationPath('build'), function (err) {
      if (err) {
        console.error(err);
      } else {
        console.log('build directory created');
      }
    });
  }
});

module.exports = GizmoGenerator;
