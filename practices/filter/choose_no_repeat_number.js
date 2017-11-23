'use strict';

function choose_no_repeat_number(collection) {

  //在这里写入代码
  var result = [];

  for (var i = 0; i < collection.length; i++) {
    if (!judge(collection[i], result)) {
      result.push(collection[i])
    }
  }
  return result;
}
function judge(element, array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === element) {
      return true;
    }
  }
}

module.exports = choose_no_repeat_number;
