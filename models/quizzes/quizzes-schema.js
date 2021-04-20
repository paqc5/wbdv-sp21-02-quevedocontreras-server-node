const mongoose = require('mongoose')
const questionsSchema = require('../questions/questions-schema')
const quizzesSchema = mongoose.Schema({
  _id: String,
  title: String,
  questions: [{type:String, ref: "QuestionsModel"}]
}, {collection: "quizzes"})

module.exports = quizzesSchema