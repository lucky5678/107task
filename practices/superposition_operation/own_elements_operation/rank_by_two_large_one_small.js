'use strict';
function rank_by_two_large_one_small(collection) {
  //这里写代码。。。
  var littleIndex = 0;
  var littleNumber = 0;
  var littleElement = [];
  var upperElement = [];
  var result = [];
  collection.sort(num);

  for (var i = 0; i < collection.length; ++i) {
    if (i === littleIndex && littleElement.length < parseInt(collection.length / 3)) {
      littleElement.push(collection[i]);
      littleIndex += 3;
    } else {
      upperElement.push(collection[i]);
    }
  }
  littleIndex = 2;
  for (var i = 0; i < upperElement.length; ++i) {
    if (i === littleIndex) {
      result.push(littleElement[littleNumber]);
      littleIndex += 2;
      ++littleNumber;
    }
    result.push(upperElement[i]);
  }

  return result;
}
function num(a, b) {
  return a - b;

}
module.exports = rank_by_two_large_one_small;
