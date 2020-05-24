//Object.keys()返回一个数组,返回对象属性的键名
const obj = {
  name: 'xjx',
  age: 18,
  sex: "男"
}

let a = Object.keys(obj)
console.log(a); //[ 'name', 'age' ]

//（2）处理数组和字符串，返回索引值
const ary = [2, 4, "我是字符串", 6, 7]
let b = Object.keys(ary)
console.log(b); //[ '0', '1', '2', '3', '4' ]

//二、Object.values()返回属性的键名的数组
//三。entries

let c = Object.entries(obj)
console.log(c); //[ [ 'name', 'xjx' ], [ 'age', 18 ], [ 'sex', '男' ] ]
let d = Object.entries(ary)
console.log(d); //数组索引跟和值

