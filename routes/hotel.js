let  router = require('express').Router()
let {create,read,update,destroy} = require('../controllers/hotel')
const schema = require('../schemas/hotel')
const validator = require('../middlewares/validator')
const modelHotel = require('../models/Hotel')
const verifyHotel = require('../middlewares/verifyHotel')

router.post('/',validator(schema),create)
router.get('/',read)
router.patch('/:id',passport.authenticate("jwt", { session: false }),verifyHotel(modelHotel), update)
router.delete('/:id',passport.authenticate("jwt", { session: false }),verifyHotel(modelHotel), destroy)

module.exports = router