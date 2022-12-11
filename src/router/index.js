import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'defaultlayout',
    component: () => import(/* webpackChunkName: "defaultlayout" */ '@/components/layout/DefaultLayout.vue'),
    children: [
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
        path: '/teaminfo',
        name: 'teaminfo',
        component: () => import(/* webpackChunkName: "teaminfo" */ '../views/TeaminfoView.vue')
      },
      {
        path: '/otherteaminfo',
        name: 'otherteaminfo',
        component: () => import(/* webpackChunkName: "otherteaminfo" */ '../components/OtherTeaminfoView.vue')
      },
      {
        path: '/teamcomment:teamIdx',
        name: 'teamcomment',
        component: () => import(/* webpackChunkName: "userinfo" */ '../views/TeamCommentView.vue')
      },
      {
        path: '/otheruserinfo',
        name: 'otheruserinfo',
        component: () => import(/* webpackChunkName: "userinfo" */ '../components/OtherUserinfoView.vue')
      },
      {
        path: '/disctest',
        name: 'disctest',
        component: () => import(/* webpackChunkName: "disctest" */ '../views/DisctestView.vue')
      },
      {
        path: '/chatlist',
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
        path: '/disctestresult/:userDiscIdx',
        name: 'disctestresult',
        component: () => import(/* webpackChunkName: "disctestresult" */ '../views/DisctestResultView.vue')
      },
      {
        path: '/disctestresultlist/',
        name: 'disctestresultlist',
        component: () => import(/* webpackChunkName: "disctestresultlist" */ '../views/DisctestResultListView.vue')
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
      },
      {
        path: '/filtering',
        name: 'filtering',
        component: () => import(/* webpackChunkName: "fixurllist" */ '../views/FilteringView.vue')
      },
      {
        path: '/showperson',
        name: 'showperson',
        component: () => import(/* webpackChunkName: "showperson" */ '../views/ShowPersonView.vue')
      },
      {
        path: '/showteam',
        name: 'showteam',
        component: () => import(/* webpackChunkName: "showteam" */ '../views/ShowTeamView.vue')
      },
      {
        path: '/memberbox',
        name: 'memberbox',
        component: () => import(/* webpackChunkName: "memberbox" */ '../components/layout/MemberBox.vue')
        // 임시 테스트용 멤버 박스
      },
      {
        path: '/melikeuser',
        name: 'melikeuser',
        component: () => import(/* webpackChunkName: "likeinfo" */ '../views/likeinfo/MeLikeUserView.vue')
      },
      {
        path: '/melikeuserinfo/:userIdx',
        name: 'melikeuserinfo',
        component: () => import(/* webpackChunkName: "likeinfo" */ '../views/Userinfo/MeLikeUserInfoView.vue')
      },
      {
        path: '/userlikeme',
        name: 'userlikeme',
        component: () => import(/* webpackChunkName: "likeinfo" */ '../views/likeinfo/UserLikeMeView.vue')
      },
      {
        path: '/userliketeaminfo/:userIdx/:teamIdx',
        name: 'userliketeaminfo',
        component: () => import(/* webpackChunkName: "likeinfo" */ '../views/Teaminfo/UserLikeTeamInfoView.vue')
      },
      {
        path: '/userlikemeinfo/:userIdx',
        name: 'userlikemeinfo',
        component: () => import(/* webpackChunkName: "likeinfo" */ '../views/Userinfo/UserLikeMeInfoView.vue')
      },
      {
        path: '/matcheduser',
        name: 'matcheduser',
        component: () => import(/* webpackChunkName: "likeinfo" */ '../views/likeinfo/MatchedUserView.vue')
      },
      {
        path: '/matcheduserinfo/:userIdx',
        name: 'matcheduserinfo',
        component: () => import(/* webpackChunkName: "likeinfo" */ '../views/Userinfo/MatchedUserInfoView.vue')
      },
      {
        path: '/meliketeam',
        name: 'meliketeam',
        component: () => import(/* webpackChunkName: "likeinfo" */ '../views/likeinfo/MeLikeTeamView.vue')
      },
      {
        path: '/meliketeaminfo/:teamIdx',
        name: 'meliketeaminfo',
        component: () => import(/* webpackChunkName: "likeinfo" */ '../views/Teaminfo/MeLikeTeaminfoView.vue')
      },
      {
        path: '/matchedteam',
        name: 'matchedteam',
        component: () => import(/* webpackChunkName: "likeinfo" */ '../views/likeinfo/MatchedTeamView.vue')
      },
      {
        path: '/matchedteaminfo/:teamIdx',
        name: 'matchedteaminfo',
        component: () => import(/* webpackChunkName: "likeinfo" */ '../views/Teaminfo/MatchedTeaminfoView.vue')
      },
      {
        path: '/teamimade',
        name: 'teamimade',
        component: () => import(/* webpackChunkName: "likeinfo" */ '../views/likeinfo/TeamImadeView.vue')
      },
      {
        path: '/teamimadeinfo/:teamIdx',
        name: 'teamimadeinfo',
        component: () => import(/* webpackChunkName: "likeinfo" */ '../views/Teaminfo/TeamImadeinfoView.vue')
      },
      {
        path: '/maketeam',
        name: 'maketeam',
        component: () => import(/* webpackChunkName: "maketeam" */ '../views/MakeTeamView.vue')
      },
      {
        path: '/fixteaminfo/:teamIdx',
        name: 'fixteaminfo',
        component: () => import(/* webpackChunkName: "maketeam" */ '../views/FixTeaminfoView.vue')
      },
      {
        path: '/teamreview/:teamIdx',
        name: 'teamreview',
        component: () => import(/* webpackChunkName: "teamreview" */ '../views/TeamReviewView.vue')
      },
      {
        path: '/review/:teamIdx/:userIdx',
        name: 'review',
        component: () => import(/* webpackChunkName: "review" */ '../views/ReviewView.vue')
      }
    ]
  },
  {
    path: '/',
    name: 'emptylayout',
    component: () => import(/* webpackChunkName: "emptycomponent" */ '@/components/layout/EmptyLayout.vue'),
    children: [
      {
        path: '/kakaologin',
        name: 'kakaologin',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/KakaologinView.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
