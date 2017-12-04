'use strict';
var map_to_three_multiples = function (collections) {
  var result = [];

  var arr = collections.map(function (p1) {
    result.push(p1 * 3);
  });

  return result;
};

module.exports = map_to_three_multiples;
