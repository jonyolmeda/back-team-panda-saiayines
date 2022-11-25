let router = require('express').Router()

let { read } = require ('../controllers/itinerariesByUser')

router.get('/',read)

module.exports = router;