// Add the database here
const db = require('better-sqlite3')('./models/cars.db', { verbose: console.log })
const fs = require('fs')
db.pragma('journal_mode = WAL')

exports.initDB = async () => {
    const script = fs.readFileSync('./models/init.sql').toString()
    db.exec(script)
};

exports.getCars = async () => {
    const statment = db.prepare("SELECT * FROM cars") 
    const cars = await statment.all();
    return cars;
}

exports.getCarById = async (id) => {
    const statment = db.prepare("SELECT * FROM cars WHERE id = ?")
    const car = await statment.get(id)
    return car
}