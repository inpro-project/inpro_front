<template>
    <OtherTeaminfoViewVue/>
        <div class=" inner" style="width:100%; position:relative; top:10px">
  </div>
  <button class="btn" type="button" style="border-radius:15px; font-size:20px; background-color: #4a60d4; color: white; width:80%; height:50px;" @click="gotofixteaminfo ()">정보 수정하기</button>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
</template>

<script>
import VueCookies from 'vue-cookies'
import OtherTeaminfoViewVue from '@/components/OtherTeaminfoView.vue'

export default {
  components: { OtherTeaminfoViewVue },
  methods: {
    gotofixteaminfo () { // 정보 수정하러 가기
      const teamIdx = this.$route.params.teamIdx
      console.log(teamIdx)
      this.$router.push({ name: 'fixteaminfo', params: { teamIdx: teamIdx } })
    },
    checkLogin () {
      if (VueCookies.get('Authorization') === null || VueCookies.get('userIdx') === null) {
        this.$router.push({ name: 'kakaologin' })
      }
    }
  },
  created () {
    this.checkLogin()
  }
}
</script>

<style>

</style>
