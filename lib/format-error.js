/**
 * Builds an error object
 * @param {String} message 
 * @param {Error Object} data 
 */
const formatError = (message, data) => {

  return {
    status: 'err',
    message: message,
    data: data
  };
};


module.exports = formatError;