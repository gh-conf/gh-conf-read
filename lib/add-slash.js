/**
 * Check if path ends with a slash
 * If not, then append a slash at the end
 * @param {String} path 
 */
const addSlash = (path) => {

  return (path.endsWith('/')) ? path : `${path}/`;
}


module.exports = addSlash;