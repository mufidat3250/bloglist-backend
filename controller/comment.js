const Blog =  require('../models/blogModel') 
require('dotenv').config()
const CommentModel = require('../models/commentModel')
const getBlogComment = async(req, res, next) => {
    try {
        const id = req
        console.log(id)
        const response = await CommentModel.find({})
        res.json(response)
    } catch (error) {
        next(error)
    }
}

const createBlogComment = async(req, res, next) => {
    try {
        const id = req.params.id
        const body = req.body
        console.log({body})
        const blog = Blog.findById(id).populate('comment')
        if(!blog){
            response.status(400).json({
                error: 'blog not found'
              })
        }
        const comment = new CommentModel({
            comment: body.comment,
            blog:id
        })
        const savedComment = await comment.save()
        res.status(201).json(savedComment) 
    } catch (error) {
        next(error)
    }
}

module.exports = { getBlogComment, createBlogComment}