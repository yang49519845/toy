// var aggregation = (baseClass, ...mixins) => {
//   let base = class _Combined extends baseClass {
//     constructor(...args) {
//       super(...args)
//       mixins.forEach((mixin) => {
//         mixins.prototype.initializer.call(this)
//       })
//     }
//   }
//   let copyProps = (target, source) => {
//     Object.getOwnPropertyNames(source)
//       .concat([Object.getOwnPropertySymbols(sourrce)])
//       .forEach((prop) => {
//         if (
//           prop.match(
//             /^(?:constructor|prototype|arguments|caller|name|bind|call|apply|toString|length)$/
//           )
//         )
//           return
//         Object.defineProperty(
//           target,
//           prop,
//           Object.getOwnPropertyDescriptor(source, prop)
//         )
//       })
//   }
//   mixins.forEach((mixin) => {
//     copyProps(base.prototype, mixin.prototype)
//     copyProps(base, mixin)
//   })
//   return base
// }

var Rectangle = function (width, height) {
  this._width  = width
  this._height = height
}
Rectangle.prototype = {
  set width  (width)  { this._width = width               },
  get width  ()       { return this._width                },
  set height (height) { this._height = height             },
  get height ()       { return this._height               },
  get area   ()       { return this._width * this._height }
}
var r = new Rectangle(50, 20)
r.area === 1000
console.log(r)