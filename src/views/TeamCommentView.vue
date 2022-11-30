<template>
<div class="outer ms-3">
  <div class=" inner" style="width: 90%">
    <div class="text-wrap me-2 mt-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="gray" class="bi bi-chat-left-text-fill" viewBox="0 0 16 16">
  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z"/>
</svg>
  </div>
  <div class="text-wrap">
    <p style="text-align:left; position:relative; top:4px; left:4px; font-size:20px;  color:gray">
 댓글
  </p>
  </div>
</div>
  </div>

  <div v-for="(comm, idx) in comments" :key="idx">
    <!--댓글-->
<div class="accordion" style=" border: solid; border-width:0px;" :id="this.comments[idx].commentIdx">
  <div class="accordion-item" style=" border: solid; border-width:0px">
    <h2 class="accordion-header" :id="this.comments[idx].commentIdx">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" :data-bs-target= "`#collapse${idx}`" aria-expanded="false" aria-controls="collapseOne" style="margin-top:10px; margin-bottom:10px; margin-left:1%; border-style:solid; border-radius:10px; background-color:white; border-width:0px; height:fit-content; width:98%">
            <img :src= "comments[idx].userImgUrl" style="float:left; border-style:solid; border-radius: 30px; background-color: gray; border-width:0px; height:50px; width:50px; position:relative; top:5px; left:10px;">
<div style="float:left; position:relative; left:20px;line-height:35px;">
  <div class="memberitem" style="display:flex;">
    <div class="upperitems">{{comments[idx].nickName}}</div>
    <div class="upperitems" style="font-size:14px;">{{comments[idx].createdAt}}</div>
  </div>
  <div class="memberitem" style="display:flex;">
    <div class="upperitems" style="font-size:14px; width:240px; text-align: left;">{{comments[idx].content}}</div>
  </div>
</div>
</button>
    </h2>
    <div :id= "`collapse${idx}`" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">

        <!--대댓글 입력-->
        <button class="btn btn-primary" type="button" data-bs-toggle="collapse" :data-bs-target= "`#collapse${idx+1000}`" aria-expanded="false" aria-controls="collapseExample" style="color:gray; font-size:16px; text-align:left; background-color: white; border-width: 0px;">대댓글</button>
        <div class="collapse" :id="`collapse${idx+1000}`">
  <div class="card card-body" style="border-width:0px">
    <div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" style="margin-right:10px; border-radius: 10px;" @change="inputreply">
  <button class="btn btn-outline-secondary" type="button" id="button-addon1" style="background-color:#4a60d4; color:white; font-weight:bold; border-radius: 10px;" @click="postnewreply(idx)">입력</button>
</div>
  </div>
</div>

        <!--대댓글-->
        <div v-for="(rep, index) in comments[idx].replys.length" :key="index">
    <div style="margin-top:10px; margin-bottom:10px; border-style:solid; border-radius:10px; background-color:white; border-width:0px; height:100px; width:100%">
            <img :src= "comments[idx].replys[index].userImgUrl" style="float:left; border-style:solid; border-radius: 30px; background-color: gray; border-width:0px; height:50px; width:50px; position:relative; top:5px; left:10px;">
<div style="float:left; position:relative; left:20px;line-height:35px;">
  <div class="memberitem" style="display:flex;">
    <div class="upperitems">{{comments[idx].replys[index].nickName}}</div>
    <div class="upperitems" style="font-size:14px;">{{comments[idx].replys[index].createdAt}}</div>
  </div>
  <div class="memberitem" style="display:flex;">
    <div class="upperitems" style="font-size:14px; width:280px; text-align: left;">{{comments[idx].replys[index].content}}</div>
  </div>
</div>
    </div>
</div>
      </div>
    </div>
  </div>
  </div>
</div>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<div style="position: fixed; bottom:70px; height:65px; border-style: solid; background-color: #4a60d4; border-width:0px; width:390px; z-index: 9999">
    <div class="input-group mb-3" style="position:relative; height:45px; margin-top:10px; width:95%; margin-left:2%;">
  <input type="text" class="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" style="border-radius:10px;" @change="inputcomment">
  <button class="btn btn-outline-secondary" type="button" id="button-addon1" style="margin-left: 10px; background-color:#4a60d4; color:#4a60d4; background-color: white; border-radius: 10px; font-weight: bold;" @click="postnewcomment">입력</button>
