<template>
    <div v-for="(liking, idx) in likings" :key="idx">
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
    </div>
    <br/>
    <br/>
    <router-link to="/maketeam">
        <div class=" inner" style="width:100%;">
  </div>
  <button class="btn" type="submit" style="border-radius:15px; font-size:18px; background-color: #4a60d4; color: white; width:50%; height:50px;">팀 새로 만들기</button>
</router-link>
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
        .get('http://prod.inpro-server.shop:9000/app/matched-teams', { headers: { 'Content-Type': 'application/json', Authorization: 'eyJ0eXBlIjoiand0IiwiYWxnIjoiSFMyNTYifQ.eyJ1c2VySWR4IjoxLCJpYXQiOjE2Njg3NTkzMjIsImV4cCI6MTY3MDIzMDU1MX0.uETLHjg2EDpy3KEmpRgVGcMw-vv2bvImh_Dpdj4RTtc' } })
        .then(res => {
          this.likings = res.data.result
          console.log(this.likings)
          for (let i = 0; i < this.likings.length; i++) {
            this.teamimgurl.push(this.likings[i].teamRepUrl)
            this.teaminterests.push(this.likings[i].interests)
            this.teamtitle.push(this.likings[i].title)
            this.teamregion.push(this.likings[i].region)
            this.teamtype.push(this.likings[i].type)
            this.teamIdx.push(this.likings[i].matchedTeamIdx)
          }
          console.log(this.teaminterests)
          console.log(this.teamimgurl)
          console.log(this.teamregion)
          console.log(this.teamtitle)
          console.log(this.teamtype)
          console.log(this.teamIdx)
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
