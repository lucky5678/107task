'use strict';
var calculate_median = function (collection) {
  var arr = [];

  if (collection.length <= 6) {
    for (var i = 0; i < collection.length; i++) {
      if (collection[i + 1] % 2 === 0) arr.push(collection[i + 1]);
    }
    return arr[arr.length % 2];

  }
  else {
    for (var i = 0; i < collection.length; i++) {
      if (collection[i + 1] % 2 === 0) arr.push(collection[i + 1]);
    }
    return arr[arr.length / 2] / 2 + arr[arr.length / 2 - 1] / 2;

  }

};
module.exports = calculate_median;
