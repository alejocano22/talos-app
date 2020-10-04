const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const routesV1 = require('./routes/v1');

const app = express();

dotenv.config();
const { PORT } = process.env || 4000;
const { MONGO } = process.env;
console.log(PORT, MONGO);

// parse application/json
app.use(bodyParser.json());

routesV1(app);

mongoose.connect(MONGO, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
}).then(() => {
  console.log('Connected to Mongo DB');
  app.listen(PORT, () => {
    console.log(`Running on port ${PORT}!`);
  });
}).catch((error) => {
  console.log(`Mongo DB error ${error}`);
});
