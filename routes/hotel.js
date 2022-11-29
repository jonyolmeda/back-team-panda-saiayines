let  router = require('express').Router()
let {create,read,update,destroy} = require('../controllers/hotel')
const schema = require('../schemas/hotel')
const validator = require('../middlewares/validator')
const modelHotel = require('../models/Hotel')
const verifyAll = require('../middlewares/verifyAll')
const passport = require ('../config/passport')
const { hotelFound, notHotel } = require("../config/responses");

router.post('/',passport.authenticate("jwt", { session: false }), validator(schema), create)
router.get('/',read)
router.patch('/:id',passport.authenticate("jwt", { session: false }),verifyAll(modelHotel,hotelFound, notHotel), update)
router.delete('/:id',passport.authenticate("jwt", { session: false }),verifyAll(modelHotel,hotelFound, notHotel), destroy)

module.exports = router