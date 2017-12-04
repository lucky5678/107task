'use strict';

function median_to_letter(collection) {
  var date = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var result = [];

  for (var i = 0; i < collection.length; i++) {
    result.push(Math.ceil(collection[collection.length / 2 - 1] / 2 + collection[collection.length / 2] / 2));

    var num = parseInt(result[i] / 26);
    if (result[i] > 0) {
      return date[num] + date[result[i] % 26];
    }
    else
      return date[result[i]];
  }
}

module.exports = median_to_letter;
