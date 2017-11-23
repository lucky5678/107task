'use strict';

function collect_all_even(collection_a) {
  var result = [];

  for(var i = 0; i < collection_a.length;++i) {
    if(collection_a[i]%2 === 0) {
     result.push(collection_a[i]);
    }
  }

  return result;
}

module.exports = collect_all_even;
