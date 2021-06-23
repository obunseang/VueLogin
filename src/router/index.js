import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'
import NotFound from '@/components/NotFound.vue'

Vue.use(Router)
const router = new Router({
  routes: [
    { name: 'home', path: '/', component: Home },
    { name: 'login', path: '/login', component: Login },
    { name: 'register', path: '/register', component: Register },
    { path: '/404', component: NotFound },
    { path: '*', redirect: '/404' }
  ]
})
router.beforeEach((to, from, next) => {
  const publicPages = ['/', '/login', '/register', '/404']
  const authRequired = !publicPages.includes(to.path.toLocaleLowerCase())
  const loggedIn = localStorage.getItem('userLoggedIn')
  if (authRequired && !loggedIn) {
    return next('/login')
  }
  next()
})
export default router
