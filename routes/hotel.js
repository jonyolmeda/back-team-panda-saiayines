let  router = require('express').Router()
let {create,read,update,destroy} = require('../controllers/hotel')
const schema = require('../schemas/hotel')
const validator = require('../middlewares/validator')

router.post('/',validator(schema),create)
router.get('/',read)
router.patch('/:id', update)
router.delete('/:id', destroy)

module.exports = router