import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import { isLogged } from '../store/auth.js'
import UsersPage from '../views/UsersPage.vue'
import LoginPage from '../views/LoginPage.vue'

const routes = [
  {
    path: '/',
    redirect: '/users',
    meta: { requiresAuth: true }
  },
  {
    path: '/users',
    name: 'Users',
    component: UsersPage,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(route => route.meta.requiresAuth)) {
    if (!isLogged.value) {
      next('/login')
      return
    }

    next()
  } else {
    next()
  }
})

export default router
