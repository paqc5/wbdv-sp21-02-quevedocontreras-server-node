const quizAttemptsService = require('../services/quiz-attempts/quiz-attempts-service')

module.exports = (app) => {

    const createAttempt = (req, res) => {
        let quizId = req.params['quizId']
        let attempt = req.body
        quizAttemptsService.createAttempt(quizId, attempt)
            .then(response => res.send(response))
    }

    const findAttemptsForQuiz = (req, res) => {
        let quizId = req.params['quizId']
        quizAttemptsService.findAttemptsForQuiz(quizId)
            .then(attempts => res.send(attempts))
    }

    const findAllAttempts = (req, res) => {
        quizAttemptsService.findAllAttempts()
            .then(attempts => res.send(attempts))
    }

    app.get('/api/quizzes/:quizId/attempts', findAttemptsForQuiz)
    app.post('/api/quizzes/:quizId/attempts', createAttempt)
    app.get('/api/attempts', findAllAttempts)

}