</div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      comments: [],
      commentCount: 0,
      comcount: 0,
      replcount: 0,
      replys: [],
      userName: '',
      userImgUrl: '',
      mycomment: {},
      myreply: {},
      content: '',
      now: '',
      ampm: '오전',
      year: '',
      hour: '',
      mynewcomment: {},
      parentIdx: '',
      childTdx: ''
    }
  },
  methods: {
    getcommentinfodata () {
      const teamIdx = this.$route.params.teamIdx
      axios
        .get(process.env.VUE_APP_API_BASE_URL + '/app/comments/' + teamIdx, { headers: { 'Content-Type': 'application/json', Authorization: 'eyJ0eXBlIjoiand0IiwiYWxnIjoiSFMyNTYifQ.eyJ1c2VySWR4IjoxLCJpYXQiOjE2Njg3NTkzMjIsImV4cCI6MTY3MDIzMDU1MX0.uETLHjg2EDpy3KEmpRgVGcMw-vv2bvImh_Dpdj4RTtc' } })
        .then(res => {
          console.log(res.data)
          this.comments = res.data.result
          this.comcount = this.comments.length
          for (let k = 0; k < this.comcount; k++) {
            this.replcount += this.comments[k].replys.length
          }
          this.commentCount = this.comcount + this.replcount
          console.log(this.commentCount)
        })
        .catch(err => {
          console.log(err)
        })
    },
    getuserinfodata () {
      axios
        .get(process.env.VUE_APP_API_BASE_URL + '/app/profiles', { headers: { 'Content-Type': 'application/json', Authorization: process.env.VUE_APP_ACCESS_TOKEN } })
        .then(res => {
          this.userName = res.data.result.nickName
          this.userImgUrl = res.data.result.userImgUrl
          console.log(this.userName)
          console.log(this.userImgUrl)
        })
        .catch(err => {
          console.log(err)
        })
    },
    inputcomment (p) {
      this.content = p.target.value
    },
    async postnewcomment () { // 새로운 댓글 입력
      const teamIdx = this.$route.params.teamIdx
      this.parentIdx = 0
      const mynewcomment = { content: this.content, parentIdx: this.parentIdx, teamIdx: teamIdx }
      const date = new Date()
      this.year = date.getFullYear() - 2000
      this.hour = date.getHours()
      if (date.getHours() >= 12) {
        this.ampm = '오후'
        this.hour = date.getHours() - 12
      }
      this.now = this.year + '.' + date.getMonth() + '.' + date.getDate() + ' ' + this.ampm + ' ' + this.hour + ':' + date.getMinutes()
      this.mycomment = { content: this.content, nickName: this.userName, userImgUrl: this.userImgUrl, createdAt: this.now }
      this.comments.push(this.mycomment)
      await axios
        .post(process.env.VUE_APP_API_BASE_URL + '/app/comments/', mynewcomment, { headers: { 'Content-Type': 'application/json', Authorization: 'eyJ0eXBlIjoiand0IiwiYWxnIjoiSFMyNTYifQ.eyJ1c2VySWR4IjoxLCJpYXQiOjE2Njg3NTkzMjIsImV4cCI6MTY3MDIzMDU1MX0.uETLHjg2EDpy3KEmpRgVGcMw-vv2bvImh_Dpdj4RTtc' } })
        .then(res => {
          console.log(res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    inputreply (p) {
      this.content = p.target.value
    },
    async postnewreply (idx) { // 새로운 대댓글 입력
      const teamIdx = this.$route.params.teamIdx
      this.parentIdx = this.comments[idx].commentIdx
      const mynewcomment = { content: this.content, parentIdx: this.parentIdx, teamIdx: teamIdx }
      const date = new Date()
      this.year = date.getFullYear() - 2000
      this.hour = date.getHours()
      if (date.getHours() >= 12) {
        this.ampm = '오후'
        this.hour = date.getHours() - 12
      }
      this.now = this.year + '.' + date.getMonth() + '.' + date.getDate() + ' ' + this.ampm + ' ' + this.hour + ':' + date.getMinutes()
      this.myreply = { content: this.content, nickName: this.userName, userImgUrl: this.userImgUrl, createdAt: this.now }
      this.comments[idx].replys.push(this.myreply)
      await axios
        .post(process.env.VUE_APP_API_BASE_URL + '/app/comments/', mynewcomment, { headers: { 'Content-Type': 'application/json', Authorization: 'eyJ0eXBlIjoiand0IiwiYWxnIjoiSFMyNTYifQ.eyJ1c2VySWR4IjoxLCJpYXQiOjE2Njg3NTkzMjIsImV4cCI6MTY3MDIzMDU1MX0.uETLHjg2EDpy3KEmpRgVGcMw-vv2bvImh_Dpdj4RTtc' } })
        .then(res => {
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created () {
    // 미리 api에서 조회 데이터 가져옴
    this.getcommentinfodata()
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
