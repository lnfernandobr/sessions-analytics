export const errorHandler = (err, req, res, next) => {
  const status = err.status || 500;
 const message = err.message || 'We had an unexpected error';

  res.status(status).json({ error: message });
};
