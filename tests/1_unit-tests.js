const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){

    //testing for getNum function
    test('convertHandler should correctly read a whole number input.', () => {
        assert.isTrue(typeof(convertHandler.getNum(1)) === 'number');
    })
    test('convertHandler should correctly read a decimal number input.', () => {
        assert.isTrue(typeof(convertHandler.getNum(1.5)) === 'number');
    })
    test('convertHandler should correctly read a fractional input.', () => {
        assert.isTrue(typeof(convertHandler.getNum(1/3)) === 'number');
    })
    test('convertHandler should correctly read a fractional input with a decimal.', () => {
        assert.isTrue(typeof(convertHandler.getNum(1.5/2)) === 'number');
    })
    test('convertHandler should correctly return an error on a double-fraction (i.e. 3/2/3).', () => {
        assert.equal(convertHandler.getNum('1/3/2'), 'invalid number');
    })
    test('convertHandler should correctly default to a numerical input of 1 when no numerical input is provided.', () => {
        assert.strictEqual(1, convertHandler.getNum());
    })

    //testing getUnit function
    test('convertHandler should correctly read each valid input unit.', () => {
        assert.equal(convertHandler.getUnit('kg'), 'kg');
        assert.equal(convertHandler.getUnit('lbs'), 'lbs');
        assert.equal(convertHandler.getUnit('gal'), 'gal');
        assert.equal(convertHandler.getUnit('L').toLowerCase(), 'l');
        assert.equal(convertHandler.getUnit('km'), 'km');
        assert.equal(convertHandler.getUnit('mi'), 'mi');
    })
    test('convertHandler should correctly return an error for an invalid input unit.', () => {
        assert.equal(convertHandler.getUnit('mil'), 'invalid unit');
    })

    //testing for return unit.
    test('convertHandler should return the correct return unit for each valid input unit.', () => {
        assert.equal(convertHandler.getReturnUnit('kg'), 'lbs');
        assert.equal(convertHandler.getReturnUnit('lbs'), 'kg');
        assert.equal(convertHandler.getReturnUnit('gal'), 'L');
        assert.equal(convertHandler.getReturnUnit('L'), 'gal');
        assert.equal(convertHandler.getReturnUnit('km'), 'mi');
        assert.equal(convertHandler.getReturnUnit('mi'), 'km');
    })

    //testing spelledOut function
    test('convertHandler should correctly return the spelled-out string unit for each valid input unit.', () => {
        assert.equal(convertHandler.spellOutUnit("kg"), "kilograms");
        assert.equal(convertHandler.spellOutUnit("lbs"), "pounds");
        assert.equal(convertHandler.spellOutUnit("gal"), "gallons");
        assert.equal(convertHandler.spellOutUnit("L"), "liters");
        assert.equal(convertHandler.spellOutUnit("km"), "kilometers");
        assert.equal(convertHandler.spellOutUnit("mi"), "miles");    
    })

    //testing for return unit... again... 
    test('convertHandler should correctly convert gal to L.', () => {
        assert.equal(convertHandler.getReturnUnit('gal'), 'L');
    })
    test('convertHandler should correctly convert L to gal.', () => {
        assert.equal(convertHandler.getReturnUnit('L'), 'gal');
    })
    test('convertHandler should correctly convert mi to km', () => {
        assert.equal(convertHandler.getReturnUnit('mi'), 'km');
    })
    test('convertHandler should correctly convert km to mi.', () => {
        assert.equal(convertHandler.getReturnUnit('km'), 'mi');
    })
    test('convertHandler should correctly convert lbs to kg.', () => {
        assert.equal(convertHandler.getReturnUnit('lbs'), 'kg');
    })
    test('convertHandler should correctly convert kg to lbs.', () => {
        assert.equal(convertHandler.getReturnUnit('kg'), 'lbs');
    })

});