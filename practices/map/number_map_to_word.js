'use strict';
var number_map_to_word = function (collection) {
  var arr = ['', 'a', 'b', 'c', 'd', 'e'];
  var result = [];

  for (var i = 0; i < collection.length; i++) {
    result.push(arr[collection[i]]);
  }

  return result;
};

module.exports = number_map_to_word;
