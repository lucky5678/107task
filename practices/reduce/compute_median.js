'use strict';

function compute_median(collection) {
  //在这里写入代码
  if (collection.length < 5) {
    for (var i = 0; i < collection.length; i++) {

      return collection[collection.length / 2 - 1] / 2 + collection[collection.length / 2] / 2;
    }
  }
  else if (collection.length > 5) {
    collection.sort(number);
    return (collection[collection.length / 2 - 1] / 2 + collection[collection.length / 2] / 2);
  }
  else return collection[collection.length % 2 + 1];


}
function number(a, b) {
  return a - b;
}
module.exports = compute_median;


