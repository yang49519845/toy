const obj = {
  name: "张三", // string
  age: 16, // number
  adult: false, // boolean
  stature: undefined, // undefined
  level: null, // null
  like: ["football", "basketball"], // Array
  friends: {
    // Object
    lisa: {
      age: 18,
      sex: "girl",
    },
    jay: {
      age: 20,
      sex: "boy",
    },
  },
  look: function (params) {
    // function
    console.log(params);
  },
  map: new Map(), // Map
  today: new Date("2020-11-30 10:38:00"), // Date
};

/**
 * 浅拷贝
 * 对数组或者对象内部的值进行复制并引用。
 * 对原始数组更改不会影响复制的数组，对复制了的数组引用进行更改，则会影响原始数组。
 *
 * @param {*} obj
 * @return {*}
 */
function shallowCopy(obj) {
  return Object.assign({}, obj);
}

/**
 * 针对 Date， Map 等属性无法拷贝
 *
 * @param {*} obj
 * @return {*}
 */
function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}

// var clone = shallowCopy (obj);
// var clone = deepCopy(obj)
// clone.name = '张三/clone'
// clone.age = 18
// clone.adult = true
// clone.stature = ''
// clone.level = ''
// clone.like.push('rap')
// clone.friends.lisa.age = 22
// clone.look = function(params) {
//     console.log(params + ' clone')
// }
// clone.today = new Date()
// clone.map.set('haha', 'hehehe')
// console.log (clone)
// console.log(obj)

// ----------------------------- 分割线 扩展运算符 -----------------------------

{
  const array = ["😉", "😊", "😇"];

  const cloneArray = array; // 改变array 将会改变 cloneArray

  console.log(cloneArray === array); // true 直接赋值不算复制

  const _cloneArray = [...array]; // 改变array 不会改变 _cloneArray

  console.log(_cloneArray === array); // false 扩展运算符进行了浅复制

  array[0] = "bad";

  console.log(array);
  console.log(cloneArray);
  console.log(_cloneArray);
}
// ----------------------------- 分割线 slice -----------------------------
{
  const array = ["😉", "😊", "😇"];

  const cloneArray = array;

  console.log(cloneArray === array);

  const _cloneArray = array.slice();

  console.log(_cloneArray === array);

  array[0] = "bad";

  console.log(array);
  console.log(cloneArray);
  console.log(_cloneArray);
}

// ----------------------------- 分割线 Object.assign -----------------------------
{
  const array = ["😉", "😊", "😇"];

  const cloneArray = array;

  console.log(cloneArray === array);

  const _cloneArray = [];

  Object.assign(_cloneArray, array);

  console.log(_cloneArray === array);

  array[0] = "bad";

  console.log(array);
  console.log(cloneArray);
  console.log(_cloneArray);
}

// ----------------------------- 分割线 Array.from -----------------------------
{
  const array = ["😉", "😊", "😇"];

  const cloneArray = array;

  console.log(cloneArray === array);

  const _cloneArray = Array.from(array);

  console.log(_cloneArray === array);

  array[0] = "bad";

  console.log(array);
  console.log(cloneArray);
  console.log(_cloneArray);
}

/**
 * 浅拷贝对于单独的值，单层的数组、对象可以很好的工作，但是对于嵌套数组对象则无效
 */
{
  const array = [["😉"], ["😊"], ["😇"]];

  const cloneArray = [...array];

  console.log(cloneArray[0] === array[0]);

  const _cloneArray = JSON.parse(JSON.stringify(array));

  console.log(_cloneArray[0] === array[0]);

  array[0] = "bad";

  console.log(array);
  console.log(cloneArray);
  console.log(_cloneArray);
}

// ----------------------------- 分割线 深拷贝 -----------------------------
function getType(val) {
  let str = Object.prototype.toString.call(val);
  let reg = /^\[object\s([a-zA-Z]*)\]$/;
  return str.match(reg)[1];
}

function deep(val) {
  let newObj;
  let type = getType(val);
  if (type === "Object") {
    newObj = {};
    for (let key in val) {
      newObj[key] = deep(val[key]);
    }
  } else if (type === "Array") {
    newObj = [];
    for (let i = 0; i < val.length; i++) {
      newObj[i] = deep(val[i]);
    }
  } else if (type === "Date") {
    newObj = new Date(val);
  } else if (type === "Map") {
    let keys = val.keys();
    newObj = new Map();
    for (let i = 0; i < keys.length; i++) {
      newObj.set(keys[i], deep(val.get(keys[i])));
    }
  } else {
    newObj = val;
  }

  return newObj;
}

const vvv = deep(obj);
