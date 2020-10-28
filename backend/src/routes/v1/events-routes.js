const express = require('express');
const { isAuth } = require('../../middlewares/auth');
const {
  createEvent,
  deleteEvent,
  updateEvent,
  getEvents,
} = require('../../controllers/v1/events-controller');

const router = express.Router();
router.post('/create', isAuth, createEvent);
router.post('/delete', isAuth, deleteEvent);
router.post('/update', isAuth, updateEvent);
router.get('/get-all', getEvents);

module.exports = router;
