const eventsRoutes = require('./events-routes');

module.exports = (app) => {
  app.use('/api/v1/events', eventsRoutes);
};
