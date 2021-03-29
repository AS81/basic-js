const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let addition = options.addition != undefined ? ''+options.addition : '';
  if (options.addition === null) addition = ''+null;
  let repeatTimes= options.repeatTimes || 0;
  let separator = options.separator != undefined? options.separator: '+';
  let additionRepeatTimes= options.additionRepeatTimes || 0;
  let additionSeparator = options.additionSeparator != undefined? options.additionSeparator: '|';

additionRepeatTimes > 0 ? additionRepeatTimes === 1 ? strAdd = addition: 
strAdd = (addition+additionSeparator).repeat(additionRepeatTimes-1)+addition: strAdd = addition;

repeatTimes > 0 ? repeatTimes === 1 ? strMain = str+strAdd: 
strMain = (str+strAdd+separator).repeat(repeatTimes-1)+str+strAdd: strMain = str+strAdd;;

  return strMain;
};
  