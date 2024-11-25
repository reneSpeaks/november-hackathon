export const errorHandler = (err, req, res, next) => {
  console.error("\x1b[31m%s\x1b[0m", err);
  res.status(err.statusCode || 500).json({ error: { message: err.message, status: err.statusCode || 500 } });
};
