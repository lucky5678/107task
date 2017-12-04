'use strict';

function choose_no_common_elements(collection_a, collection_b) {
  //在这里写入代码
  var result = [];

  for (var i = 0; i < collection_a.length; i++) {
    if (!isExist(collection_a[i], collection_b))
      result.push(collection_a[i]);
  }

  return result;
}

function isExist(elementA, collection_b) {
  for (var i=0;i<collection_b.length;i++) {
    if (collection_b[i] === elementA)
      return true;
  }
}
module.exports = choose_no_common_elements;
