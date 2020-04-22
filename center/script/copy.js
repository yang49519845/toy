/**
 *  判断一个值的属性
 *
 * @param {*} obj
 * @param {*} type
 * @returns
 */
function isType(obj, type) {
  // 不是object，排除了 array，object 引用类型
  if (typeof obj !== "object") return false
  var typeString = Object.prototype.toString.call(obj)
  var flag
  switch (type) {
    case "Array":
      flag = typeString === "[object Array]"
      break
    case "Date":
      flag = typeString === "[object Date]"
      break
    case "RegExp":
      flag = typeString === "[object RegExp]"
      break
    default:
      flag = false
      break
  }
  return flag
}
/**
 * 判断一个正则的属性
 *
 * @param {*} regexp
 * @returns
 */
function getRegExp(regexp) {
  var flags = ""
  if (regexp.global) {
    flags += "g"
  }
  if (regexp.ignoreCase) {
    flags += "i"
  }
  if (regexp.multiline) {
    flags += "m"
  }
  return flags
}

function clone(parent) {
  var parents = []
  var children = []

  var _clone = function (parent) {
    if (parent === null) return null
    if (typeof parent !== "object") return parent
    var child, proto
    // 对数组，正则，日期对象进行特殊处理
    if (isType(parent, "Array")) {
      child = []
    } else if (isType(parent, "RegExp")) {
      child = new RegExp(parent.source, getRegExp(parent))
    } else if (isType(parent, "Date")) {
      child = new Date(parent.getTime())
    } else {
      proto = Object.getPrototypeOf(parent)
      child = Object.create(proto)
    }

    var index = parents.indexOf(parent)

    if (index !== -1) {
      return children[index]
    }

    parents.push(parent)
    children.push(child)

    for (let i in parent) {
      child[i] = _clone(parent[i])
    }
    return child
  }
  return _clone(parent)
}
