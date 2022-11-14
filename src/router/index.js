import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/kakaologin',
    name: 'kakaologin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/KakaologinView.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import(/* webpackChunkName: "signup" */ '../views/signupView.vue')
  },
  {
    path: '/mainmenu',
    name: 'mainmenu',
    component: () => import(/* webpackChunkName: "login" */ '../views/MainMenuView.vue')
  },
  {
    path: '/userinfo',
    name: 'userinfo',
    component: () => import(/* webpackChunkName: "userinfo" */ '../views/UserInfoView.vue')
  },
  {
    path: '/disctest',
    name: 'disctest',
    component: () => import(/* webpackChunkName: "disctest" */ '../views/DisctestView.vue')
  },
  {
    path: '/chatlist',
    name: 'chatlist',
    component: () => import(/* webpackChunkName: "disctest" */ '../views/ChatListView.vue')
  },
  {
    path: '/moremenu',
    name: 'moremenu',
    component: () => import(/* webpackChunkName: "disctest" */ '../views/MoreMenuView.vue')
  },
  {
    path: '/fixuserinfo',
    name: 'fixuserinfo',
    component: () => import(/* webpackChunkName: "disctest" */ '../views/FixUserInfoView.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
