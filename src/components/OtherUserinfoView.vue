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
 상세 프로필
  </p>
  </div>
</div>
  </div>

  <div
    v-if="userImgUrl.length==0"
    class="border10 me-2" style="margin-left:10px">
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

  <div v-else>
    <img class="border10 me-2" style="margin-left:10px" :src="userImgUrl">
  </div>

  <!--disc좌표평면(구현아직X)(api)-->
  <div  class="border10 me-2" style="display:flex; justify-content:center; align-items: center;">
  <div class="border10" style="border-radius: 50%; border-color: black; border-width:2px;">
    <div style="position:absolute; bottom:50%; border-style:solid; border-width:0px; width:177px; height:1px; background-color:black"></div>
    <div style="position:absolute; left:50%; border-style:solid; border-width:0px; width:1px; height:177px; background-color:black"></div>
    <div style="position:absolute; left: 25%; bottom:60%; font-weight:bold; font-size:24px; color:gray">D</div>
    <div style="position:absolute; left: 70%; bottom:60%; font-weight:bold; font-size:24px; color:gray">I</div>
    <div style="position:absolute; left: 70%; bottom:20%; font-weight:bold; font-size:24px; color:gray">S</div>
    <div style="position:absolute; left: 25%; bottom:20%; font-weight:bold; font-size:24px; color:gray">C</div>
    <div class="discdot2" :style="{left: this.searchX + 79 + 'px', bottom: this.searchY + 80  + 'px'}"></div> <!--나의 탐색-->
    <div class="discdot" :style="{ left: this.$store.state.myrepX + 80  + 'px', bottom: this.$store.state.myrepY + 80 + 'px'}"></div> <!--나-->
    <div class="discdot1" :style="{ left: this.x + 80  + 'px', bottom: this.y + 80  + 'px'}"></div> <!--상대-->
  </div>
</div>

<div class=" inner" style="width:100%; height:10px">
  </div>

  <!--각 점의 설명-->
  <div style="width:100%; display:flex; align-items:center; justify-content:space-between">
  <div class = "discdot2explain ms-4"></div>
  <div style="position:relative; left:-2%; color: gray; font-size: 14px;">나의 탐색 지표</div>
  <div class = "discdot1explain"></div>
  <div style="position:relative; left:-2%; color: gray; font-size: 14px;">상대의 DISC</div>
  <div class = "discdotexplain"></div>
  <div class="explain me-3" style="position:relative; left:-2%; color: gray; font-size: 14px;">나의 DISC</div>
  </div>

  <div class=" inner" style="width:100%; height:0px">
  </div>

<!--일치율 -->
<div style="width:100%; height:30px; font-weight:bold; font-size:22px">회원님의 이상향과 {{percent}}% 일치합니다!</div>

  <!--3가지성향대표키워드(api)-->
<div style="display:flex; justify-content:space-between">
  <div class="discFeature" v-for="(discFeature, idx) in discFeatures" :key="{idx}">
  <div class="mytag" style="margin-left:5px; margin-right:5px">
        # {{discFeature.feature}}
      </div>
</div>
</div>

  <!--이름-->
      <div class="nas" style="height:30px">
        <div class="username fw-bold" style="position: relative; left:20px; margin-right: 35px; font-size: 30px;">
        {{userName}}
      </div>
      </div>

  <!--연령대-->
      <div class="nas">
        <div class="userage" style="font-size: 20px; margin-right:10px;">
        {{ageRange}}
      </div>
      </div>

<!--성별-->
      <div class="nas">
        <div class="gender" style="font-size: 20px;">
        {{gender}}
      </div>
      </div>

  <div class=" inner" style="width:100%; height:10px">
  </div>

  <!--지역-->
      <div class="middata">
        <div class="middataitem">
        <div class="location">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="gray" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
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
      <div class="middata">
        <div class="middataitem">
        <div class="occupation" style="position:relative; right:1px;">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="22" fill="gray" class="bi bi-briefcase-fill" viewBox="0 0 16 16">
  <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z"/>
  <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z"/>
</svg>
        </div>
      </div>

      <!--직업-->
      <div class="middataitem">
        <div class="occupationext" style="position: relative; top:3px; left:7px; font-size:18px;">
          {{occupation}}
        </div>
      </div>
      </div>
      <div class="middata">
        <div class="middataitem">
        <div class="interest">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="gray" class="bi bi-person-workspace" viewBox="0 0 16 16">
  <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H4Zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
  <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.373 5.373 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2H2Z"/>
</svg>
        </div>
      </div>

      <!--분야-->
      <div class="middataitem">
        <div class="insteresttext" style="position: relative; top:3px; left:8px; font-size:18px;">
          {{interests}}
        </div>
      </div>
      </div>
      <hr style="border:solid; border-width: 1px; border-color: gray; background-color: gray; margin-top: 15px;">

      <!--한줄소개-->
      <div class='text' style="position:relative; text-align:left; font-size: 18px; color:gray;">
        &nbsp;&nbsp;&nbsp;&nbsp;한줄소개
      </div>
      <div class="comment" style="position:relative; top:15px; width:100%; height:40px; font-size:18px;">
        {{comment}}
      </div>
      <br/>

