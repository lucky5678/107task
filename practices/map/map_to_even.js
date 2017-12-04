'use strict';
function map_to_even(collection) {
  var result = [];

  var arr = collection.map(function (p1) {
    result.push(p1 * 2);
  });

  return result;
}
module.exports = map_to_even;
