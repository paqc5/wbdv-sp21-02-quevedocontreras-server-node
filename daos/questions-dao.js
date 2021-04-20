const questionsModel = require('../models/questions/questions-model')
const quizzesModel = require('../models/quizzes/quizzes-model')

const findAllQuestions = () => {
  return questionsModel.find()
}

const findQuestionById = (quizId) => {
  return questionsModel.findById(quizId)
}

const findAllQuestionsForQuiz = (quizId) => {
  return quizzesModel.findById(quizId)
    .populate('questions')
    .then(quiz => quiz.questions)
  }

module.exports = {
  findAllQuestions,
  findQuestionById,
  findAllQuestionsForQuiz,
}