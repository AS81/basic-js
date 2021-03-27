const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  // remove line with error and write your code here

  if (Array.isArray(members)) {
    let rez = [];
    members.forEach((name) => {
      if (typeof name === "string" && /[A-Za-z][\s]?/.test(name)) {
        rez.push(name.trimStart()[0].toUpperCase());
      }
    });
    return rez.sort().join("");
  } else return false;
};
