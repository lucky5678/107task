'use strict';
var single_element = function (collection) {
  var array = [];
  var result = [];

  if (collection.length > 6) {
    for (var i = 0; i < collection.length; i++) {
      if (collection[2 * i - 1])
        array.push(collection[2 * i - 1]);
    }
    for (var t = 0; t < array.length; t++) {
      var count = 0;

      for (var j = 0; j < array.length; j++) {
        if (array[t] === array[j]) {
          count++;
        }
      }
      if (count !== 2) {
        result.push(array[t])
      }
    }
    return result;
  }
  else
    for (var i = 0; i < collection.length; i++) {
      if (collection[2 * i - 1]) {
        result.push(collection[2 * i - 1])
      }
      return array;
      if (array[i].indexOf(array[i]))
        result.push(array[i]);

    }
  return result;
};
module.exports = single_element;
