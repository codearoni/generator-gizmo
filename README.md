# generator-gizmo

[![Join the chat at https://gitter.im/codearoni/generator-gizmo](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/codearoni/generator-gizmo?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Dependencies](http://img.shields.io/david/codearoni/generator-gizmo.svg)](https://david-dm.org/codearoni/generator-gizmo)
[![Build Status](https://travis-ci.org/codearoni/generator-gizmo.svg?branch=master)](https://travis-ci.org/codearoni/generator-gizmo)
[![Build Status](https://ci.appveyor.com/api/projects/status/github/codearoni/generator-gizmo?branch=master&amp;svg=true)](https://ci.appveyor.com/project/codearoni/generator-gizmo)
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

> Yeoman generator for Adobe Photoshop Extensions

## About

Adobe's extension technology is incredibly powerful, allowing developers to push their tools beyond what Adobe natively provides. However, the toolsets surrounding this technology is currently limited. [Extension Builder 3](http://labs.adobe.com/technologies/extensionbuilder3/) and [Builder for Brackets](http://davidderaedt.github.io/CC-Extension-Builder-for-Brackets/) are both good starting points for developers, but they both suffer the same issue - being tied to a particular IDE and providing little help building your project and automating common tasks. Gizmo is an attempt to recitify this and bring modern web development standards to extension building.

## Quick Start

##### Install `generator-gizmo`:
```
npm install -g generator-gizmo
```

### Run
* Be sure you are in your extension directory.
* **Windows:** C:\Program Files (x86)\Common Files\Adobe\CEP\extensions
* **Mac:** /Library/Application Support/Adobe/CEP/extensions

##### Create a new directory, and go to it:
```
mkdir my_extension && cd $_
```

##### Run `yo gizmo`, and follow the prompts:
```
yo gizmo
```

## Usage

More information in the [usage documentation page](docs/usage.md)

## Features

![Logo](docs/assets/gulp.png)
![Logo](docs/assets/bower.png)
![Logo](docs/assets/webpack.png)
![Logo](docs/assets/sass.png)
![Logo](docs/assets/jshint.png)

* **Webpack** - Your front-end source files will be bundled for deployment.
* **Multiple JSX** - Gizmo preconfigures your extension to load all extendscript files in your /jsx/ directory. No additional code needed.
* **Polyfills** - Gizmo provides polyfills for several key ECMA 5 features.
* **SASS** - No additional configuration needed to get SASS in your extension.
* **Bower and NPM** - Manage your dependencies properly with Bower and NPM.
* **JSHint** - Debug your extension with the power of JSHint.
* **Compilation** - Gizmo takes the hassle out of compiling your ZXP file and reduces it to a single command.

## Roadmap

* Add support for additional Adobe tools (AI, AE, etc)
* JSDoc integration
* Optional scaffolding for popular frameworks (Angular, Backbone, etc)

## Other Resources and Special Thanks

Thanks to the following people and groups for their contributions to the extension ecosystem. Gizmo is built on top of what they have shared and created.

* Davide Barranca - [Blog](http://www.davidebarranca.com/)
* Andy Hall - [Blog](http://aphall.com/2014/08/cep-mega-guide-en/)
* David Deraedt - [Github](https://github.com/davidderaedt)
* Hallgrimur Bjornsson - [Blog](https://medium.com/@HallgrimurTh/the-other-api-23357c99c774)
* CEP Cookbook 2015 - [Link](https://github.com/Adobe-CEP/CEP-Resources/wiki/CEP-6-HTML-Extension-Cookbook-for-CC-2015)