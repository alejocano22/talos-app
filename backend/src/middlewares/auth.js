const jwt = require('jsonwebtoken');

const isAuth = (req, res, next) => {
  try {
    const { token } = req.headers;
    if (token) {
      const { email } = jwt.verify(token, process.env.JWT_SECRET);
      next();
    } else {
      throw {
        code: 403,
        status: 'ACCESS_DENIED',
        message: 'Missing header token',
      };
    }
  } catch (error) {
    res.status(error.code || 500).send({
      status: error.status || 'ERROR',
      message: error.message,
    });
  }
};

module.exports = { isAuth };