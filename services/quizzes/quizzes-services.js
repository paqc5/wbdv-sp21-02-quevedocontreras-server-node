const quizzes = require('./quizzes.json')
const quizzesDao = require('../../daos/quizzes-dao')

const findAllQuizzes = () => {
  // return quizzes
  return quizzesDao.findAllQuizzes()
}

const findQuizById = (quizId) => {
  // return quizzes.find(quiz => 
  //   quiz._id === quizId)
  // return quizzesModel.find({_id: quizId})
  return quizzesDao.findQuizById(quizId)
}


module.exports = {
  findAllQuizzes,
  findQuizById
}
