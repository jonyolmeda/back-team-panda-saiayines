let  router = require('express').Router()
let schema = require ('../schemas/shows')
const validator = require('../middlewares/validator')
let {create, read, update, destroy} = require('../controllers/show')

router.post('/',validator(schema), create)
router.get('/', read)
router.patch('/:id', update)
router.delete('/:id', destroy)




module.exports = router