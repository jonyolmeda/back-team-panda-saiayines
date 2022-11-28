let  router = require('express').Router()
let schema = require ('../schemas/shows')
const validator = require('../middlewares/validator')
const passport = require ('../config/passport')
const model = require('../models/Show')
const verifyShow = require('../middlewares/verifyShow')
let {create, read, update, destroy} = require('../controllers/show')

router.post('/',validator(schema), create)
router.get('/', read)
router.patch('/:id',passport.authenticate("jwt", { session: false }),verifyShow(model), update)
router.delete('/:id',passport.authenticate("jwt", { session: false }),verifyShow(model), destroy)




module.exports = router