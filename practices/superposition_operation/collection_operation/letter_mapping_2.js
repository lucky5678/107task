'use strict';

function average_to_letter(collection) {

  //在这里写入代码
  var date = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var sum = 0;
  var average = 0;

  for (var i = 0; i < collection.length; i++) {
    sum += collection[i];
    average = Math.ceil(sum / collection.length);
  }

  return date[average];
}

module.exports = average_to_letter;

