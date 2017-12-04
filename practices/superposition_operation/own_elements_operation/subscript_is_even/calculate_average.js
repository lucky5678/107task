'use strict';
var calculate_average = function (collection) {
  var result = 0;
  var sum = 0;
  var num = 0;

  for (var i = 0; i < collection.length; i++) {
    if (collection[i] % 2 === 0) {
      sum += collection[i];
      num++;
    }

    result = sum / num;
  }

  return result;
};
module.exports = calculate_average;
