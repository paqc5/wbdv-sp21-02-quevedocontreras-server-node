require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const mongoose = require('mongoose');
mongoose.connect(
    `${process.env.MONGODB_URI || 'mongodb://localhost:27017/whiteboard'}`,
    {useNewUrlParser: true, useUnifiedTopology: true})
    .catch(error => console.log("ERROR: " + error))


// CORS Config
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers',
      'Content-Type, X-Requested-With, Origin');
  res.header('Access-Control-Allow-Methods',
      'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  next();
});

app.get('/', (request, response) => {
  response.send('Hello World')
})

const quizzesController = require('./controllers/quizzes-controller')
quizzesController(app)
require('./controllers/questions-controller')(app)
require('./controllers/quiz-attempts-controller')(app)

app.listen(process.env.PORT || 3001)