# generator-gizmo

> Yeoman generator for Adobe Photoshop Extensions

## About

Adobe's extension technology is incredibly powerful, allowing developers to push their tools beyond what Adobe natively provides. However, the toolsets surrounding this technology is currently limited. [Extension Builder 3](http://labs.adobe.com/technologies/extensionbuilder3/) and [Builder for Brackets](http://davidderaedt.github.io/CC-Extension-Builder-for-Brackets/) are both good starting points for developers, but they both suffer the same issue - being tied to a particular IDE and providing little help building your project and automating common tasks. Gizmo is an attempt to recitify this and bring modern web development standards to extension building.

## Usage

### Installation

##### Gizmo requires `yeoman`, `gulp` and `bower`:
```
npm install -g yo gulp bower
```

##### Install `generator-gizmo`:
```
npm install -g generator-gizmo
```

### Run
* Be sure you are in your extension directory.
* **Windows:** C:\Program Files (x86)\Common Files\Adobe\CEP\extensions
* **Mac:** /Library/Application Support/Adobe/CEP/extensions

##### Create a new directory, and go into:
```
mkdir my_extension && cd $_
```

##### Run `yo gizmo`, and follow the prompts:
```
yo gizmo
```

## Features

![Logo](docs/assets/gulp.png)
![Logo](docs/assets/bower.png)
![Logo](docs/assets/webpack.png)
![Logo](docs/assets/sass.png)
![Logo](docs/assets/jshint.png)

## License

MIT

