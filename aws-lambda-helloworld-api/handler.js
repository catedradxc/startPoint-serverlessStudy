'use strict';

module.exports.hello = async (event, context, callback) => {
  let response = {
    statusCode: 200,
    body: JSON.stringify({
        message: 'Hello World! :D'
      }),
  };

 return callback(null, response);
};
