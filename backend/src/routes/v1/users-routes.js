const express = require('express');
const {
  login
} = require('../../controllers/v1/users-controller');

const router = express.Router();
router.post('/login', login);

module.exports = router;