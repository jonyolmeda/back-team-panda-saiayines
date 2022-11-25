let  router = require('express').Router()
let {create, read, update, destroy} = require('../controllers/city')
const schema = require('../schemas/city')
const validator = require('../middlewares/validator')

router.post('/',validator(schema), create)
router.get('/', read)
router.put('/:id', update)
router.delete('/:id', destroy)




module.exports = router