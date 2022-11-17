let  router = require('express').Router()
let {create, read, update, destroy} = require('../controllers/city')

router.post('/', create)
router.get('/', read)
router.put('/:id', update)
router.delete('/:id', destroy)




module.exports = router