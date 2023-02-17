const { Car , Fuel } = require("../models")

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
    const cars = await Car.findAll()
    res.status(200).json(cars)
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

const deleteCar = async (req, res) => {
  try {
    const car = await Car.findByPk(req.params.id)
    await car.destroy()
    res.status(200).json(car)
  } catch (error) {
    res.status(500).json(error)
  }
}

const addFuel = async (req, res) => {
  try {
    req.body.carId = req.params.id
    const fuel = await Fuel.create(req.body)
    res.status(200).json(fuel)
  } catch (error) {
    console.log(error);
    res.status(500).json(error)
  }
}


module.exports = {
  create,
  index,
  show,
  update,
  delete: deleteCar,
  addFuel,
}