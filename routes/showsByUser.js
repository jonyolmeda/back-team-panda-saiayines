let router = require('express').Router()

let { read } = require ('../controllers/showsByUser')

router.get('/',read)

module.exports = router;