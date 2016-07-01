# Usage

## Create your project

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

## Questions
* Name - Defaults to the name of the active directory. This will be used to populate your manifest, bower, and package files.
* Version - The version of your app. Expects and defaults to semantic versioning.
* Decscription - Used to populate your bower file.
* Author's name - Used in the package file.
* Company name - Used for the signing of your certificate and extension compiling.
* Country - Used for the signing of your certificate and extension compiling.
* State/province - Used for the signing of your certificate and extension compiling.
* License - Used in your package and bower files.

## Quick Start

After the generator finishes building your files, be sure to install the node and bower modules

```
npm install && bower install
```

Run the following command(s), your zxp will be in the build directory
```
gulp cert && gulp build
```
You only need to run the cert task once.
The build command will bootstrap your project, build the bundle, generator CSS, and inject dependencies onto your index.

Congrats! Open Photoshop to see your extension.

## Gulp Tasks

* `gulp` or `gulp help` - Show a list of all available tasks
* `gulp build` - Build your ZXP file. Requires a certificate to be generated with `gulp cert`.
* `gulp cert` - Generates a certificate for signing in your bin folder. You should only run this when you need to update your certificate.
* `gulp hint` - Run JSHint against your source files.
* `gulp sass` - Build your SASS files.
* `gulp watch` - Watch various source files and re-run tasks depending on what changes.
* `gulp webpack` - Compile your webpack bundle from all sources in your /app/ directory.
* `gulp wire` - Wires all files to your index.html.
