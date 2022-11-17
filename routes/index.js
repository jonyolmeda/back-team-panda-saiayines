let  router = require('express').Router()
let user = require('./user')
let cities = require('./city')
let hotels = require('./hotel')
let itineraries = require('./itinerary')
let show = require('./show')
let hotelId = require('./hotelId')
let cityId = require('./cityId')

router.use('/user', user)
router.use('/cities', cities)
router.use('/hotels', hotels)
router.use('/hotel', hotelId)
router.use('/itineraries', itineraries)
router.use('/shows', show)
router.use('/city', cityId)



module.exports = router
