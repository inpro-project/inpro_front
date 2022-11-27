<template>
  <div class="outer ms-3 mt-2">
  <div class=" inner" style="width: 90%">
    <div class="text-wrap me-2 mt-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="gray" class="bi bi-people-fill" viewBox="0 0 16 16">
  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
  <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>
  <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
</svg>
  </div>
  <div class="text-wrap">
    <p style="text-align:left; position:relative; top:4px; left:4px; font-size:20px;  color:gray">
내가 Like한 팀
  </p>
  </div>
</div>
  </div>
  <div v-for="(liking, idx) in likings" :key="idx">
    <router-link to="/otherteaminfo">
    <button type="button" style="margin-top:10px; margin-bottom:10px; border-style:solid; border-radius:10px; background-color:#c0c0c0; border-width:0px; height:80px; width:90%" @click="gotoprofile">
      <img :src= "teamimgurl[idx]" style="float:left; border-style:solid; border-radius: 10px; background-color: gray; border-width:0px; height:70px; width:70px; position:relative; left:5px;">
  <div style="float:left; position:relative; left:20px;line-height:35px;">
    <div class="memberitem" style="display:flex;">
      <div class="upperitems" style="font-size:18px">{{teamtitle[idx]}}</div>
    </div>
    <div class="memberitem" style="display:flex;">
      <div class="upperitems" style="font-size:14px;">{{teamtype[idx]}}</div>
      <div class="upperitems" style="font-size:14px;">{{teamregion[idx]}}</div>
      <div class="upperitems" style="font-size:14px;">{{teaminterests[idx]}}</div>
    </div>
  </div>
  </button>
</router-link>
  </div>

  </template>

<script>
import axios from 'axios'
export default {
  name: 'MemberBox',
  data () {
    return {
      likings: [],
      teamimgurl: [],
      teamtitle: [],
      teamtype: [],
      teamregion: [],
      teaminterests: [],
      teamIdx: [],
      userIdx: []
    }
  },
  methods: {
    getuserinfodata () {
      axios
        .get('http://prod.inpro-server.shop:9000/app/team-likings', { headers: { 'Content-Type': 'application/json', Authorization: 'eyJ0eXBlIjoiand0IiwiYWxnIjoiSFMyNTYifQ.eyJ1c2VySWR4IjoxLCJpYXQiOjE2Njg3NTkzMjIsImV4cCI6MTY3MDIzMDU1MX0.uETLHjg2EDpy3KEmpRgVGcMw-vv2bvImh_Dpdj4RTtc' } })
        .then(res => {
          this.likings = res.data.result
          console.log(this.likings)
          for (let i = 0; i < this.likings.length; i++) {
            this.teamimgurl.push(this.likings[i].teamRepUrl)
            this.teaminterests.push(this.likings[i].interests)
            this.teamtitle.push(this.likings[i].title)
            this.teamregion.push(this.likings[i].region)
            this.teamtype.push(this.likings[i].type)
            this.teamIdx.push(this.likings[i].teamIdx)
            this.userIdx.push(this.likings[i].userIdx)
          }
          console.log(this.teaminterests)
          console.log(this.teamimgurl)
          console.log(this.teamregion)
          console.log(this.teamtitle)
          console.log(this.teamtype)
          console.log(this.teamIdx)
          console.log(this.userIdx)
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
