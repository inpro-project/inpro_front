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
 <div class="discFeature">
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

  <!--프로필이미지(api)-->
  <div>
   <img class="border10 me-2" :src= "teamImgUrl" style="margin-left:10px">
  </div>

  <!--disc좌표평면(구현아직X)(api)-->
  <div class="border10">
  </div>

  <!--이름-->
      <div class="nas" style="height:30px; margin-top: 20px;">
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
        &nbsp;&nbsp;&nbsp;&nbsp;멤버
      </div>
      <div v-for="(member, idx) in members" :key="idx">
  <button type="button" style="margin-top:10px; margin-bottom:10px; border-style:solid; border-radius:10px; background-color:#c0c0c0; border-width:0px; height:80px; width:90%" @click="gotoprofile">
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

      <router-link to="/fixuserinfo">
        <div class=" inner" style="width:100%;">
  </div>
  <button class="btn" type="submit" style="border-radius:15px; font-size:18px; background-color: #4a60d4; color: white; width:50%; height:50px;" @click="postnewteam">정보 수정하기</button>
</router-link>
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
export default {
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
          this.status = this.teamportfolio.status
          if (this.status === 'active') {
            this.status = '모집중'
          } else if (this.status === 'inactive') {
            this.status = '모집완료'
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
          console.log(res.data)
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
    },
    postnewteam () {

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

.border10{
  float: left;
  position: relative;
  border-style: solid;
  border-radius: 20px;
  border-color: #c0c0c0;
  background-color: #c0c0c0;
  border-width: 1px;
  width: 180px;
  height: 180px;
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
  width:120px;
  margin-top: 15px;
  margin-bottom:15px;
  color:white;
}

.middata{
  display:inline-block;
  width:30%;
}
.middataitem{
  display: inline-block;
}
.upperitems{
  margin-left: 10px;
}
</style>
