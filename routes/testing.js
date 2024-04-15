const router = require('express').Router()
const getTestReset = require('../controller/testing')

router.post('/reset', getTestReset)

module.exports = router

