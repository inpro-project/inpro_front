<template>
    <OtherTeaminfoViewVue/>

    <!--나에게 승인 요청한 멤버-->
    <div v-if="liketeamIdx.includes(Number(teamIdx))">
      <div style="font-size:18px; color:gray; text-align:left; margin-left:30px">가입 요청한 팀원</div>
    <div v-for="(liker, idx) in likers" :key="idx">
    <button type="button" style="margin-top:10px; margin-bottom:10px; border-style:solid; border-radius:10px; background-color:#c0c0c0; border-width:0px; height:80px; width:90%" @click="gotoprofile(idx)">
      <img :src= "memberimgurl[idx]" style="float:left; border-style:solid; border-radius: 10px; background-color: gray; border-width:0px; height:70px; width:70px; position:relative; left:5px;">
  <div style="float:left; position:relative; left:20px;line-height:35px;">
    <div class="memberitem" style="display:flex;">
      <div class="upperitems" style="font-size:18px">{{membernickname[idx]}}</div>
      <div class="upperitems" style="font-size:14px;">{{memberagerange[idx]}}</div>
      <div class="upperitems" style="font-size:14px;">{{memberregion[idx]}}</div>
      <div class="upperitems" style="font-size:14px;">{{membergender[idx]}}</div>
    </div>
    <div class="memberitem" style="display:flex;">
      <div class="upperitems" style="font-size:14px;">{{memberoccupation[idx]}}</div>
      <div class="upperitems" style="font-size:14px;">{{memberinterests[idx]}}</div>
    </div>
  </div>
  </button>
  </div>
  <br/>
  <br/>
  <br/>
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
import axios from 'axios'

export default {
  components: { OtherTeaminfoViewVue },
  data () {
    return {
      teams: [],
      likings: [],
      likers: [],
      teamimgurl: [],
      teamtitle: [],
      teamtype: [],
      teamregion: [],
      teaminterests: [],
      teamIdx: [],
      userIdx: [],
      memberimgurl: [],
      membergender: [],
      membernickname: [],
      memberagerange: [],
      memberregion: [],
      memberinterests: [],
      memberoccupation: [],
      memberuseridx: [],
      liketeamIdx: [], // 각 선호 유저가 있는 팀의 인덱스
      results: []
    }
  },
  methods: {
    gotofixteaminfo () { // 정보 수정하러 가기
      this.teamIdx = this.$route.params.teamIdx
      console.log(this.$teamIdx)
      this.$router.push({ name: 'fixteaminfo', params: { teamIdx: this.teamIdx } })
    },
    getteamlikers () {
      this.teamIdx = this.$route.params.teamIdx
      axios
        .get(process.env.VUE_APP_API_BASE_URL + '/app/team-likers', { headers: { 'Content-Type': 'application/json', Authorization: 'eyJ0eXBlIjoiand0IiwiYWxnIjoiSFMyNTYifQ.eyJ1c2VySWR4IjoxLCJpYXQiOjE2Njg3NTkzMjIsImV4cCI6MTY3MDIzMDU1MX0.uETLHjg2EDpy3KEmpRgVGcMw-vv2bvImh_Dpdj4RTtc' } })
        .then(res => {
          this.likings = res.data.result
          this.likers = this.likings.filter((team) => team.teamIdx === Number(this.teamIdx))[0].likers
          console.log(this.likers.length)
          for (let k = 0; k < this.likings.length; k++) {
            this.liketeamIdx.push(this.likings[k].teamIdx)
          }
          for (let i = 0; i < this.likers.length; i++) {
            this.memberimgurl.push(this.likers[i].userImgUrl)
            this.memberagerange.push(this.likers[i].ageRange)
            this.membergender.push(this.likers[i].gender)
            this.memberinterests.push(this.likers[i].interests)
            this.membernickname.push(this.likers[i].nickName)
            this.memberoccupation.push(this.likers[i].occupation)
            this.memberregion.push(this.likers[i].region)
            this.memberuseridx.push(this.likers[i].userIdx)
          }
          console.log(this.memberagerange)
          console.log(this.memberinterests)
          console.log(this.membernickname)
          console.log(this.memberoccupation)
          console.log(this.memberregion)
          console.log(this.memberimgurl)
          console.log(this.membergender)
          console.log(this.memberuseridx)
          console.log(this.liketeamIdx)
          console.log(this.likings)
        })
        .catch(err => {
          console.log(err)
        })
    },
    gotoprofile (idx) {
      const userIdx = this.memberuseridx[idx]
      this.$router.push({ name: 'userliketeaminfo', params: { userIdx: userIdx, teamIdx: this.teamIdx } })
    },
    checkLogin () {
      if (VueCookies.get('Authorization') === null || VueCookies.get('userIdx') === null) {
        this.$router.push({ name: 'kakaologin' })
      }
    }
  },
  created () {
    this.checkLogin()
    this.getteamlikers()
  }
}
</script>

<style scoped>
.upperitems{
  text-align: center;
  margin-inline: 5px;
}
</style>
