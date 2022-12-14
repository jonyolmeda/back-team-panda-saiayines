let router = require('express').Router()
let user = require('./user')
let cities = require('./city')
let hotels = require('./hotel')
let itineraries = require('./itinerary')
let show = require('./show')
let hotelId = require('./hotelId')
let cityId = require('./cityId')
let hotelsByUser = require('./hotelsByUser')
let citiesByUser = require('./citiesByUser')
let itinerariesByUser = require('./itinerariesByUser')
let showsByUser = require('./showsByUser')
let reaction = require('./reaction')
let comments = require('./comments')

router.use('/auth', user)
router.use('/cities', cities)
router.use('/hotels', hotels)
router.use('/hotel', hotelId)
router.use('/itineraries', itineraries)
router.use('/shows', show)
router.use('/city', cityId)
router.use('/hotelsBy', hotelsByUser)
router.use('/citiesBy', citiesByUser)
router.use('/itinerariesBy', itinerariesByUser)
router.use('/showsBy', showsByUser)
router.use('/reactions', reaction)
router.use('/comments', comments)


module.exports = router


