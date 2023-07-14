const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
    
    //testing for getNum function
    assert.isTrue(typeof(convertHandler.getNum(1)) === 'number');
    assert.isTrue(typeof(convertHandler.getNum(1.5)) === 'number');
    assert.isTrue(typeof(convertHandler.getNum(1/3)) === 'number');
    assert.isTrue(typeof(convertHandler.getNum(1.5/2)) === 'number');
    assert.equal(convertHandler.getNum('1/3/2'), 'invalid number');
    assert.strictEqual(1, convertHandler.getNum());

    //testing getUnit function
    assert.equal(convertHandler.getUnit('kg'), 'kg');
    assert.equal(convertHandler.getUnit('lbs'), 'lbs');
    assert.equal(convertHandler.getUnit('gal'), 'gal');
    assert.equal(convertHandler.getUnit('L').toLowerCase(), 'l');
    assert.equal(convertHandler.getUnit('km'), 'km');
    assert.equal(convertHandler.getUnit('mi'), 'mi');
    assert.equal(convertHandler.getUnit('mil'), 'invalid unit');

    //testing spelledOut function
    assert.equal(convertHandler.spellOutUnit("kg"), "kilograms");
    assert.equal(convertHandler.spellOutUnit("lbs"), "pounds");
    assert.equal(convertHandler.spellOutUnit("gal"), "galons");
    assert.equal(convertHandler.spellOutUnit("L"), "liters");
    assert.equal(convertHandler.spellOutUnit("km"), "kilometers");
    assert.equal(convertHandler.spellOutUnit("mi"), "miles");

    //testing for return unit.
    assert.equal(convertHandler.getReturnUnit('kg'), 'lbs');
    assert.equal(convertHandler.getReturnUnit('lbs'), 'kg');
    assert.equal(convertHandler.getReturnUnit('gal'), 'L');
    assert.equal(convertHandler.getReturnUnit('L'), 'gal');
    assert.equal(convertHandler.getReturnUnit('km'), 'mi');
    assert.equal(convertHandler.getReturnUnit('mi'), 'km');
});