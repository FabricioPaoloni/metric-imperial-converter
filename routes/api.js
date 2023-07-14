'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');


module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  app.route('/api/convert').get((req, res) => {
    // console.log(req.query);
    let initNum = convertHandler.getNum(req.query.input);
    // console.log(initNum);
    let initUnit = convertHandler.getUnit(req.query.input);
    // console.log(initUnit);
    let returnUnit = convertHandler.getReturnUnit(initUnit);
    // console.log(returnUnit);
    let returnNum = convertHandler.convert(initNum, initUnit);
    let string = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
    if(string === 'invalid number and unit' || string === 'invalid number' | string === 'invalid unit'){
      res.send(string)
    } else {
      res.json({
        initNum: initNum,
        initUnit: initUnit,
        returnNum: returnNum,
        returnUnit: returnUnit,
        string: string
      })
    }
  })

};
