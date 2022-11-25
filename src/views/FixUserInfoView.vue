<template>
  <div class="outer ms-3">
    <div class=" inner" style="width: 90%">
      <div class="text-wrap me-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="gray" class="bi bi-pencil-fill" viewBox="0 0 16 16">
  <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
</svg>
    </div>
    <div class="text-wrap">
      <p style="text-align:left; position:relative; top:4px; left:4px; font-size:20px;  color:gray">
   나의 프로필 수정
    </p>
    </div>
  </div>
    </div>
    <div class="border10 me-2" style="margin-left:10px">
      <div class="profileicon">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="gray" class="bi bi-person-bounding-box" viewBox="0 0 16 16">
    <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5z"/>
    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  </svg>
      </div>
      <div class="profileicontext">
        프로필 사진 업로드
      </div>
    </div>
    <div class="border10">
    </div>

    <!-- 프로필사진수정 -->
    <div class="name" style="float:left; position: relative; left:20px; margin-right: 35px; margin-top:10px; margin-bottom:10px; font-size: 16px; color:gray;">
          프로필사진
        </div>
    <div class="input-group" style="width:92%; margin-bottom:20px">
  <input type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" style="position:relative; left:4%;" @change="changeProfile">
  <button class="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04"  style="position:relative; left:4%;" @click="postimg()">수정</button>
</div>

     <!-- 이름수정 -->
        <div class="fixname" style="height:30px; margin-bottom: 20px;">
          <div class="name" style="float:left; position: relative; top:5px; left:20px; margin-right: 35px; font-size: 16px; color:gray;">
          이름
        </div>
        <div class="input-group mb-3" style="float:center; position: relative; left:6px; width:75%;">
  <input type="text" class="form-control" placeholder="이름" aria-label="Recipient's username" aria-describedby="button-addon2" @change="changeName">

</div>
        </div>

        <!-- 연령대수정 -->
        <div class="fixage" style="height:30px; margin-bottom: 20px;">
          <div class="age" style="float:left; position: relative; top:5px; left:20px; margin-right: 35px; font-size: 16px; color:gray;">
          연령대
        </div>
        <div class="input-group" style="float:center; position: relative; left:10px; width:70%;">
  <select class="form-select" id="ageinputGroupSelect" aria-label="Example select with button addon" @change="changeAgeRange">
    <option selected>{{ageRange}}</option>
    <option value="10대">10대</option>
    <option value="20대">20대</option>
    <option value="30대">30대</option>
    <option value="40대">40대</option>
    <option value="50대">50대</option>
    <option value="60대">60대</option>
  </select>

</div>
        </div>

 <!-- 직업수정 -->
 <div class="fixoccupation" style="height:30px; margin-bottom: 20px;">
          <div class="occupation" style="float:left; position: relative; left:20px; margin-right: 35px; font-size: 16px; color:gray;">
          직업
        </div>
        <div class="input-group" style="float:center; position: relative; left:5px; width:75%;">
  <select class="form-select" id="occupationinputGroupSelect" aria-label="Example select with button addon" @change="changeOccupation">
    <option selected>{{occupation}}</option>
    <option value="학생">학생</option>
    <option value="대학원생">대학원생</option>
    <option value="직장인">직장인</option>
    <option value="취준생">취준생</option>
    <option value="자영업자">자영업자</option>
  </select>

</div>
 </div>

        <!-- 지역수정 -->
        <div class="fixloc" style="height:30px; margin-bottom: 20px;">
          <div class="loc" style="float:left; position: relative; left:20px; margin-right: 35px; font-size: 16px; color:gray;">
          지역
        </div>
        <div class="input-group" style="float:center; position: relative; left:5px; width:75%;">
  <select class="form-select" id="locinputGroupSelect" aria-label="Example select with button addon" @change="changeRegion">
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

        <!-- 관심분야수정 -->
        <div class="fixinsterest" style="height:30px; margin-bottom: 20px;">
          <div class="interest" style="float:left; position: relative; left:20px; margin-right: 35px; font-size: 16px; color:gray;">
          분야
        </div>
        <div class="input-group" style="float:center; position: relative; left:5px; width:75%;">
  <select class="form-select" id="interestinputGroupSelect" aria-label="Example select with button addon"  @change="changeInterest">
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
<hr style="border:solid; border-width: 1px; border-color: gray; background-color: gray; margin-top: 30px;">

