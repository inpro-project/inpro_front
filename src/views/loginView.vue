<template>
<div>

</div>
</template>

<script>
import axios from 'axios'
import VueCookies from 'vue-cookies'

export default {
  components: {},
  data () {
    return {
      codes: '',
      results: [],
      personfilter: [],
      teamfilter: []
    }
  },
  setup () {},
  created () {
    this.checkLogin()
    this.codes = this.$route.query.code
    this.getToken()
  },
  mounted () {},
  unmounted () {},
  methods: {
    login (accessToken) {
      axios
        .get(process.env.VUE_APP_API_BASE_URL + '/oauth/kakao', { headers: { Authorization: accessToken } })
        .then(res => {
          VueCookies.set('userIdx', res.data.result.userIdx)
          VueCookies.set('Authorization', res.data.result.jwt)
          this.getresult() // DISC 테스트 여부 확인 --> 테스트 or 필터링으로 라우팅
        })
        .catch(err => {
          console.log(err)
        })
    },
    getToken () {
      axios
        .get('https://kauth.kakao.com/oauth/token?client_id=' + process.env.VUE_APP_KAKAO_CLIENT_ID + '&client_secret=' + process.env.VUE_APP_KAKAO_CLIENT_SECRET + '&grant_type=authorization_code&redirect_uri=' + process.env.VUE_APP_KAKAO_REDIRECT_URI + '&code=' + this.codes)
        .then(res => {
          this.login(res.data.access_token)
        })
        .catch(err => {
          console.log(err)
        })
    },
    async getresult () { // DISC 정보 가져옴
      await axios
        .get(process.env.VUE_APP_API_BASE_URL + '/app/user-discs/', { headers: { 'Content-Type': 'application/json', Authorization: VueCookies.get('Authorization') } })
        .then(res => {
          console.log(res.data.result)
          if (res.data.result.length === 0) { // DISC 목록 조회가 없다면 테스트 보여줌
            this.$router.push({ name: 'disctest' })
          } else {
            this.getfilteringdata() // DISC 가 있다면 필터링 여부 검사
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    async getfilteringdata () {
      await axios
        .get(process.env.VUE_APP_API_BASE_URL + '/app/user-filters', { headers: { 'Content-Type': 'application/json', Authorization: VueCookies.get('Authorization') } })
        .then(res => {
          this.personfilter = res.data.result
          console.log(this.personfilter)
          this.$store.state.personfilter = this.personfilter
        })
        .catch(err => {
          console.log(err)
        })
      await axios
        .get(process.env.VUE_APP_API_BASE_URL + '/app/team-filters', { headers: { 'Content-Type': 'application/json', Authorization: VueCookies.get('Authorization') } })
        .then(res => {
          this.teamfilter = res.data.result
          console.log(this.teamfilter)
          this.$store.state.teamfilter = this.teamfilter
        })
        .catch(err => {
          console.log(err)
        })
      if (this.personfilter.length === 0 | this.teamfilter.length === 0) { // 팀 또는 팀원 필터링이 없을 때
        this.$router.push({ name: '/filtering' }) // 필터링 실시
      } else {
        this.$router.push({ name: 'mainmenu' })
      }
    },
    checkLogin () {
      if (VueCookies.get('Authorization') !== null && VueCookies.get('userIdx') !== null) {
        this.$router.push({ name: 'mainmenu' })
      }
    }

  }
}
</script>
