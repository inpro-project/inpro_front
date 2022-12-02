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

  <!--프로필이미지-->
  <div class="container2" @drop="onDrop($event)" @dragenter.prevent @dragover.prevent>
   <img v-if="repImgIdx!==-1" class="border10 me-2" :src= "teamImgs[repImgIdx].url" style="margin-left:10px">
   <img v-else class="border10 me-2" style="margin-left:10px">
  </div>

  <!--disc좌표평면(구현아직X)(api)-->
  <div class="border10">
  </div>

   <!-- 프로필사진수정 -->
   <div class="name" style="float:left; position: relative; left:20px; margin-right: 35px; margin-top:10px; margin-bottom:10px; font-size: 16px; color:gray;">
          프로필사진
        </div>
    <div class="input-group" style="width:92%; margin-bottom:20px">
  <input type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" style="position:relative; left:4%;" @change="changeProfile">
</div>

 <!--등록한 프로필이미지-->
 <div class="container1" v-for="(teamImg, idx) in teamImgs" :key="idx" type="button" @click="deleteimg(idx)">
   <img class="border12" :src= "teamImg.url" style="margin-left:7px; margin-bottom: 7px;" draggable="true" @dragstart="startDrag($event, idx)">
  </div>

  <div class=" inner" style="width:100%; height:10px">
  </div>

     <!-- 이름수정 -->
     <div class="fixname" style="height:30px; margin-bottom: 20px;">
          <div class="name" style="float:left; position: relative; top:5px; left:20px; margin-right: 35px; margin-top: 20px; font-size: 16px; color:gray;">
          제목
        </div>
        <div class="input-group mb-3" style="float:center; position: relative; left:6px; width:75%;">
  <input type="text" class="form-control" placeholder="제목" aria-label="Recipient's username" aria-describedby="button-addon2" style="margin-top: 20px;" @change="changetitle">

</div>
        </div>
  <div class=" inner" style="width:100%; height:10px">
  </div>
        <!--유형수정 -->
        <div class="fixinsterest" style="height:30px; margin-bottom: 20px;">
          <div class="interest" style="float:left; position: relative; left:20px; margin-right: 35px; font-size: 16px; color:gray; margin-top: 25px;">
          유형
        </div>
        <div class="input-group" style="float:center; position: relative; left:5px; width:75%;">
  <select class="form-select" id="interestinputGroupSelect" aria-label="Example select with button addon" style="margin-top: 20px;"  @change="changeType">
    <option selected>{{type}}</option>
    <option value="프로젝트">프로젝트</option>
    <option value="스터디">스터디</option>
    <option value="대외활동">대외활동</option>
    <option value="창업">창업</option>
    <option value="공모전">공모전</option>
    <option value="동아리">동아리</option>
  </select>
</div>
</div>
<div class=" inner" style="width:100%; height:10px">
  </div>

        <!-- 관심분야수정 -->
        <div class="fixinsterest" style="height:30px; margin-bottom: 20px;">
          <div class="interest" style="float:left; position: relative; left:20px; margin-right: 35px; font-size: 16px; color:gray; margin-top: 25px;">
          분야
        </div>
        <div class="input-group" style="float:center; position: relative; left:5px; width:75%;">
  <select class="form-select" id="interestinputGroupSelect" aria-label="Example select with button addon" style="margin-top: 20px;"  @change="changeInterest">
    <option selected>{{interests}}</option>
    <option value="경영/사무">경영/사무</option>
    <option value="마케팅/광고/홍보">마케팅/광고/홍보</option>
    <option value="IT/인터넷">IT/인터넷</option>
    <option value="디자인">디자인</option>
    <option value="무역/유통">무역/유통</option>
    <option value="영업/고객상담">영업/고객상담</option>
    <option value="서비스">서비스</option>
    <option value="연구개발/설계">연구개발/설계</option>
    <option value="생산/제조">생산/제조</option>
    <option value="건설">건설</option>
    <option value="의료">의료</option>
    <option value="미디어">미디어</option>
    <option value="전문/특수직">전문/특수직</option>
  </select>
