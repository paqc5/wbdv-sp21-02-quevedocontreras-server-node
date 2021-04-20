const questionsService = require('../services/questions/questions-service')

module.exports = (app) => {

  const findAllQuestions = (req, res) => {
    // const questions = questionsService.findAllQuestions()
    questionsService.findAllQuestions()
      .then(questions => res.send(questions))
    
  }

  const findAllQuestionsForQuiz = (req, res) => {
    const quizId = req.params['quizId']
    // const questions = questionsService.findAllQuestionsForQuiz(quizId)
    questionsService.findAllQuestionsForQuiz(quizId)
      .then(questions => res.send(questions))
  }

  const findQuestionById = (req, res) => {
    const questionId = req.params['questionId']
    // const question = questionsService.findQuestionById(questionId)
    questionsService.findQuestionById(questionId)
      .then(question => res.send(question))
  }

  app.get('/api/questions', findAllQuestions)
  app.get('/api/questions/:questionId', findQuestionById)
  app.get('/api/quizzes/:quizId/questions', findAllQuestionsForQuiz)
}