const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Users = require('../../mongo/models/users');

const expiresIn = 60 * 60; // 60min

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Users.findOne({ email });

    if (user) {
      const isOk = await bcrypt.compare(password, user.password);
      if (isOk) {
        const token = jwt.sign({
          email: user.email
        },
        process.env.JWT_SECRET,
        { expiresIn });
        res.send({
          status: 'OK',
          message: 'Login successfully!',
          data: {
            token,
            expiresIn,
          },
        });
      } else {
        res.status(403).send({
          status: 'INVALID_PASSWORD',
          message: 'Invalid Password',
        });
      }
    } else {
      res.status(401).send({
        status: 'USER_NOT_FOUND',
        message: `${email} was not found!`,
      });
    }
  } catch (error) {
    res.status(500).send({
      status: 'ERROR',
      message: error.message,
    });
  }
};

module.exports = {
  login
};
