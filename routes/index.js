let  router = require('express').Router()
let user = require('./user')
let cities = require('./city')
let hotels = require('./hotel') 

router.use('/user', user)
router.use('/cities', cities)
router.use('/hotels', hotels)



module.exports = router
