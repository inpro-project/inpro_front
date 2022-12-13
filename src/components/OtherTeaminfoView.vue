<template>
<div class="outer ms-3">
  <div class=" inner" style="width: 90%">
    <div class="text-wrap me-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="gray" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg>
  </div>
  <div class="text-wrap">
    <p style="text-align:left; position:relative; top:4px; left:4px; font-size:20px;  color:gray">
 팀 프로필
  </p>
  </div>
</div>
  </div>

  <div>
 <!--유형, 분야-->
 <div class="discFeature" style="display:flex; justify-content: space-between; width:100%; min-width: 390px;">
    <div class="mytag" style="margin-left:5px; margin-right:5px">
        {{type}}
      </div>
      <div class="mytag" style="margin-left:5px; margin-right:5px">
        {{interests}}
      </div>
      <div class="mytag" style="margin-left:5px; margin-right:5px">
        {{status}}
      </div>
</div>
  </div>

  <div class=" inner" style="width:100%; height:1px">
  </div>

  <!--프로필이미지(api)-->
  <div
    v-if="teamImgUrl==0"
    class="border10 me-2" style="margin-left:10px">
    <div class="profileicon">
      <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="gray" class="bi bi-person-bounding-box" viewBox="0 0 16 16">
        <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5z"/>
        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
      </svg>
    </div>
    <div class="profileicontext">
    </div>
  </div>

  <div v-else> <!--이미지 버튼 클릭시 모달 팝업-->
    <img class="border10 me-2" style="margin-left:10px" :src="teamImgUrl" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="getimg">
  </div>

  <!--모달 팝업-->
  <div v-if="teamimgs.length !== 0" class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style="min-width:390px">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">팀 프로필</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">

        <!--이미지 캐러셀-->
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img :src="teamimgs[0]" class="d-block w-100" alt="...">
    </div>
    <div v-for="(img, idx) in teamimgsec" :key="idx">
    <div class="carousel-item">
      <img :src="img" class="d-block w-100" alt="...">
    </div>
  </div>
</div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

      </div>
    </div>
  </div>
</div>
  <!--disc좌표평면(구현아직X)(api)-->
  <div  class="border10 me-2" style="display:flex; justify-content:center; align-items: center;">
  <div class="border10" style="display:flex; justify-content:center; align-items: center; border-radius: 50%; border-color: black; border-width:2px;">
    <div style="position:absolute; bottom:50%; border-style:solid; border-width:0px; width:177px; height:1px; background-color:black"></div>
    <div style="position:absolute; left:50%; border-style:solid; border-width:0px; width:1px; height:177px; background-color:black"></div>
    <div style="position:absolute; left: 25%; bottom:60%; font-weight:bold; font-size:24px; color:gray">D</div>
    <div style="position:absolute; left: 70%; bottom:60%; font-weight:bold; font-size:24px; color:gray">I</div>
    <div style="position:absolute; left: 70%; bottom:20%; font-weight:bold; font-size:24px; color:gray">S</div>
    <div style="position:absolute; left: 25%; bottom:20%; font-weight:bold; font-size:24px; color:gray">C</div>
    <div class="discdot2" :style="{left: this.searchX + 79 + 'px', bottom: this.searchY + 80  + 'px'}"></div> <!--탐색-->
    <div class="discdot" :style="{ left: this.$store.state.myrepX + 80  + 'px', bottom: this.$store.state.myrepY + 80 + 'px'}"></div> <!--나-->
    <!--<div class="discdot1" :style="{ left: 80  + 'px', bottom: 80  + 'px'}"></div>-->
  </div>
</div>

  <div class=" inner" style="width:100%; height:0px">
  </div>

  <!--각 점의 설명-->
  <div style="width:100%; display:flex; align-items:center; justify-content:space-between">
  <div class = "discdot2explain ms-4"></div>
  <div style="position:relative; left:-5%; color: gray;">팀장의 탐색 지표</div>
  <div class = "discdotexplain"></div>
  <div class="explain me-3" style="position:relative; left:-5%; color: gray;">나의 DISC 지표</div>
  </div>

  <div class=" inner" style="width:100%; height:0px">
  </div>

  <!--일치율 -->
