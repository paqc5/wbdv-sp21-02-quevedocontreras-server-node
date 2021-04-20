const quizAttemptsDao = require('../../daos/quiz-attempts-dao')


const createAttempt = (quizId, attempt) => {
    return quizAttemptsDao.createAttempt(quizId, attempt)
}

const findAttemptsForQuiz = (quizId) => {
    return quizAttemptsDao.findAttemptsForQuiz(quizId)
}

const findAllAttempts = () => {
    return quizAttemptsDao.findAllAttempts()
}
module.exports = {
    createAttempt,
    findAttemptsForQuiz,
    findAllAttempts
}