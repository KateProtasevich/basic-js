
module.exports = function calculateHanoi1(disksNumber, turnsSpeed) {
   let hanoi = new Object();
   hanoi.turns = (Math.pow(2, disksNumber) - 1);
   hanoi.seconds = hanoi.turns /(turnsSpeed/3600);

  return hanoi;
};