<div style="width:100%; height:30px; font-weight:bold; font-size:18px">회원님이 팀장의 이상향과 {{percent}}% 일치합니다!</div>

  <!--이름-->
      <div class="nas" style="height:max-content; margin-top: 20px;">
        <div class="username fw-bold" style="position: relative; left:20px; margin-right: 35px; font-size: 28px;">
        {{title}}
      </div>
      </div>

  <div class=" inner" style="width:100%; height:10px">
  </div>

  <!--좋아요-->
      <div class="middata">
        <div class="middataitem">
        <div class="location">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="gray" class="bi bi-person-heart" viewBox="0 0 16 16">
  <path d="M9 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 8c0 1 1 1 1 1h10s1 0 1-1-1-4-6-4-6 3-6 4Zm13.5-8.09c1.387-1.425 4.855 1.07 0 4.277-4.854-3.207-1.387-5.702 0-4.276Z"/>
</svg>
        </div>
      </div>
      <div class="middataitem">
        <div class="locationtext" style="position: relative; top:3px; left:10px; font-size:18px;">
          {{likeCount}}
        </div>
      </div>
      </div>

  <!--댓글-->
  <div class="middata">
        <div class="middataitem" type="button" @click="gotocomment">
        <div class="location">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="gray" class="bi bi-chat-left-text-fill" viewBox="0 0 16 16">
  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z"/>
</svg>
        </div>
      </div>
      <div class="middataitem">
        <div class="locationtext" style="position: relative; top:3px; left:10px; font-size:18px; color:black">
          {{commentCount}}
        </div>
      </div>
      </div>

       <!--지역-->
       <div class="middata">
        <div class="middataitem">
        <div class="location">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="gray" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
</svg>
        </div>
      </div>
      <div class="middataitem">
        <div class="locationtext" style="position: relative; top:3px; left:4px; font-size:18px;">
          {{region}}
        </div>
      </div>
      </div>

          <!--멤버수-->
          <div class="middata">
        <div class="middataitem">
        <div class="location">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="gray" class="bi bi-people-fill" viewBox="0 0 16 16">
  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
  <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>
  <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
