'use strict';

function double_to_one(collection) {

  //在这里写入代码
  return [].concat.apply([],collection);//apply将一个对象原型上的方法应用到另一个对象上；[]是对象
}

module.exports = double_to_one;
