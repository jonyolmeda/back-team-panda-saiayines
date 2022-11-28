let  router = require('express').Router()
let {create, read, update, destroy} = require('../controllers/city')
const schema = require('../schemas/city')
const validator = require('../middlewares/validator')
const verifyCity = require('../middlewares/verifyCity')
const model = require('../models/City')
const passport = require ('../config/passport')


router.post('/',validator(schema), create)
router.get('/', read)
router.put('/:id',passport.authenticate("jwt", { session: false }),verifyCity(model), update)
router.delete('/:id',passport.authenticate("jwt", { session: false }),verifyCity(model), destroy)




module.exports = router