</svg>
        </div>
      </div>
      <div class="middataitem">
        <div class="locationtext" style="position: relative; top:3px; left:10px; font-size:18px;">
          {{memberCount}}
        </div>
      </div>
      </div>

      <hr style="border:solid; border-width: 1px; border-color: gray; background-color: gray; margin-top: 15px;">

      <!--한줄소개-->
      <div class='text' style="position:relative; text-align:left; font-size: 18px; color:gray;">
        &nbsp;&nbsp;&nbsp;&nbsp;소개
      </div>
      <div class="comment" style="margin-left:5%; margin-top:10px; width:90%; height:60px; font-size:18px;">
        {{content}}
      </div>

         <!--멤버-->
         <div class='text' style="position:relative; top:10px; margin-bottom:10px; text-align:left; font-size: 18px; color:gray;">
        &nbsp;&nbsp;&nbsp;&nbsp;멤버 <div v-if="status === '활동종료'" type="button" style="float:right; font-size: 14px; margin-right: 10%; border-radius: 10px; width:100px; border-width: 0px; background-color: gray; color: white; text-align: center;" @click="gotoreview">팀원리뷰하기</div>
      </div>
      <div v-for="(member, idx) in members" :key="idx">
  <button type="button" style="margin-top:10px; margin-bottom:10px; border-style:solid; border-radius:10px; background-color:#c0c0c0; border-width:0px; height:80px; width:90%" @click="gotoprofile(idx)">
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
  name: 'OtherTeaminfo',
  data () {
    return {
      teamportfolio: [],
      commentCount: '',
      status: '',
      content: '',
      interests: '',
      leaderIdx: '',
      likeCount: '',
      memberCount: '',
      members: [],
      region: '',
      teamImgUrl: '',
      teamimgs: [],
      teamimgsec: [],
      title: '',
      type: '',
      memberimgurl: [],
      memberrole: [],
      membernickname: [],
      memberagerange: [],
      memberregion: [],
      memberinterests: [],
      memberoccupation: [],
      memberuseridx: [],
      userDiscX: 0,
      userDiscY: 0,
      searchX: 0,
      searchY: 0,
      percent: 0
    }
  },
  methods: {
    getuserinfodata () {
      const teamIdx = this.$store.state.otherteamIdx
      axios
        .get(process.env.VUE_APP_API_BASE_URL + '/app/teams/' + teamIdx, { headers: { 'Content-Type': 'application/json', Authorization: VueCookies.get('Authorization') } })
        .then(res => {
          console.log(res.data.result)
          this.teamportfolio = res.data.result[0]
          this.commentCount = this.teamportfolio.commentCount
          this.content = this.teamportfolio.content
          this.interests = this.teamportfolio.interests
          this.likeCount = this.teamportfolio.likeCount
          this.memberCount = this.teamportfolio.memberCount
          this.members = this.teamportfolio.members
          this.region = this.teamportfolio.region
          this.staus = this.teamportfolio.staus
          this.teamImgUrl = this.teamportfolio.teamImgUrl // 대표 이미지
          this.title = this.teamportfolio.title
          this.type = this.teamportfolio.type
          this.status = this.teamportfolio.status
          this.searchX = Number(this.teamportfolio.searchDiscAndPercent.x).toFixed(1) * 5
          this.searchY = Number(this.teamportfolio.searchDiscAndPercent.y).toFixed(1) * 5
          this.percent = this.teamportfolio.searchDiscAndPercent.percent
          console.log('searchX: ' + this.searchX)
          console.log('searchY: ' + this.searchY)

          this.$emit('setChatRoomIdx', this.teamportfolio.chatRoomIdx)
          if (this.status === 'active') {
            this.status = '모집중'
          } else if (this.status === 'inactive') {
            this.status = '모집완료'
          } else if (this.status === 'finish') {
            this.status = '활동종료'
          }
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
        })
        .catch(err => {
          console.log(err)
        })
    },
    gotoprofile (idx) {
      this.$store.state.otheruserIdx = this.memberuseridx[idx]
      this.$router.push({ name: 'otheruserinfo' })
    },
    gotocomment () {
      const teamIdx = this.$store.state.otherteamIdx
      this.$router.push({ name: 'teamcomment', params: { teamIdx: teamIdx } })
    },
    getimg () { // 팀 이미지 정보
      const teamIdx = this.$store.state.otherteamIdx
      axios
        .get(process.env.VUE_APP_API_BASE_URL + '/app/team-imgs/' + teamIdx, { headers: { 'Content-Type': 'application/json', Authorization: 'eyJ0eXBlIjoiand0IiwiYWxnIjoiSFMyNTYifQ.eyJ1c2VySWR4IjoxLCJpYXQiOjE2Njg3NTkzMjIsImV4cCI6MTY3MDIzMDU1MX0.uETLHjg2EDpy3KEmpRgVGcMw-vv2bvImh_Dpdj4RTtc' } })
        .then(res => {
          console.log(res.data.result)
          for (let i = 0; i < res.data.result.length; i++) {
            this.teamimgs.push(res.data.result[i].teamFileUrl)
          }
          console.log(this.teamimgs)
          for (let i = 1; i < res.data.result.length; i++) {
            this.teamimgsec.push(res.data.result[i].teamFileUrl)
          }
          console.log(this.teamimgsec)
        })
        .catch(err => {
          console.log(err)
        })
    },
    gotoreview () {
      const teamIdx = this.$store.state.otherteamIdx
      this.$router.push({ name: 'teamreview', params: { teamIdx: teamIdx } })
    }
  },
  created () {
    console.log(this.$route)
    // 미리 api에서 조회 데이터 가져옴
    this.getuserinfodata()
  }
}

</script>

<style scoped>
.profileicon{
  position: relative;
  top:30%;
}
.outer{
  text-align: left;
}
.inner{
  display: inline-block;
}
.text-wrap{
  display: inline-block;
}

.border10{
  float: left;
  position: relative;
  border-style: solid;
  border-radius: 20px;
  border-color: #c0c0c0;
  background-color: #c0c0c0;
  border-width: 1px;
  width: 181px;
  height: 181px;
}

.nas{
float:left;
position: relative;
}
.mytag{
  border-style: solid;
  border-radius: 20px;
  background-color: #4a60d4;
  border-color: #4a60d4;
  text-align: center;
  float: left;
  padding:5px;
  position: relative;
  width:30%;
  min-width:120px;
  margin-top: 15px;
  margin-bottom:15px;
  color:white;
}

.middata{
  display:inline-block;
  width:20%;
}
.middataitem{
  display: inline-block;
}
.upperitems{
  margin-left: 10px;
}

.discdot {
  border-radius:10px;
  position:absolute;
  height:13px;
  width:13px;
  border-width:0px;
  background-color: red;
}

.discdotexplain {
  border-radius:10px;
  position:relative;
  height:13px;
  width:13px;
  border-width:0px;
  background-color: red;
}

.discdot1 {
  border-radius:10px;
  position:absolute;
  height:13px;
  width:13px;
  border-width:0px;
  background-color: blue;
}

.discdot2 {
  position:absolute;
  height:17px;
  width:17px;
  border-width:0px;
  background-color: yellow;
}

.discdot2explain {
  position:relative;
  height:17px;
  width:17px;
  border-width:0px;
  background-color: yellow;
}
</style>
