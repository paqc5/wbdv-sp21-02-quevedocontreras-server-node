const quizzesModel = require('../models/quizzes/quizzes-model')

const createQuiz = (quiz) =>
  quizzesModel.create(quiz)

const findAllQuizzes = () => 
  quizzesModel.find()

const findQuizById = (quizId) =>
  quizzesModel.findById(quizId)
      .populate('questions')
      .exec()

module.exports = {
  createQuiz, findAllQuizzes, findQuizById
}