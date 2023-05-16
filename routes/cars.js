const express = require('express')
const router = express.Router()
const db = require('../models/database')

router.get('/', async (req, res) => {
    const cars = await db.getCars()
    res.render('carsList', {title: "ALL Cars", cars})
})
router.get('/car/:id', async (req, res) => {
    const id = req.params.id
    const car = await db.getCarById(id)
    res.render('singleCar', {title: car.Name, car})
})

module.exports = router