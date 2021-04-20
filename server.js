const express = require('express');
const app = express();
let bodyParser = require('body-parser')

const mongoose = require('mongoose');
mongoose.connect(
  'mongodb://localhost:27017/whiteboard', 
  { useNewUrlParser: true, useUnifiedTopology: true });


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

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const quizzesController = require('./controllers/quizzes-controller')
quizzesController(app)
require('./controllers/questions-controller')(app)
require('./controllers/quiz-attempts-controller')(app)

app.listen(process.env.PORT || 3001)