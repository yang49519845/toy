/*
 * @Author: your name
 * @Date: 2020-10-09 17:05:21
 * @LastEditTime: 2020-10-30 15:45:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Luckysheetd:\ccc\toy\learning\main.js
 */
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
  el: "#app",
  data: {
    items: ["a", "b", "c"],
  },
});
vueApp.items[1] = 'x' // 不是响应性的
vueApp.items.length = 2 // 不是响应性的
Vue.set(vueApp.items, 1, 'x')