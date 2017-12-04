'use strict';

function get_letter_interval(number_a, number_b) {
  // 在这里写入代码
  var basicLetters = getBasicLetter();

  if (number_a > number_b)
    return basicLetters.splice(number_b - 1, number_a - number_b + 1).reverse();
  else if (number_a < number_b)
    return basicLetters.splice(number_a - 1, number_b - number_a + 1);

  return [basicLetters[number_a - 1]];
}

function getBasicLetter() {
  var basicLetter = [];
  for (var i = 97; i < 97 + 26; ++i)
    basicLetter.push(String.fromCharCode(i));

  return basicLetter;


}


module.exports = get_letter_interval;
