module.exports = function countCats(backyard) {

  return   backyard.reduce((acc, val) => acc.concat(val), []).filter(item => item === '^^').length;
};
