'use strict';

function get_union(collection_a, collection_b) {

  for (var i = 0; i < collection_b.length; i++) {
    if (isExist(collection_b[i], collection_a))
      collection_a.push(collection_b[i]);
  }

  return collection_a;
}
function isExist(element, collection) {
  for (var i = 0; i < collection.length; i++) {
    if (collection[i] === element)
      return false;
  }
  return true;
}


module.exports = get_union;

