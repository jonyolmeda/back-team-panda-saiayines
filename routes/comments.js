let  router = require('express').Router()
let { create , read,update,  destroy} = require('../controllers/comments')
const schema = require('../schemas/comments');
const validator = require('../middlewares/validator')
const passport = require ('../config/passport')

router.post('/',passport.authenticate("jwt", { session: false }), validator(schema),create)
router.get('/',read)
router.put('/:id',passport.authenticate("jwt", { session: false }), validator(schema),update)
router.delete('/:id',passport.authenticate("jwt", { session: false }), destroy)


module.exports = router

