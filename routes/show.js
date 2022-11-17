let  router = require('express').Router()
let {create, read, update, destroy} = require('../controllers/show')

router.post('/', create)
router.get('/', read)
router.patch('/:id', update)
router.delete('/:id', destroy)




module.exports = router