<!--한줄소개 수정-->
        <div class='text' style="position:relative; text-align:left; font-size: 16px; color:gray;">
          &nbsp;&nbsp;&nbsp;&nbsp;한줄소개
        </div>
        <div class="input-group" style="position:relative; width:90%; margin-top:10px;">
<textarea class="form-control" aria-label="With textarea" style="height:50px; position:relative; left:20px;" @change="changeComment"></textarea>
</div>
        <br/>

<!--포트폴리오 수정-->
        <div class="repportfoliocategory" style="width:100%; height:40px;">
          <div class="work" style="width:10%">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" class="bi bi-briefcase" viewBox="0 0 16 16">
    <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z"/>
  </svg>
          </div>
          <div class="work" style="width:80%;">
            {{this.title1}}
          </div>
          <div class="work" style="float:right; width:10%">
            <router-link to = '/fixworklist'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" class="bi bi-search" viewBox="0 0 16 16">
    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
  </svg>
</router-link>
          </div>
        </div>
        <div class="repportfoliocategory" style="width:100%; height:40px;">
          <div class="win" style="width:10%">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" class="bi bi-trophy" viewBox="0 0 16 16">
    <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935zM3.504 1c.007.517.026 1.006.056 1.469.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.501.501 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667.03-.463.049-.952.056-1.469H3.504z"/>
  </svg>
          </div>
          <div class="win" style="width:80%;">
            {{this.title2}}
          </div>
          <div class="win" style="float:right; right:10px">
            <router-link to ='/fixwinlist'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" class="bi bi-search" viewBox="0 0 16 16">
    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
  </svg>
</router-link>
          </div>
        </div>
        <div class="repportfoliocategory" style="width:100%; height:40px;">
          <div class="url" style="width:10%">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" class="bi bi-link-45deg" viewBox="0 0 16 16">
    <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
    <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
  </svg>
          </div>
          <div class="url" style="width:80%;">
            {{this.title3}}
          </div>
          <div class="url" style="float:right; width:10%">
            <router-link to = '/fixurllist'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" class="bi bi-search" viewBox="0 0 16 16">
    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
  </svg>
</router-link>
          </div>
        </div>
  <br/>
  <hr style="border:solid; border-width: 1px; border-color: gray; background-color: gray; margin-top: 10px;">

  <!--유저태그삭제-->

  <button class="usertag" v-for="(userTag, idx) in userTags" :key="{idx}" type="button" style="float:left; margin-left:8px; height:38.8px" @click="deletetag(idx)">
    <div style="position:relative; top:3px; width:90%; font-size:14px;">{{userTags[idx].name}}</div>
    <div style="position:relative; width:10%; bottom:22px; float:right">x</div>
  </button>

          <!--유저태그등록-->
        <div class='text' style="text-align:left; width:100%; font-size: 16px; color:gray;">
          &nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        <div class="input-group mb-3" style="width:80%">
  <input type="text1" class="form-control" placeholder="나의 태그 등록" aria-label="Recipient's username" aria-describedby="button-addon2" style="position:relative; left:45px;" @change="inputtag">
  <button class="btn btn-outline-secondary" type="button" id="button-addon2" style="position:relative; left:45px" @click="posttag">등록</button>
