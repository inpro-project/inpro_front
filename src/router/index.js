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
    path: '/chatRoom/list',
    name: 'ChatRoomListView',
    component: () => import(/* webpackChunkName: "ChatRoomList" */ '../views/chat/ChatRoomListView.vue')
  },
  {
    path: '/chatRoom/chat/:roomId',
    name: 'ChatRoomView',
    component: () => import(/* webpackChunkName: "ChatRoomList" */ '../views/chat/ChatRoomView.vue')
  },
  {
    path: '/kakao/login',
    name: 'loginView',
    component: () => import(/* webpackChunkName: "loginView" */ '../views/loginView.vue')
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
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
