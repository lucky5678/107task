'use strict';

function double_to_one(collection) {
  //在这里写入代码
  var arr = [].concat.apply([], collection);
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) == -1) {    //如果在result中不存在arr[i]，就push这个元素。
      result.push(arr[i]);
    }
  }

  return result;
}

module.exports = double_to_one;
