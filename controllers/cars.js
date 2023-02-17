const { Car } = require("../models")

const create = async (req, res) => {
  try {
    const car = await Car.create(req.body)
    res.status(200).json(car)
  } catch (error) {
    res.status(500).json(error)
  }
}

const index = async (req, res) => {
  try {
    const cats = await Car.findAll()
    res.status(200).json(cats)
  } catch (error) {
    res.status(500).json(error)
  }
}

const show = async (req, res) => {
  try {
    const car = await Car.findByPk(req.params.id)
    res.status(200).json(car)
  } catch (error) {
    res.status(500).json(error)
  }
}

const update = async (req, res) => {
  try {
    const car = await Car.findByPk(req.params.id)
    car.set(req.body)
    await car.save()
    res.status(200).json(car)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {
  create,
  index,
  show,
  update
}