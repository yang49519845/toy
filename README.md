## new vue 过程

        调用 this._init

#### initMixin

* initLifecycle() 为实例初始化生命周期
* initEvents()    为实例初始 event, 创建_events事件管理对象
* initRender() 为实例添加 initRender 函数 slot、createElement...
* callHook(vm, 'beforeCreate') 执行 [ beforeCreate ] 回调函数
* initInjections() 注入 data 和 props
* initState() 调用 initState 函数
  * initProps--绑定props
  * initMethods--绑定方法
  * initData-通过observe进行数据绑定, 给每一个data的属性加上getter,setter.
* initProvide() 解析注入完成后的 data, props, Methods, computed, watch
* callHook() 执行 [ created ] 回调函数
* vm.$mount(vm.$options.el) 挂载元素

    initMixin就做了一件事情，在Vue的原型上增加_init方法，构造Vue实例的时候会调用这个_init方法来初始化Vue实例

    <https://github.com/answershuto/learnVue/blob/master/vue-src/core/instance/init.js>

====================================

        Vue {constructor: ƒ}

        initMixin(Vue);

        Vue {_init: ƒ, constructor: ƒ}

====================================

#### stateMixin

#### eventsMixin

#### lifecycleMixin

#### renderMixin
