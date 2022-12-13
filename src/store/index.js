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
    otherteamIdx: '0',
    myIdx: '', // 나의 대표 disctest
    myrepX: 0,
    myrepY: 0,
    isinvalid: 0, // 유해이미지 여부
    personfilter: 0,
    teamfilter: 0
  },
  getters: {
  },
  mutations: {
    SET_USERIDX (state, userIdx) {
      state.userIdx.push(userIdx)
    },
    SET_TEAMIDX (state, teamIdx) {
      state.teamIdx.push(teamIdx)
    },
    INIT_USERIDX (state, userIdx) {
      state.userIdx.splice(0)
    },
    INIT_TEAMIDX (state, teamIdx) {
      state.teamIdx.splice(0)
    }
  },
  actions: {
    GET_PERSON (context) {
      getperson()
        .then(res => {
          context.commit('INIT_USERIDX')
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
          context.commit('INIT_TEAMIDX')
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
