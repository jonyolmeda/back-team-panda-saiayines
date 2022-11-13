let  router = require('express').Router()
let {create} = require('../controllers/user')

router.post('/create',create)





module.exports = router
