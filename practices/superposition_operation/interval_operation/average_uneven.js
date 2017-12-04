'use strict';

function average_uneven(collection) {
  //在这里写入代码
  var result = 0;
  var num = 0;

  for (var i = 0; i < collection.length; i++) {
    if (collection[i] % 2 !== 0) {
      num++;
      result += collection[i];
    }
  }
  return result / num;
}

module.exports = average_uneven;
