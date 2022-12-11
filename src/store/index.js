import { createStore } from 'vuex'
import { getperson, getteam } from '../api/index.js'
// import axios from 'axios'
// import VueCookies from 'vue-cookies'

export default createStore({
  state: {
    personcounter: 0,
    teamcounter: 0,
    userIdx: [],
    teamIdx: [],
    isteamlike: [],
    isteampass: [],
    isuserlike: [],
    isuserpass: [],
    otheruserIdx: '0',
    otherteaminfo: '0',
    myIdx: '', // 나의 대표 disctest
    istest: '0', // disctest 여부 ( 0 = 없음 / 1 = 있음)
    myrepX: 0,
    myrepY: 0,
    isinvalid: 0 // 유해이미지 여부
  },
  getters: {
  },
  mutations: {
    SET_USERIDX (state, userIdx) {
      state.userIdx.push(userIdx)
    },
    SET_TEAMIDX (state, teamIdx) {
      state.teamIdx.push(teamIdx)
    }
  },
  actions: {
    GET_PERSON (context) {
      getperson()
        .then(res => {
          for (let i = 0; i < res.data.result.length; i++) {
            context.commit('SET_USERIDX', res.data.result[i].userIdx)
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    GET_TEAM (context) {
      getteam()
        .then(res => {
          for (let i = 0; i < res.data.result.length; i++) {
            context.commit('SET_TEAMIDX', res.data.result[i].teamIdx)
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {

  }
})
