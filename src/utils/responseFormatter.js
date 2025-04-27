module.exports = {
  success: (code, message, data = {}) => ({
    status: true,
    code,
    message,
    data,
  }),
  error: (code, message, data = {}) => ({
    status: false,
    code,
    message,
    data,
  }),
};
