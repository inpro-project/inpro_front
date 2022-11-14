<template>
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
        'https://kauth.kakao.com/oauth/authorize?client_id=1eea242a89e16153efc722c1bdd366c4&redirect_uri=http://localhost:8081/signup/kakaologin&response_type=code'
      )
    }
  }
}
</script>