</div>
</div>
<div class=" inner" style="width:100%; height:10px">
  </div>

        <!-- 지역수정 -->
        <div class="fixloc" style="height:30px; margin-bottom: 20px;">
          <div class="loc" style="float:left; position: relative; left:20px; margin-right: 35px; font-size: 16px; color:gray; margin-top: 25px;">
          지역
        </div>
        <div class="input-group" style="float:center; position: relative; left:5px; width:75%;">
  <select class="form-select" id="locinputGroupSelect" aria-label="Example select with button addon " style="margin-top: 20px;" @change="changeRegion">
    <option selected>{{region}}</option>
    <option value="서울">서울</option>
    <option value="인천">인천</option>
    <option value="경기">경기</option>
    <option value="강원">강원</option>
    <option value="충북">충북</option>
    <option value="충남">충남</option>
    <option value="세종">세종</option>
    <option value="대전">대전</option>
    <option value="전북">전북</option>
    <option value="전남">전남</option>
    <option value="광주">광주</option>
    <option value="경북">경북</option>
    <option value="경남">경남</option>
    <option value="대구">대구</option>
    <option value="울산">울산</option>
    <option value="부산">부산</option>
    <option value="제주">제주</option>
  </select>
</div>
</div>
<div class=" inner" style="width:100%; height:10px">
  </div>

      <hr style="border:solid; border-width: 1px; border-color: gray; background-color: gray; margin-top: 15px;">

      <!--한줄소개-->
      <div class='text' style="position:relative; text-align:left; font-size: 16px; color:gray;">
          &nbsp;&nbsp;&nbsp;&nbsp;소개
        </div>
        <div class="input-group" style="position:relative; width:90%; margin-top:10px;">
<textarea class="form-control" aria-label="With textarea" style="height:50px; position:relative; left:20px;" @change="changeComment"></textarea>
</div>
        <br/>
         <!--멤버-->
         <div class='text' style="position:relative; top:10px; margin-bottom:10px; text-align:left; font-size: 18px; color:gray;">
        &nbsp;&nbsp;&nbsp;&nbsp;멤버
      </div>
  <div v-if="members.length > 0" style="margin-left:5%; margin-top:20px; margin-bottom:10px; border-style:solid; border-radius:10px; background-color:#c0c0c0; border-width:0px; height:80px; width:90%" @click="gotoprofile">
    <img :src= "members[0].userImgUrl?members[0].userImgUrl:''" style="float:left; border-style:solid; border-radius: 10px; background-color: gray; border-width:0px; height:70px; width:70px; position:relative; left:5px; top:5px">
<div style="float:left; position:relative; left:20px;line-height:35px;top:5px">
  <div class="memberitem" style="display:flex;">
    <div class="upperitems" style="font-size:18px">{{members[0].nickName}}</div>
    <div class="upperitems" style="font-size:14px;">{{members[0].agerange}}</div>
    <div class="upperitems" style="font-size:14px;">{{members[0].region}}</div>
  </div>
  <div class="memberitem" style="display:flex;">
    <div class="upperitems" style="font-size:14px;">{{members[0].occupation}}</div>
    <div class="upperitems" style="font-size:14px;">{{members[0].interests}}</div>
    <div class="upperitems" style="font-size:14px; ">{{members[0].role}}</div>
  </div>
