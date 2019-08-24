/* eslint-disable strict */

'use strict';

module.exports.hello = async ({ queryStringParameters }) => {
  const name =
    queryStringParameters && queryStringParameters.name
      ? ` ${queryStringParameters.name}`
      : '';
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `Hello${name}! Your function executed successfully!`,
      },
      null,
      2
    ),
  };
};

module.exports.helloJohan = async event => ({
  statusCode: 200,
  body: JSON.stringify({
    message: 'Hello Johan',
  }),
});

// Use this code if you don't use the http event with the LAMBDA-PROXY integration
// return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
