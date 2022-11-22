let router = require('express').Router()

let { read } = require ('../controllers/hotelsByUser')

router.get('/',read)

module.exports = router;