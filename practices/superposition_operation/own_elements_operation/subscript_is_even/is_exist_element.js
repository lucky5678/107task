'use strict';
var is_exist_element = function (collection, element) {
  var result = [];
  var count=0;

  for (var i = 0; i < collection.length; i++) {
    if (i % 2 === 0) {
      result.push(collection[i]);
    }
  }

  for (var j = 0; j < result.length; j++) {
    if (result[j] === element) {
    count++;
    }
  }
  if(count===0) return false;
  else return true;

};
module.exports = is_exist_element;