</div>

        <router-link to="/userinfo">
          <div class=" inner" style="width:100%;">
    </div>
    <button class="btn" type="submit" style="border-radius:15px; font-size:18px; background-color: #4a60d4; color: white; width:50%; height:50px;" @click="CompleteFix">수정 완료</button>
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
      userinfo: [],
      userTags: [],
      discFeatures: [],
      repPortfolio: [],
      userName: '',
      gender: '',
      ageRange: '',
      region: '',
      occupation: '',
      interests: '',
      comment: '',
      userImgUrl: '',
      title1: '',
      title2: '',
      title3: '',
      searchDisc: [],
      userDisc: [],
      inputtagtext: '', // 유저태그에 들어갈 텍스트
      inputtagidx: '', // 유저태그에 들어갈 인덱스
      newinputtag: {}
    }
  },
  methods: {
    changeProfile (p) {
      this.userImgUrl = p.target.value
    },
    changeName (n) {
      this.userName = n.target.value
    },
    changeAgeRange (a) {
      this.ageRange = a.target.value
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
    postimg () {
      // 이미지 첨부
    },
    inputtag (e) { // input에 입력된 값을 inputtagtext로 넣어주기
      this.inputtagtext = e.target.value
      this.newinputtag = { userTagIdx: this.inputtagidx, name: this.inputtagtext }
    },
    posttag () {
      this.userTags.push(this.newinputtag)
      console.log(this.userTags)
      // input 값을 넣어준 inputtagtext를 넣어주기
      // 버튼 눌렀을 때 태그 추가
      // tag 등록 (api) 해결 필요
    },
    deletetag (idx) {
      console.log(idx)
      this.userTags.splice(idx, 1)
      console.log(this.userTags)
      // 태그 새로 등록할 때 userTagIdx와 이름을 어떻게 전달하는지 물어볼 필요 O
      // 삭제할 때 마지막 콘솔 창에 오류 존재 --> 해결 필요
      // 태그 삭제 (api) 추가 필요
    },
    getuserinfodata () {
      axios
        .get('http://prod.inpro-server.shop:9000/app/profiles', { headers: { 'Content-Type': 'application/json', Authorization: 'eyJ0eXBlIjoiand0IiwiYWxnIjoiSFMyNTYifQ.eyJ1c2VySWR4IjoxLCJpYXQiOjE2Njg3NTkzMjIsImV4cCI6MTY3MDIzMDU1MX0.uETLHjg2EDpy3KEmpRgVGcMw-vv2bvImh_Dpdj4RTtc' } })
        .then(res => {
          this.userTags = res.data.result.userTags
          this.userName = res.data.result.nickName
          this.gender = res.data.result.gender
          this.ageRange = res.data.result.ageRange
          this.region = res.data.result.region
          this.occupation = res.data.result.occupation
          this.interests = res.data.result.interests
          this.discFeatures = res.data.result.discFeatures
          this.comment = res.data.result.comment
          this.repPortfolio = res.data.result.repPortfolio
          this.userImgUrl = res.data.result.userImgUrl
          this.title1 = this.repPortfolio[0].title
          this.title2 = this.repPortfolio[1].title
          this.title3 = this.repPortfolio[2].title
          this.searchDisc = res.data.result.searchDisc
          this.userDisc = res.data.result.userDisc
          this.userinfo = res.data.result
          console.log(res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    patchuserinfodata () {
      // 수정완료버튼 누르면 패치 구현필요 (api)
      axios
        .patch('http://prod.inpro-server.shop:9000/app/profiles', { headers: { 'Content-Type': 'application/json', Authorization: 'eyJ0eXBlIjoiand0IiwiYWxnIjoiSFMyNTYifQ.eyJ1c2VySWR4IjoxLCJpYXQiOjE2Njg3NTkzMjIsImV4cCI6MTY3MDIzMDU1MX0.uETLHjg2EDpy3KEmpRgVGcMw-vv2bvImh_Dpdj4RTtc' } })
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    },
    CompleteFix () {
      this.userinfo = { ageRange: this.ageRange, comment: this.comment, discFeatures: this.discFeatures, gender: this.gender, interests: this.interests, nickName: this.userName, occupation: this.occupation, region: this.region, repPortfolio: this.repPortfolio, searchDisc: this.searchDisc, userDisc: this.userDisc, userImgUrl: this.userImgUrl, userTags: this.userTags }
      console.log(this.userinfo)
    }
  },
  created () {
    // 미리 정보 가져옴
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

  .usertag{
    border-style: solid;
    border-radius: 20px;
    background-color: #c0c0c0;
    border-color: #c0c0c0;
    padding:5px;
    position: relative;
    width:120px;
    margin-top: 15px;
    margin-bottom:15px;
  }
  .profileicon{
    position: relative;
    top:30%;
  }
  .profileicontext{
    position: relative;
    top:35%;
    font-size: 12px;
    color:gray;
  }
  .middata{
    display:inline-block;
    width:30%;
  }
  .middataitem{
    display: inline-block;
  }
  .work{
    position: relative;
    top:15px;
    float: left;
  }
  .win{
    position: relative;
    top:15px;
    float: left;
  }
  .url{
    position: relative;
    top:15px;
    float: left;
  }
  </style>
