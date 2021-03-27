const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  // remove line with error and write your code here
  let cats = 0;
  backyard.forEach((row) => {
    row.forEach((elem) => {
      if (elem === "^^") {
        cats++;
      }
    });
  });
  return cats;
};
