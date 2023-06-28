const http2 = require('http2').constants;

const errorHandler = (err, req, res, next) => {
  const { statusCode = http2.HTTP_STATUS_INTERNAL_SERVER_ERROR, message } = err;

  res.status(statusCode).send({
    message: statusCode === 500
      ? 'Internal Server Error has occured'
      : message,
  });

  next();
};

module.exports = errorHandler;
