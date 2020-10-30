# vue

## 官方响应式教程
<https://www.vuemastery.com/courses/advanced-components/build-a-reactivity-system/>

### vue.set方法 什么情况下会用到？

文档地址：<https://cn.vuejs.org/v2/guide/reactivity.html#%E5%A6%82%E4%BD%95%E8%BF%BD%E8%B8%AA%E5%8F%98%E5%8C%96>

文章参考地址: <https://www.cnblogs.com/heavenYJJ/p/9559439.html>
文章参考地址: <https://juejin.im/post/6844903901175496711#comment>
#### 为什么存在

  如果在实例创建之后添加新的属性到实例上，它不会触发视图更新。
  受 ES5 的限制，Vue.js 不能检测到对象属性的添加或删除。因为 Vue.js 在初始化实例时将属性转为 getter/setter，所以属性必须在 data 对象上才能让 Vue.js 转换它，才能让它是响应的。

##### 在实例中直接添加属性（实例之后）
```js
export default {
  name: 'App',
  data () {
    return {
      newWork: '',
      newWorkName: '',
      userName: '蔡徐坤',
      age: '18',
      sex: '男',
      likes: [
        '篮球',
        '跳舞',
        'rap'
      ],
      works: {
        teacher: '男团老师'
      },
    }
  },
  methods: {
    addProfession() {
      this.works[this.newWorkName] = this.newWork // 添加新的职业
    }
  }
}
```
<image src="./vueImage/vueset.gif">

##### 在实例中使用Set添加属性（实例之后）
```js
export default {
  name: 'App',
  data () {
    return {
      newWork: '',
      newWorkName: '',
      userName: '蔡徐坤',
      age: '18',
      sex: '男',
      likes: [
        '篮球',
        '跳舞',
        'rap'
      ],
      works: {
        teacher: '男团老师'
      },
    }
  },
  methods: {
    addProfession() {
      this.$set(this.works, this.newWorkName, this.newWork) // set
    }
  }
}
```
<image src="./vueImage/vuesetaafter.gif">


### vue Watche Computed

#### watch

文档描述

> 计算属性在大多数情况下更合适，但有时也需要一个自定义的侦听器。这就是为什么 Vue 通过 watch 选项提供了一个更通用的方法，来响应数据的变化。当需要在数据变化时执行异步或开销较大的操作时，这个方式是最有用的。

群众描述

> 监听某个数据的变化（监听完调用什么函数） 一个数据影响多个数据

使用场景

* 浏览器自适应
* 监控路由对象
* 监控自身属性变化

#### computed

文档描述

> 当你有一些数据需要随着其它数据变动而变动时，你很容易滥用 watch——特别是如果你之前使用过 AngularJS。然而，通常更好的做法是使用计算属性而不是命令式的 watch 回调。

群众描述

> 计算后返回新值 一个数据受多个数据影响

使用场景

* 计算总价格
* 过滤某些数据
