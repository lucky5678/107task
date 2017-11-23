'use strict';

function collect_max_number(collection) {
  //在这里写入代码
  return Math.max.apply(null,collection);   //将数组传入math方法中直接返回最大值
}

module.exports = collect_max_number;
