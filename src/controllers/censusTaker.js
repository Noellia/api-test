// eslint-disable-next-line
const fs = require('fs');
const path = require('path');
const find = require('lodash/find');
const filter = require('lodash/filter');
const toNumber = require('lodash/toNumber');
const replace = require('lodash/replace');

class CensusTakerController {
    static fetch(req, res, next) {
        try {
            const censusTaker = require('../data/censusTaker.json');
            let response = censusTaker;

            /*const {field, min, max} = req.query;

            //Si se pasa el parametro de filtro entonces...
            if (field && min && max) {
                // Hagan algo para filtrar datos

                const fieldStr = field.toString();
                const minNumber = toNumber(min);
                const maxNumber = toNumber(max);

                if(fieldStr === 'price'){
                    response = filter(cars, ({price}) => {
                        //  destructuring
                        
                        const priceWorked = toNumber(replace(price, '$', ''));
        
                        return priceWorked >= minNumber && priceWorked <= maxNumber;
                        
                        
                    });
                }

            }
            else{
                response = cars;
            }*/

            res.send(response);
        } catch(err) {
            next(err);
        }
    }

    static save(req, res, next){
        
        try {
            const {
                id,
                name,
                lastname,
                birthday,
                gender,
                email,
                status
            } = req.body;

            let newCensusTaker = {
                id,
                name,
                lastname,
                birthday,
                gender,
                email,
                status
            };

            const jsonPath = path.resolve(__dirname,'../data/censusTaker.json')
            const data = require('../data/censusTaker.json');
            
            //let censusTakerList = JSON.parse(data);
           
            data.push(newCensusTaker);

            let response = fs.writeFileSync(jsonPath,JSON.stringify(data, null, 2),'utf-8');

            res.send(response);
        } catch (err) {
            next(err);
            
        }
    }
}

module.exports = CensusTakerController;
