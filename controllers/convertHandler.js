function ConvertHandler() {
  
  this.getNum = function(input) {
    let result;
    // let regex = /(\d+(\.\d+)?|\d+(\.\d+)?\/\d+(\.\d+)?)(\w+)/i;
    let regex = /[a-z]/i; //finds the first letter (we can separate the number from the unit having this index)
    //find the index of the number to slice that part
    let index = regex.exec(input).index;
    if(index === 0){
      result = 1;
    } else {
      let number = input.slice(0, index);
      if(number.indexOf('/') == -1){
        isNaN(Number(number)) ? result = 'invalid number' : result = Number(number);
      } else{
        let arr = number.split('/');
        if( arr.length > 2 ){
          result = 'invalid number'
        } else{
          if(isNaN(Number(arr[0])) | isNaN(Number(arr[1]))){
            result = 'invalid number'
          } else {
            result = Number(arr[0]) / Number(arr[1]);
          }
          
        }
      }
    }
    return result;  
  };
  
  this.getUnit = function(input) {
    let result;
    // let regex = /(\d+(\.\d+)?|\d+(\.\d+)?\/\d+(\.\d+)?)(\w+)/i;
    let regex = /[a-z]/i;
    let index = regex.exec(input).index;
    let unit = input.slice(index, input.length);
    return result = unit;
  }
  
  this.getReturnUnit = function(initUnit) {
    let result;
    switch(initUnit.toLowerCase()){
      case 'km':
        result = 'mi';
        break;
      case 'mi':
        result = 'km';
        break;
      case 'kg':
        result = 'lbs';
        break;
      case 'lbs':
        result = 'kg';
        break;
      case 'l':
        result = 'gal';
        break;
      case 'gal':
        result = 'L';
        break;
      default:
        result = 'invalid unit';
        break;
    }
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    let unitObj = {
      km: 'kilometers',
      mi: 'miles',
      l: 'liters',
      gal: 'galons',
      lbs: 'pounds',
      kg: 'kilograms'
    }
    // unitObj[unit.toLowerCase()] ? result = unitObj[unit.toLowerCase()] : result = 'invalid unit';
    return result = unitObj[unit.toLowerCase()];
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    switch(initUnit.toLowerCase()){
      case 'km':
        result = initNum / miToKm;
        break;
      case 'mi':
        result = initNum * miToKm;
        break;
      case 'kg':
        result = initNum / lbsToKg;
        break;
      case 'lbs':
        result =  initNum * lbsToKg;
        break;
      case 'l':
        result = initNum / galToL;
        break;
      case 'gal':
        result = initNum * galToL;
        break;
      default:
        break;
    }
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    if(initNum === 'invalid number' && returnUnit === 'invalid unit'){
      return 'invalid number and unit'
    }
    if(initNum === 'invalid number') return initNum;
    if(returnUnit === 'invalid unit') return returnUnit;
    
    result = initNum + ' ' + this.spellOutUnit(initUnit) + ' converts to ' + returnNum + ' ' + this.spellOutUnit(returnUnit); 

    return result;
  };
  
}

module.exports = ConvertHandler;
