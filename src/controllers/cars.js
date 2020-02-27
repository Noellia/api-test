// eslint-disable-next-line
const find = require('lodash/find');

class CarsController {
    static fetch(req, res, next) {
        try {
            const cars = require('../data/cars.json');

            if (req.query.filter) {
            // Hagan algo para filtrar datos
            }
            res.send(cars);
        } catch(err) {
            next(err);
        }
    }
}

module.exports = CarsController;
