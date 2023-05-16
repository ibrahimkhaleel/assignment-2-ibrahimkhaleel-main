const express = require('express')
const app = express()
const port = 3000
const baseRouter = require('./routes/public')

app.set('views', './views')
app.set('view engine', 'ejs')
app.use('/', baseRouter)
app.use(express.static('./static'))

const adminRoute = require('./routes/admin')
const carsRoute = require('./routes/cars')
app.use('/admin', adminRoute)
app.use('/cars', carsRoute)


app.all('*', (req, res) => {
    res.render('404', {route: req.path, method: req.method})
})

const errorHandler = (err, req, res, next) => {
    console.error(err.stack)
    res.status(500).render('index', {title: 'Internal Error', body: err.message})
}

app.use(errorHandler)

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})