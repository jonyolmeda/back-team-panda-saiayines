let  router = require('express').Router()
let schema = require ('../schemas/shows')
const validator = require('../middlewares/validator')
const passport = require ('../config/passport')
const model = require('../models/Show')
let {create, read, update, destroy} = require('../controllers/show')

router.post('/',validator(schema), create)
router.get('/', read)
router.patch('/:id',passport.authenticate("jwt", { session: false }), update)
router.delete('/:id',passport.authenticate("jwt", { session: false }), destroy)




module.exports = router