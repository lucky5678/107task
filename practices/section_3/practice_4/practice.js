function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var result = [];

  for (var i = 0; i < collection_a.length; i++) {
    result = Exist(collection_a[i], result);
  }
  filter(result,object_b);

  return result;
};
function Exist(element, result) {
  var keyCount = element.split("-");
  var key = keyCount.length === 1 ? element : keyCount[0];
  var count = keyCount.length === 1 ? 1 : keyCount[1];
  for (var i = 0; i < result.length; i++) {
    if (result[i].key === key) {
      result[i].count += parseInt(count);

      return result;
    }
  }
  result.push({"key": key, "count": parseInt(count)});
  return result;
}
function isExist(element, result) {
  for (var i = 0; i < result.length; i++) {
    if (element === result[i])
      return true;
  }
}
function filter(result, objectB) {
  for (var i = 0; i < result.length; i++) {
    if (isExist(result[i].key, objectB.value)) {
      result[i].count -= parseInt((result[i].count / 3));
    }
  }
}

module.exports = create_updated_collection;
