module.exports = {
  successResponse: (code, message, data = {}) => ({
    status: true,
    code,
    message,
    data,
  }),
  errorResponse: (code, message, data = {}) => ({
    status: false,
    code,
    message,
    data,
  }),
};
