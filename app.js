const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const questionRouter = require('./routes/questionRoutes');
const app = express();

// MIDDLEWARE
if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// ROUTE HANDLERS
app.use('/api/v1/question', questionRouter);

// SERVER
module.exports = app;
