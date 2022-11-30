<template>
  <br />
  <br />
  <br />
  <button type="button" style="border-width:0px; background-color:white; ">
    <img src = "@/assets/kakao_login_medium_narrow.png" @click= "Kakaologin()" />
    <br />
  </button>
</template>

<script>
export default {
  methods: {
    Kakaologin () {
      window.location.replace(
        'https://kauth.kakao.com/oauth/authorize?client_id=' + process.env.VUE_APP_KAKAO_CLIENT_ID + '&redirect_uri=' + process.env.VUE_APP_KAKAO_REDIRECT_URI + '&response_type=code'
      )
    }
  }
}
</script>
