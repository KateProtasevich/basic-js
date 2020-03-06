const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity != "string" || arguments.length == 0) {
    return false;
  }
  
  if (sampleActivity.match(/(\d+\.\d+)\.\d+/)) {
    let number = sampleActivity.match(/(\d+\.\d+)\.\d+/);
    sampleActivity = number[1];
  }

  if (isNaN(sampleActivity) || sampleActivity<=0 || sampleActivity>15) {
    return false;
  }
  let k = 0.693/HALF_LIFE_PERIOD;
  return Math.ceil(Math.log(MODERN_ACTIVITY/sampleActivity)/k);

};
