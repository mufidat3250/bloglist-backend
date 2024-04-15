require('dotenv').config()
const mongoose = require('mongoose')
const logger = require('../utils/logger')

const url = process.env.MONGODB_URI

mongoose.connect(url).then(()=> {
    logger.info('Connected to data base')
}).catch((error)=> {
    logger.info('Error connecting to mongoDB', error.message)
})

const blogSchema = new mongoose.Schema({
    title:{
      type:String,
      required:true
    },
    author:{
      type:String,
      required:true
    },
    url:{
      type:String,
      required:true,
    },
    likes:{
      type:Number,
      default:0
    },
    user:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'User'
    },
    comment:[
      {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Comment'
      }
    ]
})
blogSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })
module.exports = mongoose.model('Blog', blogSchema)