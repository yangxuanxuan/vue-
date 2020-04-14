import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './components/Login'
import Home from './components/Home'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/home',
      component: Home
    },
    // {
    //   path: '*',
    //   component: Login
    // }
    {
      path: '/',
      redirect: '/login'
    }
  ]
})

router.beforeEach((to, from, next) => {
  // to 将要访问的路径
  // from 代表从哪个路径跳转而来
  // next() 放行 next('login') 强制跳转
  if (to.path === '/login') next()
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})

export default router