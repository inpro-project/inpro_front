<template>
  <br />
  <br />
  <br />
  <div class="about">
    <img src = "@/assets/kakao_login_medium_narrow.png" @click= "Kakaologin()" />
    <br />
  </div>
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
