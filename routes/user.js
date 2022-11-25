let  router = require('express').Router()
let {register, verify} = require('../controllers/user')
const validator = require('../middlewares/validator')
const accountExists = require('../middlewares/accountExistsSignUp')
const schema = require('../schemas/user')


router.post('/',validator(schema), accountExists,register)
router.get('/verify/:code',verify)






module.exports = router
