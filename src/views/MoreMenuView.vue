<template>
   <div class="outer ms-4">
   <div class=" inner" style="width: 90%;">
   <div class="text-wrap">
     <p style="text-align:left; position:relative; top:20px; font-size:20px;  color:gray; margin-bottom: 30px;">
  더보기
   </p>
   </div>
 </div>
   </div>
    <br/>
    <div>
      <router-link to="/filtering">
      <button style=" width:80%; height:50px; line-height:50px; border-style:solid; border-radius: 10px; border-width:0px; background-color:#c0c0c0; font-size:20px; margin-bottom:30px;">
탐색 필터링
      </button>
    </router-link>
    </div>
    <div>
      <button style=" width:80%; height:50px; line-height:50px; border-style:solid; border-radius: 10px; border-width:0px; background-color:#c0c0c0; font-size:20px; margin-bottom:30px;" @click="gotoresult">
나의 DISC
      </button>
    </div>
    <button @click="logOut" style=" width:80%; height:50px; line-height:50px; border-style:solid; border-radius: 10px; border-width:0px; background-color:#c0c0c0; font-size:20px; margin-bottom:30px;">
로그 아웃
      </button>
</template>

<script>
import VueCookies from 'vue-cookies'

export default {
  data () {
    return {
    }
  },
  setup () {},
  created () {
    this.checkLogin()
  },
  mounted () {},
  unmounted () {},
  methods: {
    async logOut () {
      await VueCookies.remove('Authorization')
      await VueCookies.remove('userIdx')
      this.$router.push({ name: 'kakaologin' })
    },
    checkLogin () {
      if (VueCookies.get('Authorization') === null || VueCookies.get('userIdx') === null) {
        this.$router.push({ name: 'kakaologin' })
      }
    },
    gotoresult () {
      this.$router.push({ name: 'disctestresultlist' })
    }
  }
}
</script>

<style>

</style>
