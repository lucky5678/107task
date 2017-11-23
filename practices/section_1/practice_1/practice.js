function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  var result = [];

  for (var i = 0; i < collection_a.length; i++) {
    if (isExist(collection_a[i], collection_b)) {
      result.push(collection_a[i]);
    }
  }

  return result;
}
function isExist(element, collection_b) {
  for (var i = 0; i < collection_b.length; i++) {
    if (collection_b[i] === element) {
      return collection_b[i];
    }
  }
}

module.exports = collect_same_elements;
