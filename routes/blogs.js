const router = require('express').Router()
const middleWare = require('../utils/middleware')
const {getBlog, createBlog, deleteBlog, getSingleBlog, updateBlog}  = require('../controller/blogs')
const {getBlogComment, createBlogComment} = require('../controller/comment')

router.get('/', getBlog)
router.post('/', middleWare.userExtractor, createBlog)
router.get('/:id', getSingleBlog)
router.delete('/:id', middleWare.userExtractor, deleteBlog)
router.put('/:id', updateBlog)
router.get('/:id/comments', getBlogComment)
router.post('/:id/comments',middleWare.userExtractor, createBlogComment)


module.exports = router