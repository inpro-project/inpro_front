<template>
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <div style="display: flex; justify-content: center;">
    <img src = "@/assets/inplelogoblue.png" style="width:150px; height:150px;"/>
  </div>
  <br />
  <br />
  <br />
  <br />
<button class="about" style="border-width:0px; background-color:white;">
    <img src = "@/assets/kakao_login_medium_narrow.png" style="width:180px; height:50px;" @click= "login()" />
    <br />
    </button>
</template>

<script>
import VueCookies from 'vue-cookies'

export default {
  methods: {
    kakaoLogin () {
      window.location.replace(
        'https://kauth.kakao.com/oauth/authorize?client_id=' + process.env.VUE_APP_KAKAO_CLIENT_ID + '&redirect_uri=' + process.env.VUE_APP_KAKAO_REDIRECT_URI + '&response_type=code'
      )
    },
    devLogin () {
      VueCookies.set('userIdx', process.env.VUE_APP_USER_ID)
      VueCookies.set('Authorization', process.env.VUE_APP_ACCESS_TOKEN)
      this.$router.push({ name: 'mainmenu' })
    },
    login () {
      if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
        this.kakaoLogin()
      } else if (process.env.NODE_ENV === 'production') {
        this.kakaoLogin()
      }
    },
    checkLogin () {
      if (VueCookies.get('Authorization') !== null && VueCookies.get('userIdx') !== null) {
        this.$router.push({ name: 'mainmenu' })
      }
    }
  },
  created () {
    this.checkLogin()
  }
}
</script>
