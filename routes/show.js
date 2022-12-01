let  router = require('express').Router()
let schema = require ('../schemas/shows')
const validator = require('../middlewares/validator')
const passport = require ('../config/passport')
const model = require('../models/Show')
const verifyAll = require('../middlewares/verifyAll')
let {create, read, update, destroy} = require('../controllers/show')
const { showFound, notShow } = require("../config/responses");
const schemaShows = require('../schemas/showsEdit')

router.post('/',passport.authenticate("jwt", { session: false }), validator(schema), create)
router.get('/', read)
router.patch('/:id',passport.authenticate("jwt", { session: false }),validator(schemaShows), update)
router.delete('/:id',passport.authenticate("jwt", { session: false }),verifyAll(model,showFound,notShow), destroy)




module.exports = router