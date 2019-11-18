import Vue from 'vue'
import Router from 'vue-router'
// import { } from ''

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  // savedPosition 会在你使用浏览器前进或后退按钮时候生效
       // 这个跟你使用 router.go() 或 router.back() 效果一致
       // 这也是为什么我在 tab 栏结构中放入了一个 点击回退 的按钮
  scrollBehavior (to, from, savedPosition) {
    return {
      y: 0
    }
  }
})