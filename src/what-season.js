const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  // remove line with error and write your code here
  if (
    Object.prototype.toString.call(date) === "[object Date]" &&
    date.getFullYear() >= 1970
  ) {
    let rez;
    switch (date.getMonth()) {
      case 11:
      case 0:
      case 1:
        rez = "winter";
        break;
      case 2:
      case 3:
      case 4:
        rez = "spring";
        break;
      case 5:
      case 6:
      case 7:
        rez = "summer";
        break;
      case 8:
      case 9:
      case 10:
        rez = "autumn";
        break;
      default:
        break;
    }
    return rez;
  } else {
    throw new CustomError("Not implemented");
  }
};
