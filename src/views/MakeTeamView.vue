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
   <img class="border10 me-2" :src= "teamRepUrl" style="margin-left:10px">
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
 <div class="container1" v-for="(img, idx) in teamImgUrl" :key="idx" type="button" @click="deleteimg(idx)">
   <img class="border12" :src= "teamImgUrl[idx]" style="margin-left:7px; margin-bottom: 7px;" draggable="true" @dragstart="startDrag($event, idx)">
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
  <div style="margin-left:5%; margin-top:20px; margin-bottom:10px; border-style:solid; border-radius:10px; background-color:#c0c0c0; border-width:0px; height:80px; width:90%" @click="gotoprofile">
    <img :src= "memberimgurl" style="float:left; border-style:solid; border-radius: 10px; background-color: gray; border-width:0px; height:70px; width:70px; position:relative; left:5px; top:5px">
<div style="float:left; position:relative; left:20px;line-height:35px;top:5px">
  <div class="memberitem" style="display:flex;">
    <div class="upperitems" style="font-size:18px">{{membernickname}}</div>
    <div class="upperitems" style="font-size:14px;">{{memberagerange}}</div>
    <div class="upperitems" style="font-size:14px;">{{memberregion}}</div>
  </div>
  <div class="memberitem" style="display:flex;">
    <div class="upperitems" style="font-size:14px;">{{memberoccupation}}</div>
    <div class="upperitems" style="font-size:14px;">{{memberinterests}}</div>
    <div class="upperitems" style="font-size:14px; ">{{memberrole}}</div>
  </div>
</div>
</div>
      <br/>

      <router-link to="/teamimade">
        <div class=" inner" style="width:100%;">
  </div>
  <button class="btn" type="submit" style="border-radius:15px; font-size:18px; background-color: #4a60d4; color: white; width:80%; height:50px;" @click="postteaminfo">팀 생성하기</button>
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
import VueCookies from 'vue-cookies'
export default {
  data () {
    return {
      content: '내용',
      region: '지역',
      status: 'active',
      teamImgUrl: [], // 초기 이미지 업로드는 방장 사진
      teamRepUrl: '',
      title: '제목',
      type: '유형',
      interests: '분야',
      memberimgurl: '',
      memberrole: '',
      membernickname: '',
      memberagerange: '',
      memberregion: '',
      memberinterests: '',
      memberoccupation: ''
    }
  },
  methods: {
    getstatusinfo () {
      this.status = '모집중'
    },
    getmyinfo () {
      console.log(VueCookies.get('Authorization'))
      axios
        .get(process.env.VUE_APP_API_BASE_URL + '/app/profiles', { headers: { 'Content-Type': 'application/json', Authorization: VueCookies.get('Authorization') } })
        .then(res => {
          console.log(res.data)
          this.membernickname = res.data.result.nickName
          this.gender = res.data.result.gender
          this.memberagerange = res.data.result.ageRange
          this.memberregion = res.data.result.region
          this.memberoccupation = res.data.result.occupation
          this.memberinterests = res.data.result.interests
          this.memberimgurl = res.data.result.userImgUrl
          this.teamImgUrl.push(this.memberimgurl)
          this.teamRepUrl = this.teamImgUrl
          this.memberrole = '리더'
        })
        .catch(err => {
          console.log(err)
        })
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
      this.comment = c.target.value
    },
    changeProfile (p) {
      this.file = p.target.files[0]
      this.teamImgUrl.push(URL.createObjectURL(this.file))
    },
    deleteimg (idx) {
      this.teamImgUrl.splice(idx, 1)
    },
    async postteaminfo () { // 생성하고 post api 들어갈 함수 --> 수정 필요
      // const newteamportfolio = { title: this.title, type: this.type, content: this.content, interests: this.interests, region: this.region }
      const formData = new FormData()
      formData.append('repImg', this.teamRepUrl)
      formData.append('teamImgs', this.teamImgUrl)
      formData.append('title', this.title)
      formData.append('type', this.type)
      formData.append('content', this.content)
      formData.append('interests', this.interests)
      formData.append('region', this.region)
      console.log(VueCookies.get('Authorization'))
      await axios
        .post(process.env.VUE_APP_API_BASE_URL + '/app/teams', formData, { headers: { 'Content-Type': 'application/json', Authorization: VueCookies.get('Authorization') } })
        .then(res => {
          console.log(res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    startDrag (event, idx) {
      event.dataTransfer.dropEffect = 'move'
      event.dataTransfer.effectAllowed = 'move'
      event.dataTransfer.setData('selectItem', this.teamImgUrl[idx])
    },
    onDrop (event) {
      event.preventDefault()
      const selectItem = event.dataTransfer.getData('selectItem') // 드래그앤 드롭한 아이템
      this.teamRepUrl = selectItem
      console.log(this.teamRepUrl)
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
