function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  for (var i = 0; i < collection_a.length; i++) {
    if (isExist(collection_a[i].key, object_b.value)) {
      collection_a[i].count -= 1;
    }
  }

  return collection_a;
}
function isExist(element, array) {
  for (var i = 0; i < array.length; i++) {
    if (element == array[i])
      return true;
  }
}

module.exports = create_updated_collection;
