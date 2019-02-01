// External Libraries
const fs = require('fs');
const { formatError } = require('@gh-conf/gh-conf-response')
const { validatePath } = require('@gh-conf/gh-conf-validate');
const { addSlash } = require('@gh-conf/gh-conf-path');
const { GH_PATH } = require('@gh-conf/gh-conf-constants');


/**
 * Reads git config, by appending GITHUB_CONFIG_PATH to input path
 * @param {String} path 
 */
const readConf = (path) => {

  return new Promise((resolve, reject) => {

    // Validate input
    validatePath(path, GH_PATH['CONFIG'])

    // Check and add ending slash if does not exists
    path = addSlash(path);

    // Read config by path
    fs.readFile(`${path}${GH_PATH['CONFIG']}`, 'utf8', function (err, content) {
      if (err) {

        reject(formatError(`${path}${GH_PATH['CONFIG']} not found`, err));
      }

      resolve(content);
    });
  });
};


module.exports = readConf;
