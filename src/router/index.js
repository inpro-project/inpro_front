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
    component: () => import(/* webpackChunkName: "mainmenu" */ '../views/MainMenuView.vue')
  },
  {
    path: '/userinfo',
    name: 'userinfo',
    component: () => import(/* webpackChunkName: "userinfo" */ '../views/UserinfoView.vue')
  },
  {
    path: '/disctest',
    name: 'disctest',
    component: () => import(/* webpackChunkName: "disctest" */ '../views/DisctestView.vue')
  },
  {
    path: '/chatlist',
    name: 'chatlist',
    component: () => import(/* webpackChunkName: "chatlist" */ '../views/ChatListView.vue')
  },
  {
    path: '/moremenu',
    name: 'moremenu',
    component: () => import(/* webpackChunkName: "moremenu" */ '../views/MoreMenuView.vue')
  },
  {
    path: '/fixuserinfo',
    name: 'fixuserinfo',
    component: () => import(/* webpackChunkName: "fixuserinfo" */ '../views/FixUserInfoView.vue')
  },
  {
    path: '/disctestresult',
    name: 'disctestresult',
    component: () => import(/* webpackChunkName: "disctestresult" */ '../views/DisctestResultView.vue')
  },
  {
    path: '/fixworklist',
    name: 'fixworklist',
    component: () => import(/* webpackChunkName: "fixworklist" */ '../views/FixWorkListView.vue')
  },
  {
    path: '/fixwinlist',
    name: 'fixwinlist',
    component: () => import(/* webpackChunkName: "fixwinlist" */ '../views/FixWinListView.vue')
  },
  {
    path: '/fixurllist',
    name: 'fixurllist',
    component: () => import(/* webpackChunkName: "fixurllist" */ '../views/FixUrlListView.vue')
  },
  {
    path: '/worklist',
    name: 'worklist',
    component: () => import(/* webpackChunkName: "fixworklist" */ '../views/WorkListView.vue')
  },
  {
    path: '/winlist',
    name: 'winlist',
    component: () => import(/* webpackChunkName: "fixwinlist" */ '../views/WinListView.vue')
  },
  {
    path: '/urllist',
    name: 'urllist',
    component: () => import(/* webpackChunkName: "fixurllist" */ '../views/UrlListView.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
