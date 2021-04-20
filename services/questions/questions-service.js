// const questions = require('./questions.json')
const questionsDao = require('../../daos/questions-dao')

const createQuestion = (question) => {
  return questionsDao.createQuestion(question)
}

const findAllQuestions = () => {
  // return questions
  return questionsDao.findAllQuestions()
}

const findAllQuestionsForQuiz = (quizId) => {
  // return questions.filter(question => question.quizId === quizId)
  return questionsDao.findAllQuestionsForQuiz(quizId)
}

const findQuestionById = (quizId) => {
  // return questions.find(question => question._id === quizId)
  return questionsDao.findQuestionById()
}

module.exports = {
  createQuestion,
  findAllQuestions,
  findAllQuestionsForQuiz,
  findQuestionById,
}