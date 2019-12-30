/**
 * new Vue 过程
 * 一. 调用 _init 函数
 *  1. initMixin
 *     为参数添加 vue 特殊属性, 进行了参数合并
 *     为参数初始 event
 *     为参数添加 initRender 函数 slot - createElement
 *     执行 [ beforeCreate ] 回调函数
 *     注入 data 和 props
 *     调用 initState 函数
 *          - 解析注入完成后的 data, props, Methods, computed, watch
 *     执行 [ created ] 回调函数
 *  2. stateMixin
 *  3. eventsMixin
 *  4. lifecycleMixin
 *  5. renderMixin
 */

var vueApp = new Vue({
    el: '#app',
    data: function(){
        return {
            message: '123123'
        }
    }
});

