const eventsRoutes = require('./events-routes');
const usersRoutes = require('./users-routes');

module.exports = (app) => {
  app.use('/api/v1/events', eventsRoutes);
  app.use('/api/v1/users', usersRoutes);
};