</div>
</div>
      <br/>
        <div class=" inner" style="width:100%;">
  </div>
  <button class="btn" type="submit" style="border-radius:15px; font-size:18px; background-color: #4a60d4; color: white; width:80%; height:50px;" @click="postteaminfo">팀 생성하기</button>
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
      content: '내용',
      region: '지역',
      status: 'active',
      title: '제목',
      type: '유형',
      interests: '분야',
      teamImgs: [],
      teamFiles: [],
      repImgIdx: -1
    }
  },
  methods: {
    getstatusinfo () {
      this.status = '모집중'
    },
    getmyinfo () {
      axios // 멤버에 내 프로필 등록
        .get(process.env.VUE_APP_API_BASE_URL + '/app/profiles', { headers: { 'Content-Type': 'application/json', Authorization: VueCookies.get('Authorization') } })
        .then(res => {
          console.log(res.data)
          const result = res.data.result
          const newMember = {
            ageRange: result.ageRange,
            interests: result.interests,
            nickName: result.nickName,
            occupation: result.occupation,
            region: result.region,
            role: '리더',
            userIdx: VueCookies.get('userIdx'),
            userImgUrl: result.userImgUrl,
            x: result.x,
            y: result.y
          }
          this.members.push(newMember)
        })
        .catch(err => {
          console.log(err)
        })
    },
    async userImgClustering (file) {
      const formData = new FormData()
      formData.append('file', file)
      await axios
        .post(process.env.VUE_APP_API_BASE_URL + '/predict/image', formData, { headers: { 'Content-Type': 'multipart/form-data' } })
        .then(res => {
          console.log(res)
          if (res.data.is_valid === true) {
            const teamImg = {
              img: file,
              url: URL.createObjectURL(file)
            }
            this.teamImgs.push(teamImg)
          } else {
            this.invalidImg()
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    invalidImg () {
      // 유해이미지로 판단 되었을때 로직
    },
    changetitle (t) {
      this.title = t.target.value
    },
    changeType (ty) {
      this.type = ty.target.value
    },
    changeOccupation (o) {
      this.occupation = o.target.value
    },
    changeRegion (r) {
      this.region = r.target.value
    },
    changeInterest (i) {
      this.interests = i.target.value
    },
    changeComment (c) {
      this.content = c.target.value
    },
    async changeProfile (p) {
      for (const file of p.target.files) {
        await this.userImgClustering(file)
      }
    },
    deleteimg (idx) {
      if (this.repImgIdx === idx) {
        this.repImgIdx = -1
      }
      this.teamImgs.splice(idx, 1)
    },
    async postteaminfo () { // 생성하고 post api 들어갈 함수
      const formData = new FormData()
      const postTeamReq = {
        title: this.title,
        type: this.type,
        content: this.content,
        interests: this.interests,
        region: this.region
      }
      const json = JSON.stringify(postTeamReq)
      const blob = new Blob([json], {
        type: 'application/json'
      })
      formData.append('postTeamReq', blob)

      if (this.repImgIdx !== -1) {
        const repImg = this.teamImgs[this.repImgIdx].file
        formData.append('repImg', repImg)
      } else {
        formData.append('repImg', null)
      }

      const teamImgs = []
      for (let i = 0; i < this.teamImgs.length; i++) {
        if (i !== this.repImgIdx) {
          teamImgs.push(this.teamImgs[i].file)
        }
      }
      formData.append('teamImgs', teamImgs)

      const teamFiles = []
      formData.append('teamFiles', teamFiles)

      await axios
        .post(process.env.VUE_APP_API_BASE_URL + '/app/teams', formData, { headers: { 'Content-Type': 'multipart/form-data', Authorization: VueCookies.get('Authorization') } })
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
      this.$router.push({ name: 'teamimade' })
    },
    startDrag (event, idx) {
      event.dataTransfer.dropEffect = 'move'
      event.dataTransfer.effectAllowed = 'move'
      event.dataTransfer.setData('idx', idx)
    },
    onDrop (event) {
      event.preventDefault()
      this.repImgIdx = parseInt(event.dataTransfer.getData('idx'))
    }
  },
  created () {
    // 미리 api에서 조회 데이터 가져옴
    this.getmyinfo()
    this.getstatusinfo()
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

.border12{
  float: left;
  position: relative;
  border-style: solid;
  border-radius: 20px;
  border-color: #c0c0c0;
  background-color: #c0c0c0;
  border-width: 1px;
  width: 120px;
  height: 120px;
  cursor: move;
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
.upperitems{
  margin-left: 10px;
}
</style>
