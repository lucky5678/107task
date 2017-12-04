'use strict';
var even_group_calculate_average = function (collection) {
  var result = [0, 0, 0, 0, 0, 0];
  var isEven = [false, false, false];

  for (var i = 1; i < collection.length; i += 2) {
    if (collection[i] % 2 === 0) {
      isEven[2] = true;
      if (collection[i] < 10) {
        result[0] += collection[i];
        result[3] += 1;
        isEven[1] = true;
      } else if (collection[i] < 100 && collection[i] >= 10) {
        result[1] += collection[i];
        result[4] += 1;
        isEven[2] = true;
      } else if (collection[i] < 1000 && collection[i] >= 100) {
        result[5] += 1;
        result[2] += collection[i];
      }
    }
  }

  if (!isEven[2]) return [0];

  if (isEven[0] || isEven[1]) return [result[0] / result[3], result[1] / result[4], result[2] / result[5]];

  return [result[2] / result[5]];

};
module.exports = even_group_calculate_average;
