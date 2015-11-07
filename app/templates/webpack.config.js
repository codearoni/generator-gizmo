'use strict';
var path = require('path');

module.exports = {
  context: path.join(__dirname, 'bundle'),
  entry: './entry.js',
  output: {
    path: path.join(__dirname, 'bundle'),
    filename: 'bundle.js'
  }
}
