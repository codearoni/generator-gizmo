'use strict';

var path = require('path'),
    assert = require('yeoman-assert'),
    helpers = require('yeoman-test');

describe('app:gizmo', function () {

    before(function () {
        return helpers.run(path.join(__dirname, '..', 'app')).toPromise();
    });

    describe('file generation', function () {
        
        it('Should generate a webpack config', function () {
            assert.file('webpack.config.js');
        });

        it('Should contain a package.json', function () {
            assert.file('package.json');
        });

        it('Should contain a gulpfile', function () {
            assert.file('gulpfile.js');
        });

        it('Should contain a .gitignore file', function () {
            assert.file('.gitignore');
        });

        it('Should contain a bower.json', function () {
            assert.file('bower.json');
        });

        it('Should contain a .debug file', function () {
            assert.file('.debug');
        });
    });
});