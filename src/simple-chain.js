const CustomError = require("../extensions/custom-error");

const chainMaker = {
    arr: [],

  getLength() {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    return this.arr.length;
  },
  addLink(value = '( )') {
    this.arr.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if ((+position === position) && Number.isInteger(position)
    && (this.arr[position] != undefined)) {  
      this.arr.splice(position-1,1);
      return this;
    } else {
      this.arr = [];
      throw new Error('Please, give a correct number for removeLink() !')
    }
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    this.strFinish = this.arr.join('~~');
    this.arr = [];
    return this.strFinish;
  }
};

module.exports = chainMaker;
