let  router = require('express').Router()
let user = require('./user')
let cities = require('./city')

router.use('/user', user)
router.use('/cities', cities)



module.exports = router
