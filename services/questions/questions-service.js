const questions = require('./questions.json')

const createQuestion = () => {}
const createQuestionForQuiz = () => {}

const findAllQuestions = () => {
  return questions
}

const findAllQuestionsForQuiz = (quizId) => {
  return questions.filter(question => question.quizId === quizId)
}

const findQuestionById = (quizId) => {
  return questions.find(question => question._id === quizId)
}

const updateQuestion = () => {}
const deleteQuestion = () => {}

module.exports = {
  createQuestion,
  createQuestionForQuiz,
  findAllQuestions,
  findAllQuestionsForQuiz,
  findQuestionById,
  updateQuestion,
  deleteQuestion
}