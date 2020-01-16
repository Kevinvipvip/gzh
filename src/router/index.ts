import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import config from '../config'
import utils from '../utils'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  }, {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  }, {
    path: '/pages',
    name: 'pages',
    component: () => import('../views/Mypage.vue')
  }
]
//
const router = new VueRouter({ routes })
// // router临时使用的vue对象，只是用来提示登录中
// let routerVue = new Vue()
// router.beforeEach((to, from, next) => {
//   if (!localStorage.getItem('token')) {
//     if (config.local_model) {
//       // 如果是本地模式，则存储配置中的local_token
//       localStorage.setItem('token', config.local_token)
//       next()
//     } else {
//       let params = utils.getParams()
//       if (!params['code']) {
//         console.log(to)
//         utils.auth(to.fullPath)
//       } else {
//         routerVue.$toast.loading({
//           mask: true,
//           duration: 10000,
//           message: '登录中'
//         })
//
//         utils.login(params['code'])
//           .then(res => {
//             console.log(res)
//             // @ts-ignore
//             localStorage.setItem('token', res)
//             routerVue.$toast.clear()
//             next({path: to.path, query: to.query})
//           }, () => {
//             routerVue.$toast.clear()
//             location.replace('/dist/')
//           })
//       }
//     }
//   } else {
//     next()
//   }
// })
export default router
