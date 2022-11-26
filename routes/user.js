let  router = require('express').Router()
let {register, verify,entry,loginWithToken} = require('../controllers/user')
const validator = require('../middlewares/validator')
const accountExists = require('../middlewares/accountExistsSignUp')
const schema = require('../schemas/user')
const schemaSignIn = require ('../schemas/signIn')
const mustSignIn =  require ('../middlewares/mustSignIn')
const accountExistsSignIn = require('../middlewares/accountExistsSignIn')
const passport = require ('../config/passport')
const accountHasBeenVerified = require('../middlewares/accountHasBeenVerified')


router.post('/',validator(schema), accountExists,register)
router.get('/verify/:code',verify)
router.post('/signin',validator(schemaSignIn), accountExistsSignIn,accountHasBeenVerified ,entry)
router.post('/token', passport.authenticate("jwt", { session: false }), mustSignIn, loginWithToken);

module.exports = router

