const Events = require('../../mongo/models/events');

const createEvent = async (req, res) => {
  try {
    const { 
      name,
      date,
      author,
      description,
      imageLink,
      accessLink, 
    } = req.body;

    await Events.create({
      name,
      date,
      author,
      description,
      imageLink,
      accessLink,
    });

    res.send({
      status: 'OK',
      message: 'Event created successfully',
    });
  } catch (error) {
    res.status(500).send({
      status: 'ERROR',
      message: error.message,
    });
  }
};

const deleteEvent = async (req, res) => {
  try {
    const { eventId } = req.body;

    if (!eventId) {
      throw new Error('Missing param eventId');
    }

    await Events.findByIdAndDelete(eventId);

    res.send({
      status: 'OK',
      message: 'Event deleted successfully',
    });
  } catch (error) {
    res.status(500).send({
      status: 'ERROR',
      message: error.message,
    });
  }
};

const updateEvent = async (req, res) => {
  try {
    const {
      eventId,
      name,
      date,
      author,
      description,
      imageLink,
      accessLink, 
    } = req.body;

    await Events.findByIdAndUpdate(eventId, {
      name,
      date,
      author,
      description,
      imageLink,
      accessLink, 
    });

    res.send({
      status: 'OK',
      message: 'Event updated successfully',
    });
  } catch (error) {
    res.status(500).send({
      status: 'ERROR',
      message: error.message,
    });
  }
};

const getEvents = async (req, res) => {
  try {
    const events = await Events.find().select({ __v: 0 });
    res.send({
      status: 'OK',
      message: 'Get events successfully',
      events,
    });
  } catch (error) {
    res.status(500).send({
      status: 'ERROR',
      message: error.message,
    });
  }
};

module.exports = {
  createEvent,
  deleteEvent,
  updateEvent,
  getEvents,
};
