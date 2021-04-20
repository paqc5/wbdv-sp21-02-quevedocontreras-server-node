const quizzesService = require('../services/quizzes/quizzes-services')

module.exports = (app) => {

  const createQuiz = (req, res) => {
    const quiz = req.body
    quizzesService.createQuiz(quiz)
        .then(quiz => res.send(quiz))
  }

  const findAllQuizzes = (req, res) => {
    // const quizzes = quizzesService.findAllQuizzes()
    quizzesService.findAllQuizzes()
      .then(quizzes => res.send(quizzes))
  }

  const findQuizById = (req, res) => {
    const quizId = req.params.quizId
    // const quiz = quizzesService.findQuizById(quizId)
    quizzesService.findQuizById(quizId)
      .then(quiz => res.send(quiz))
  }

  app.post('/api/quizzes', createQuiz)
  app.get('/api/quizzes', findAllQuizzes)
  app.get('/api/quizzes/:quizId', findQuizById)
}