<!--대표포트폴리오(api)-->

<div class="repportfoliocategory" style="width:100%; height:40px;" type="button" @click="gotowworklist">
          <div class="work" style="width:10%; position:relative; left:10px">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" class="bi bi-briefcase" viewBox="0 0 16 16">
    <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z"/>
  </svg>
          </div>
          <div class="work" style="width:80%;">
            {{this.title1}}
          </div>
          <div class="work" style="float:right; width:10%; position:relative; right:15px">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" class="bi bi-search" viewBox="0 0 16 16">
    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
          </div>
        </div>
        <div class="repportfoliocategory" style="width:100%; height:40px;" type="button" @click="gotowwinlist">
          <div class="win" style="width:10%; position:relative; left:10px">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" class="bi bi-trophy" viewBox="0 0 16 16">
    <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935zM3.504 1c.007.517.026 1.006.056 1.469.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.501.501 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667.03-.463.049-.952.056-1.469H3.504z"/>
  </svg>
          </div>
          <div class="win" style="width:80%;">
            {{this.title2}}
          </div>
          <div class="win" style="float:right; width:10%; position:relative; right:15px">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" class="bi bi-search" viewBox="0 0 16 16">
    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
  </svg>
          </div>
        </div>
        <div class="repportfoliocategory" style="width:100%; height:40px;" type="button" @click="gotourllist">
          <div class="url" style="width:10%; position:relative; left:10px">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" class="bi bi-link-45deg" viewBox="0 0 16 16">
    <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
    <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
  </svg>
          </div>
          <div class="url" style="width:80%;">
            {{this.title3}}
          </div>
          <div class="url" style="float:right; width:10%; position:relative; right:15px">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" class="bi bi-search" viewBox="0 0 16 16">
    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
  </svg>
          </div>
        </div>
        <br/>

<!--세부 분야 태그 (api)-->
<div style="display:flex; justify-content:space-between">
<div class="userTag" v-for="(userTag, idx) in userTags" :key="{idx}">
  <div class="usertag" style="margin-left:5px; margin-right:5px">
        {{userTag.name}}
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
</template>

<script>
import axios from 'axios'
import VueCookies from 'vue-cookies'

export default {
  data () {
    return {
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
      title1: '',
      title2: '',
      title3: '',
      userImgUrl: '',
      x: 0,
      y: 0,
      percent: 0,
      searchX: 0,
      searchY: 0
    }
  },
  methods: {
    getuserinfodata () {
      const userIdx = this.$store.state.otheruserIdx
      axios
        .get(process.env.VUE_APP_API_BASE_URL + '/app/user-profiles/' + userIdx, { headers: { 'Content-Type': 'application/json', Authorization: VueCookies.get('Authorization') } })
        .then(res => {
          this.searchX = res.data.result.searchX.toFixed(1) * 5
          this.searchY = res.data.result.searchY.toFixed(1) * 5
          console.log('searchX: ' + this.searchX)
          console.log('searchY: ' + this.searchY)
          this.x = res.data.result.x.toFixed(1) * 5
          this.y = res.data.result.y.toFixed(1) * 5
          this.userName = res.data.result.nickName
          this.gender = res.data.result.gender
          this.ageRange = res.data.result.ageRange
          this.region = res.data.result.region
          this.occupation = res.data.result.occupation
          this.interests = res.data.result.interests
          this.discFeatures = res.data.result.discFeatures
          this.comment = res.data.result.comment
          this.userImgUrl = res.data.result.userImgUrl
          this.percent = res.data.result.percent
          this.userTags = res.data.result.userTags
          this.repPortfolio = res.data.result.repPortfolio
          this.title1 = this.repPortfolio[0].title
          this.title2 = this.repPortfolio[1].title
          this.title3 = this.repPortfolio[2].title
        })
        .catch(err => {
          console.log(err)
        })
    },
    gotowworklist () {
      const userIdx = this.$store.state.otheruserIdx
      this.$router.push({ name: 'otherworklist', params: userIdx })
    },
    gotowwinlist () {
      const userIdx = this.$store.state.otheruserIdx
      this.$router.push({ name: 'otherwinlist', params: userIdx })
    },
    gotourllist () {
      const userIdx = this.$store.state.otheruserIdx
      this.$router.push({ name: 'otherurllist', params: userIdx })
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
  border-width: 0px;
  width: 181px;
  height: 181px;
}

.nas{
float:left;
position: relative;
}
.gender{
  text-align: left;
  position: relative;
  top:10px;
}
.userage{
  text-align: left;
  position: relative;
  top:10px;
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
.usertag{
  border-style: solid;
  border-radius: 20px;
  background-color: #c0c0c0;
  border-color: #c0c0c0;
  text-align: center;
  float: left;
  padding:5px;
  position: relative;
  width:30%;
  min-width:120px;
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

.discdot1explain {
  border-radius:10px;
  position:relative;
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
