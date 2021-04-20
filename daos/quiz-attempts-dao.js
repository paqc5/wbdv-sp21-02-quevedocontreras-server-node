const quizAttemptsModel = require('../models/quiz-attempts/quiz-attempts-model')

const findAllAttempts = () =>
    quizAttemptsModel.find()

const scoreQuiz = (questions) => {
    let correctQuestions = 0
    questions.forEach(question =>
        question.answer === question.correct ? correctQuestions++ : correctQuestions)
    return (100 * correctQuestions / questions.length).toPrecision(2)
}
const findAttemptsForQuiz = (quizId) =>
    quizAttemptsModel.find({quiz: quizId})
        .populate('quiz', 'title')

const createAttempt = (quizId, attempt) => {
    return findAttemptsForQuiz(quizId)
        .then(result => {
            let idNumber = String(result.length)

            return quizAttemptsModel.create({
                _id: quizId + "-" + idNumber,
                quiz: quizId,
                answers: attempt,
                score: scoreQuiz(attempt)
            })
        })
}

module.exports = {
    createAttempt,
    findAttemptsForQuiz,
    findAllAttempts
}