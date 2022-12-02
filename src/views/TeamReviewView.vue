<template>
   <!--멤버-->
   <div class='text' style="position:relative; top:10px; margin-bottom:10px; text-align:left; font-size: 18px; color:gray;">
        &nbsp;&nbsp;&nbsp;&nbsp;팀원 리뷰
      </div>
      <div v-for="(member, idx) in members" :key="idx">
  <button v-if="member.memberreview != 0" type="button" style="margin-top:10px; margin-bottom:10px; border-style:solid; border-radius:10px; background-color:#c0c0c0; border-width:0px; height:80px; width:90%" @click="gotoreview(idx)">
    <img :src= "memberimgurl[idx]" style="float:left; border-style:solid; border-radius: 10px; background-color: gray; border-width:0px; height:70px; width:70px; position:relative; left:5px;">
<div style="float:left; position:relative; left:20px;line-height:35px;">
  <div class="memberitem" style="display:flex;">
    <div class="upperitems" style="font-size:18px">{{membernickname[idx]}}</div>
    <div class="upperitems" style="font-size:14px;">{{memberagerange[idx]}}</div>
    <div class="upperitems" style="font-size:14px;">{{memberregion[idx]}}</div>
  </div>
  <div class="memberitem" style="display:flex;">
    <div class="upperitems" style="font-size:14px;">{{memberoccupation[idx]}}</div>
    <div class="upperitems" style="font-size:14px;">{{memberinterests[idx]}}</div>
    <div class="upperitems" style="font-size:14px; ">{{memberrole[idx]}}</div>
  </div>
</div>
</button>
</div>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
</template>

<script>
import axios from 'axios'
import VueCookies from 'vue-cookies'

export default {
  data () {
    return {
      members: [],
      memberimgurl: [],
      memberrole: [],
      membernickname: [],
      memberagerange: [],
      memberregion: [],
      memberinterests: [],
      memberoccupation: [],
      memberuseridx: [],
      memberreview: []
    }
  },
  methods: {
    getuserinfodata () {
      const teamIdx = this.$route.params.teamIdx
      axios
        .get(process.env.VUE_APP_API_BASE_URL + '/app/teams/' + teamIdx, { headers: { 'Content-Type': 'application/json', Authorization: VueCookies.get('Authorization') } })
        .then(res => {
          console.log(res.data.result)
          this.teamportfolio = res.data.result[0]
          this.members = this.teamportfolio.members
          for (let i = 0; i < this.members.length; i++) {
            this.memberimgurl.push(this.members[i].userImgUrl)
            this.memberagerange.push(this.members[i].ageRange)
            this.memberinterests.push(this.members[i].interests)
            this.membernickname.push(this.members[i].nickName)
            this.memberoccupation.push(this.members[i].occupation)
            this.memberregion.push(this.members[i].region)
            this.memberuseridx.push(this.members[i].userIdx)
            this.memberrole.push(this.members[i].role)
            this.memberreview.push(this.members[i].isReview)
          }
          console.log(this.memberimgurl[0])
          console.log(this.memberagerange)
          console.log(this.memberinterests)
          console.log(this.membernickname)
          console.log(this.memberoccupation)
          console.log(this.memberregion)
          console.log(this.memberuseridx)
          console.log(this.memberrole)
          console.log(this.memberreview)
        })
        .catch(err => {
          console.log(err)
        })
    },
    gotoreview (idx) {
      const userIdx = this.memberuseridx[idx]
      this.$router.push({ name: 'review', params: { userIdx: userIdx } })
    },
    checkLogin () {
      if (VueCookies.get('Authorization') === null || VueCookies.get('userIdx') === null) {
        this.$router.push({ name: 'kakaologin' })
      }
    }
  },
  created () {
    this.checkLogin()
    this.getuserinfodata()
  }

}
</script>

<style>
.upperitems{
  margin-left: 10px;
}
</style>
