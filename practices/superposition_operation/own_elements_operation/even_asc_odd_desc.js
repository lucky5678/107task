'use strict';
var even_asc_odd_desc = function (collection) {
  var result = [];
  var result1 = [];

  for (var i = 0; i < collection.length; i++) {
    if (collection[i] % 2 === 0) {
      result.push(collection[i]);
    }
    else
      result1.push(collection[i]);
  }

  result.sort(number);
  result1.sort(num);

  return result.concat(result1);
};
function number(a, b) {
  return a - b;
}
function num(a, b) {
  return b - a;
}
module.exports = even_asc_odd_desc;
