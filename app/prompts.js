var path = require('path');
module.exports = [
  {
    "type": "input",
    "name": "appName",
    "message": "What is the name of your extension: ",
    "default": process.cwd().split(path.sep).pop()
  },
  {
    "type": "input",
    "name": "appVersion",
    "message": "Version number: ",
    "default": "0.1.0"
  },
  {
    "type": "input",
    "name": "appDesc",
    "message": "Extension description: "
  },
  {
    "type": "input",
    "name": "author",
    "message": "Author's name: "
  },
  {
    "type": "input",
    "name": "companyName",
    "message": "Company name: ",
    "default": "company"
  },
  {
    "type": "input",
    "name": "country",
    "message": "Enter your country: ",
    "default": "US"
  },
  {
    "type": "input",
    "name": "province",
    "message": "Enter your state/province: ",
    "default": "NA"
  },
  {
    "type": "input",
    "name": "license",
    "message": "Enter license type: ",
    "default": "MIT"
  }
]
