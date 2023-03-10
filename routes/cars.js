const router = require('express').Router()
const carsCtrl = require('../controllers/cars.js')

router.get('/', carsCtrl.index)
router.get('/:id', carsCtrl.show)
router.post('/', carsCtrl.create)
router.post('/:id/fuels', carsCtrl.addFuel)
router.put('/:id', carsCtrl.update)
router.delete('/:id', carsCtrl.delete)

module.exports = router