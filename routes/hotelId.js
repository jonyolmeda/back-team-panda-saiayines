let  router = require('express').Router()
let { read } = require('../controllers/hotelId')

router.get('/:id',read)


module.exports = router