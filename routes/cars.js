const router = require('express').Router()
const carsCtrl = require('../controllers/cars.js')

router.get('/', carsCtrl.index)
router.post('/', carsCtrl.create)
router.get('/:id', carsCtrl.show)

module.exports = router