let  router = require('express').Router()
let user = require('./user')
let cities = require('./city')
let hotels = require('./hotel')
let itineraries = require('./itinerary')

router.use('/user', user)
router.use('/cities', cities)
router.use('/hotels', hotels)
router.use('/itineraries', itineraries)




module.exports = router
