const express = require('express');
const app = express();

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

app.listen(process.env.PORT || 3001)