function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  var result = [];

  for (var i = 0; i < collection_a.length; i++) {
    if (isExist(collection_a[i].key, object_b.value)) {
      result.push(collection_a[i].key);
    }
  }

  return result;
}
function isExist(element, object) {
  for (var i = 0; i < object.length; i++) {
    if (object[i] === element) {
      return object[i];
    }
  }
}

module.exports = collect_same_elements;
