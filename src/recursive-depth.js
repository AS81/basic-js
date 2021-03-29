const CustomError = require("../extensions/custom-error");

let maxDeep = 0; 
module.exports = class DepthCalculator {
  calculateDepth(arr, currDeep = 1) {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    arr.forEach((element) => {
      if(Array.isArray(element)){
        maxDeep = this.calculateDepth(element, currDeep + 1);
     }
    })
    if (currDeep > maxDeep) {maxDeep = currDeep}
    let rez = maxDeep;
    maxDeep = 0;
    return rez;
  }
};
