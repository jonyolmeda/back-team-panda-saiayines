let  router = require('express').Router()
let {create, read, update, destroy} = require('../controllers/itinerary')
const schema = require('../schemas/itinerary')
const validator = require('../middlewares/validator')

router.post('/',validator(schema), create)
router.get('/', read)
router.put('/:id', update)
router.delete('/:id', destroy)




module.exports = router