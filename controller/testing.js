const Blogs =require('../models/blogModel')
const User = require('../models/userModel')

const testReset = async(req, res)=> {
    await Blogs.deleteMany({})
    await User.deleteMany({})

    res.status(204).end()
}

module.exports = testReset