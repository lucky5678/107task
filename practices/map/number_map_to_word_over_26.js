'use strict';
var number_map_to_word_over_26 = function (collection) {
  var arr = ['','a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'y', 'v', 'w', 'x', 'y', 'z'];
  var result = [];

  for (var i = 0; i < collection.length; i++) {
    var num = parseInt(collection[i] / 26);
    if (num > 0) {
      result.push(arr[num] +arr[collection[i] % 26]);
    }
    else
      result.push(arr[collection[i]]);
  }
  return result;
};

module.exports = number_map_to_word_over_26;
