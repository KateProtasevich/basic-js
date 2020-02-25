module.exports = function repeater(str, options) {
    let Str = String(str);
    let row = "";
    let addition = String(options.addition);
    if (addition === 'undefined') {
      addition = '';
    }
    let separator = options.separator;
    if (typeof separator === 'undefined') {
      separator = '+';
    }
    let additionSeparator = options.additionSeparator;
    if (typeof additionSeparator === 'undefined') {
      additionSeparator = '|';
    }
    let repeatTimes = options.repeatTimes;
    if (typeof repeatTimes === 'undefined') {
      repeatTimes = 1;
    }
    let additionRepeatTimes = options.additionRepeatTimes;
    if (typeof additionRepeatTimes === 'undefined') {
      additionRepeatTimes = 1;
    }
    let add_str = addition;
    for (let j = 1; j < additionRepeatTimes; j++) {
      add_str = add_str + additionSeparator + addition;
    }
    row = Str+add_str;
    for (let i = 1; i < repeatTimes; i++) {
    row = row + separator + Str+add_str;
}

    return row;
};
