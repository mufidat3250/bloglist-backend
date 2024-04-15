require('dotenv').config()
const mongoose = require('mongoose')
const logger = require('../utils/logger')

const url = process.env.MONGODB_URI

mongoose.connect(url).then(()=> {
    logger.info('Connected to the data base')
}).catch((error)=> {
    logger.info('Error connecting to mongoDB', error.message)
})

const commentSchema = new mongoose.Schema({
    comment:{
        type:String,
        min:50,
        max: 300,
    },
    blog: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Blog',
        required: true
      },
    

}, {timestamps: true})
commentSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
      // the passwordHash should not be revealed
      delete returnedObject.passwordHash
    }
  })
  module.exports = mongoose.model('Comment', commentSchema)