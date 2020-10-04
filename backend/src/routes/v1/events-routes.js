const express = require('express');

const {
  createEvent,
  deleteEvent,
  updateEvent,
  getEvents,
} = require('../../controllers/v1/events-controller');

const router = express.Router();
router.post('/create', createEvent);
router.post('/delete', deleteEvent);
router.post('/update', updateEvent);
router.get('/get-all', getEvents);

module.exports = router;
