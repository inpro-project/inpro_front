<template>
  <div class="outer ms-3">
  <div class=" inner" style="width: 90%">
    <div class="text-wrap me-2 mt-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="gray" class="bi bi-person-fill" viewBox="0 0 16 16">
  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg>
  </div>
  <div class="text-wrap">
    <p style="text-align:left; position:relative; top:4px; left:4px; font-size:20px;  color:gray">
 매칭된 유저
  </p>
  </div>
</div>
  </div>
  <div v-for="(liking, idx) in likings" :key="idx">
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

  </template>

<script>
import axios from 'axios'
export default {
  name: 'MemberBox',
  data () {
    return {
      likings: [],
      memberimgurl: [],
      membergender: [],
      membernickname: [],
      memberagerange: [],
      memberregion: [],
      memberinterests: [],
      memberoccupation: [],
      memberlikingidx: []
    }
  },
  methods: {
    getuserinfodata () {
      axios
        .get(process.env.VUE_APP_API_BASE_URL + '/app/matched-users', { headers: { 'Content-Type': 'application/json', Authorization: 'eyJ0eXBlIjoiand0IiwiYWxnIjoiSFMyNTYifQ.eyJ1c2VySWR4IjoxLCJpYXQiOjE2Njg3NTkzMjIsImV4cCI6MTY3MDIzMDU1MX0.uETLHjg2EDpy3KEmpRgVGcMw-vv2bvImh_Dpdj4RTtc' } })
        .then(res => {
          this.likings = res.data.result
          console.log(this.likings)
          for (let i = 0; i < this.likings.length; i++) {
            this.memberimgurl.push(this.likings[i].userImgUrl)
            this.memberagerange.push(this.likings[i].ageRange)
            this.memberinterests.push(this.likings[i].interests)
            this.membernickname.push(this.likings[i].nickName)
            this.memberoccupation.push(this.likings[i].occupation)
            this.memberregion.push(this.likings[i].region)
            this.membergender.push(this.likings[i].gender)
            this.memberlikingidx.push(this.likings[i].matchedUserIdx)
          }
          console.log(this.memberagerange)
          console.log(this.memberinterests)
          console.log(this.membernickname)
          console.log(this.memberoccupation)
          console.log(this.memberregion)
          console.log(this.memberimgurl)
          console.log(this.membergender)
          console.log(this.memberlikingidx)
        })
        .catch(err => {
          console.log(err)
        })
    },
    gotoprofile (idx) {
      const userIdx = this.memberlikingidx[idx]
      this.$router.push({ name: 'matcheduserinfo', params: { userIdx: userIdx } })
    }
  },
  created () {
    // 미리 api에서 조회 데이터 가져옴
    this.getuserinfodata()
  }
}
</script>

<style scoped>
.outer{
  text-align: left;
}
.inner{
  display: inline-block;
}
.text-wrap{
  display: inline-block;
}

.upperitems{
  text-align: center;
  margin-inline: 5px;
}
</style>
