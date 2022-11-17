let  router = require('express').Router()
let { read } = require('../controllers/cityId')

router.get('/:id',read)

module.exports = router