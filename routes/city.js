let  router = require('express').Router()
let {create, read, update} = require('../controllers/city')

router.post('/create', create)
router.get('/read', read)
router.put('/update/:id', update)




module.exports = router