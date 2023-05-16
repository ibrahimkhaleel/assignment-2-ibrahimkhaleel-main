const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.render('index', {title: 'Database for Cars', body: 'Cars have controls for driving, parking, passenger comfort, and a variety of lights. Over the decades, additional features and controls have been added to vehicles, making them progressively more complex. These include rear-reversing cameras, air conditioning, navigation systems, and in-car entertainment. Most cars in use in the early 2020s are propelled by an internal combustion engine, fuelled by the combustion of fossil fuels. Electric cars, which were invented early in the history of the car, became commercially available in the 2000s and are predicted to cost less to buy than gasoline cars before 2025.he transition from fossil fuels to electric cars features prominently in most climate change mitigation scenarios,[7] such as Project Drawdowns 100 actionable solutions for climate change'})
})


module.exports = router