<template>
<div v-for="(member, idx) in members" :key="idx">
  <button type="button" style="margin-top:10px; margin-bottom:10px; border-style:solid; border-radius:10px; background-color:#c0c0c0; border-width:0px; height:80px; width:90%" @click="gotoprofile">
    <img :src= "memberimgurl[idx]" style="float:left; border-style:solid; border-radius: 10px; background-color: gray; border-width:0px; height:70px; width:70px; position:relative; left:5px;">
<div style="float:left; position:relative; left:20px;line-height:35px;">
  <div class="memberitem" style="display:flex;">
    <div class="upperitems">{{membernickname[idx]}}</div>
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

</template>

<script>
import axios from 'axios'
export default {
  name: 'MemberBox',
  data () {
    return {
      teamportfolio: [],
      commentCount: '',
      interests: '',
      leaderIdx: '',
      likeCount: '',
      memberCount: '',
      members: [],
      region: '',
      staus: '',
      teamImgUrl: '',
      title: '',
      type: '',
      memberimgurl: [],
      memberrole: [],
      membernickname: [],
      memberagerange: [],
      memberregion: [],
      memberinterests: [],
      memberoccupation: [],
      memberuseridx: []
    }
  },
  methods: {
    getuserinfodata () {
      axios
        .get('http://prod.inpro-server.shop:9000/app/teams/1', { headers: { 'Content-Type': 'application/json', Authorization: 'eyJ0eXBlIjoiand0IiwiYWxnIjoiSFMyNTYifQ.eyJ1c2VySWR4IjoxLCJpYXQiOjE2Njg3NTkzMjIsImV4cCI6MTY3MDIzMDU1MX0.uETLHjg2EDpy3KEmpRgVGcMw-vv2bvImh_Dpdj4RTtc' } })
        .then(res => {
          this.teamportfolio = res.data.result[0]
          this.commentCount = this.teamportfolio.commentCount
          this.content = this.teamportfolio.content
          this.interests = this.teamportfolio.interests
          this.likeCount = this.teamportfolio.likeCount
          this.memberCount = this.teamportfolio.memberCount
          this.members = this.teamportfolio.members
          this.region = this.teamportfolio.region
          this.staus = this.teamportfolio.staus
          this.teamImgUrl = this.teamportfolio.teamImgUrl
          this.title = this.teamportfolio.title
          this.type = this.teamportfolio.type
          for (let i = 0; i < this.members.length; i++) {
            this.memberimgurl.push(this.members[i].userImgUrl)
            this.memberagerange.push(this.members[i].ageRange)
            this.memberinterests.push(this.members[i].interests)
            this.membernickname.push(this.members[i].nickName)
            this.memberoccupation.push(this.members[i].occupation)
            this.memberregion.push(this.members[i].region)
            this.memberuseridx.push(this.members[i].userIdx)
            this.memberrole.push(this.members[i].role)
          }
          console.log(this.teamportfolio)
          console.log(this.memberimgurl[0])
          console.log(this.memberagerange)
          console.log(this.memberinterests)
          console.log(this.membernickname)
          console.log(this.memberoccupation)
          console.log(this.memberregion)
          console.log(this.memberuseridx)
          console.log(this.memberrole)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created () {
    // 미리 api에서 조회 데이터 가져옴
    this.getuserinfodata()
  }
}
</script>

<style scoped>
.upperitems{
  text-align: center;
  margin-inline: 5px;
}
</style>
