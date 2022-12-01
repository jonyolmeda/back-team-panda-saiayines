let  router = require('express').Router()
let {create, updateReaction, read} = require('../controllers/reaction')
const schema = require('../schemas/reaction')
const validator = require('../middlewares/validator')
const passport = require ('../config/passport')


router.post('/',passport.authenticate("jwt", { session: false }), validator(schema), create)
router.put('/',passport.authenticate("jwt", { session: false }), updateReaction)
router.get('/',read)

module.exports = router