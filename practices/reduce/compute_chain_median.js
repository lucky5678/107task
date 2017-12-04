'use strict';

function compute_chain_median(collection) {
  //在这里写入代码
  collection = collection.split('->').sort(compareNumber);  // sort为冒泡排序，

  if (collection.length % 2 === 0) {
    return collection[collection.length / 2 - 1] / 2 + collection[collection.length / 2] / 2;
  }

  return collection[collection.length / 2 + 1];


}
function compareNumber(a, b) {
  return a - b;    //升序
}
module.exports = compute_chain_median;
