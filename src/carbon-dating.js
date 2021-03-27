const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  // remove line with error and write your code here
  if (
    /[0-9]/.test(sampleActivity) &&
    sampleActivity > 0 &&
    sampleActivity < MODERN_ACTIVITY &&
    typeof sampleActivity == "string"
  ) {
    const nLog2 = 0.693;

    return Math.ceil(
      Math.log(MODERN_ACTIVITY / +sampleActivity) / (nLog2 / HALF_LIFE_PERIOD)
    );
  } else return false;
};
