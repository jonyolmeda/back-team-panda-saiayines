let  router = require('express').Router()
let {create,update} = require('../controllers/hotel')

router.post('/create',create)
router.patch('/update/:id', update)

module.exports = router