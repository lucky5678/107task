'use strict';

function calculate_elements_sum(collection, element) {
  //在这里写入代码
  var mid = collection.length / 2;

  for (var i = mid; mid < collection.length; i++) {
    if (collection[i] === element) {
      return i;
    }
  }
}

module.exports = calculate_elements_sum;
