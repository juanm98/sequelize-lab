const router = require('express').Router()
const carsCtrl = require('../controllers/cars.js')

router.get('/', carsCtrl.index)
router.get('/:id', carsCtrl.show)
router.post('/', carsCtrl.create)
router.put('/:id', carsCtrl.update)

module.exports = router