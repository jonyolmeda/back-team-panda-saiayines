let  router = require('express').Router()
let {create, read, update, destroy} = require('../controllers/city')
const schema = require('../schemas/city')
const validator = require('../middlewares/validator')
const verifyAll = require('../middlewares/verifyAll')
const model = require('../models/City')
const passport = require ('../config/passport')
const { cityFound, notCity } = require("../config/responses");
const schemaCity = require('../schemas/cityEdit')


router.post('/',passport.authenticate("jwt", { session: false }), validator(schema), create)
router.get('/', read)
router.put('/:id',passport.authenticate("jwt", { session: false }),validator(schemaCity), update)
router.delete('/:id',passport.authenticate("jwt", { session: false }),verifyAll(model,cityFound, notCity), destroy)




module.exports = router