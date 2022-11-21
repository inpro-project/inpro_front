<template>
<div>
  <UserBar>인플</UserBar>
  <h2>인플</h2>
</div>
</template>

<script>
import axios from 'axios'
import VueCookies from 'vue-cookies'

export default {
  components: {},
  data () {
    return {
      codes: ''
    }
  },
  setup () {},
  created () {
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
          VueCookies.set('Authorization', accessToken)
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
    }

  }
}
</script>
