let  router = require('express').Router()
let {create, read, update, destroy} = require('../controllers/itinerary')
const schema = require('../schemas/itinerary')
const validator = require('../middlewares/validator')
const passport = require ('../config/passport')
const modelItinerary = require('../models/Itinerary')
const verifyAll = require('../middlewares/verifyAll')
const { itineraryFound, notItinerary } = require("../config/responses");
const schemaItinerary = require('../schemas/itinerariesEdit')

router.post('/',passport.authenticate("jwt", { session: false }), validator(schema), create)
router.get('/', read)
router.put('/:id',passport.authenticate("jwt", { session: false }),validator(schemaItinerary), update)
router.delete('/:id',passport.authenticate("jwt", { session: false }),verifyAll(modelItinerary, itineraryFound, notItinerary), destroy)




module.exports = router