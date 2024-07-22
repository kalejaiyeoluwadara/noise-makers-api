const errorHandlerMiddleware = (err, req, res, next) => {
  console.error(err);

  const statusCode = err.statusCode || 500;

  const message =
    process.env.NODE_ENV === "development"
      ? err.message
      : "Internal server error";

  res.status(statusCode).json({ msg: message });
};

module.exports = errorHandlerMiddleware;
