let router = require('express').Router()

let { read } = require ('../controllers/citiesByUser')

router.get('/',read)

module.exports = router;