let  router = require('express').Router()
let { read , destroy} = require('../controllers/hotelId')

router.get('/:id',read)
router.delete('/:id',destroy)


module.exports = router