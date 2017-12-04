'use strict';
var map_to_four_multiples_add_one = function (collection) {
  var result = [];

  var arr = collection.map(function (p1) {
    result.push(p1 * 4 + 1);
  });

  return result;
};

module.exports = map_to_four_multiples_add_one;
