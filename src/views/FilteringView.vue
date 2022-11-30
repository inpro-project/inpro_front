<template>
     <div class="outer ms-2">
   <div class=" inner" style="width: 90%">
   <div class="text-wrap">
     <p style="text-align:left; position:relative; top:20px; font-size:20px;  color:gray; margin-bottom: 30px;">
  탐색 필터링
   </p>
   </div>
 </div>
   </div>
    <br/>
     <div class="inner" style="width: 80%">
        <p style="text-align:left; font-size:18px; color:gray;">
          팀원 매칭
        </p>
        </div>
        <hr style="border:solid; border-width: 1px; border-color: gray; background-color: gray; margin-top: 10px;">
          <!-- 연령대수정 -->
          <div class="fixage" style="height:30px; margin-bottom: 20px;">
        <div class="input-group" style="float:left; width:93%;">
            <span style="color:gray; margin-left:20px; margin-right:20px; line-height: 40px;">연령대</span>
  <select class="form-select" id="ageinputGroupSelect" aria-label="multiple select with button addon" style="border-radius:10px" @change="changeAgeRange">
    <option selected>연령대</option>
    <option value="10대">10대</option>
    <option value="20대">20대</option>
    <option value="30대">30대</option>
    <option value="40대">40대</option>
    <option value="50대">50대</option>
    <option value="60대">60대</option>
    <option value="무관">무관</option>
  </select>
</div>
</div>

<div style="height:60px;">
    <button class="list" v-for="(age, idx) in ageRangelist" :key="{idx}" type="button" style="float:left; margin-left:8px; height:40px" @click="deleteage(idx)">
    <div style="position:relative; top:3px; width:90%; font-size:14px;">{{ageRangelist[idx]}}</div>
    <div style="position:relative; width:10%; bottom:22px; float:right">x</div>
  </button>
</div>
 <!-- 직업수정 -->
 <div class="fixoccupation" style="height:30px; margin-bottom: 20px;">
        <div class="input-group" style="float:left; width:93%; margin-bottom: 10px;">
            <span style="color:gray; margin-left:20px; margin-right:20px; line-height: 40px;">직업</span>
  <select class="form-select" id="occupationinputGroupSelect" aria-label="multiple select with button addon" style=" border-radius:10px;" @change="changeOccupation">
    <option selected>직업</option>
    <option value="학생">학생</option>
    <option value="대학원생">대학원생</option>
    <option value="직장인">직장인</option>
    <option value="취준생">취준생</option>
    <option value="자영업자">자영업자</option>
    <option value="무관">무관</option>
  </select>
</div>
 </div>

 <div style="height:60px;">
    <button class="list" v-for="(occupation, idx) in occupationlist" :key="{idx}" type="button" style="float:left; margin-left:8px; height:40px" @click="deleteoccupation(idx)">
    <div style="position:relative; top:3px; width:90%; font-size:14px;">{{occupationlist[idx]}}</div>
    <div style="position:relative; width:10%; bottom:22px; float:right">x</div>
  </button>
</div>

        <!-- 지역수정 -->
        <div class="fixloc" style="height:30px; margin-bottom: 20px;">
        <div class="input-group" style="float:left; width:93%; margin-bottom: 10px;">
            <span style="color:gray; margin-left:20px; margin-right:20px; line-height: 40px;">지역</span>
  <select class="form-select" id="locinputGroupSelect" aria-label="multiple select with button addon" style="border-radius: 10px;" @change="changeRegion">
    <option selected>지역</option>
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
    <option value="무관">무관</option>
  </select>
</div>
</div>

<div style="height:60px;">
    <button class="list" v-for="(region, idx) in regionlist" :key="{idx}" type="button" style="float:left; margin-left:8px; height:40px" @click="deleteregion(idx)">
    <div style="position:relative; top:3px; width:90%; font-size:14px;">{{regionlist[idx]}}</div>
    <div style="position:relative; width:10%; bottom:22px; float:right">x</div>
  </button>
</div>

        <!-- 관심분야수정 -->
        <div class="fixinsterest" style="height:30px; margin-bottom: 20px;">
        <div class="input-group" style="float:left; width:93%;  margin-bottom: 10px;">
            <span style="color:gray; margin-left:20px; margin-right:20px; line-height: 40px;">직업</span>
  <select class="form-select" id="interestinputGroupSelect" aria-label="multiple select with button addon" style="border-radius:10px;" @change="changeInterest">
    <option selected>분야</option>
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
    <option value="무관">무관</option>
  </select>
</div>
</div>

<div style="height:60px;">
    <button class="list" v-for="(interests, idx) in interestslist" :key="{idx}" type="button" style="float:left; margin-left:8px; height:40px" @click="deleteinterests(idx)">
    <div style="position:relative; top:5px; width:90%; font-size:12px;">{{interestslist[idx]}}</div>
    <div style="position:relative; width:10%; bottom:17px; float:right">x</div>
  </button>
</div>

<!--팀 필터링-->
      <div class="inner" style="width: 100%; height:50px;">
        <span style="float:left; text-align:left; font-size:18px; color:gray; width:100%">
            &nbsp;&nbsp;&nbsp;팀 매칭
        </span>
        <hr style="float:left; border:solid; border-width: 1px; border-color: gray; background-color: gray; margin-top: 10px; width:100%">
        </div>

  <!-- 유형수정 -->
  <div class="fixteamtype" style="height:30px; margin-bottom: 20px;">
        <div class="input-group" style="float:left; width:93%;  margin-bottom: 10px;">
            <span style="color:gray; margin-left:20px; margin-right:20px; line-height: 40px;">유형</span>
  <select class="form-select" id="locinputGroupSelect" aria-label="multiple select with button addon" style="border-radius:10px" @change="changeteamtype">
    <option selected>유형</option>
    <option value="프로젝트">프로젝트</option>
    <option value="스터디">스터디</option>
    <option value="대외활동">대외활동</option>
    <option value="창업">창업</option>
    <option value="공모전">공모전</option>
    <option value="동아리">동아리</option>
    <option value="무관">무관</option>
  </select>
</div>
</div>

<div style="height:60px;">
    <button class="list" v-for="(teamtype, idx) in teamtypelist" :key="{idx}" type="button" style="float:left; margin-left:8px; height:40px" @click="deleteteamtype(idx)">
    <div style="position:relative; top:3px; width:90%; font-size:14px;">{{teamtypelist[idx]}}</div>
    <div style="position:relative; width:10%; bottom:22px; float:right">x</div>
  </button>
</div>

        <!-- 지역수정 -->
        <div class="fixteamregion" style="height:30px; margin-bottom: 30px;">
        <div class="input-group" style="float:left; width:93%;  margin-bottom: 10px;">
            <span style="color:gray; margin-left:20px; margin-right:20px; line-height: 40px;">지역</span>
  <select class="form-select" id="locinputGroupSelect" aria-label="multiple select with button addon" style="border-radius:10px" @change="changeteamregion">
    <option selected>지역</option>
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
    <option value="무관">무관</option>
  </select>
</div>
</div>

<div style="height:60px;">
    <button class="list" v-for="(teamregion, idx) in teamregionlist" :key="{idx}" type="button" style="float:left; margin-left:8px; height:40px" @click="deleteteamregion(idx)">
    <div style="position:relative; top:3px; width:90%; font-size:14px;">{{teamregionlist[idx]}}</div>
    <div style="position:relative; width:10%; bottom:22px; float:right">x</div>
  </button>
</div>

          <!-- 관심분야수정 -->
          <div class="fixteaminsterest" style="height:30px; margin-bottom: 20px;">
        <div class="input-group" style="float:left; width:93%;  margin-bottom: 10px;">
            <span style="color:gray; margin-left:20px; margin-right:20px; line-height: 40px;">분야</span>
  <select class="form-select" id="interestinputGroupSelect" aria-label="multiple select with button addon" style="border-radius:10px" @change="changeteaminterest">
    <option selected>분야</option>
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
    <option value="무관">무관</option>
  </select>
</div>
</div>

<div style="height:60px;">
    <button class="list" v-for="(teaminterests, idx) in teaminterestslist" :key="{idx}" type="button" style="float:left; margin-left:8px; height:40px" @click="deleteteaminterests(idx)">
    <div style="position:relative; top:3px; width:90%; font-size:14px;">{{this.teaminterestslist[idx]}}</div>
    <div style="position:relative; width:10%; bottom:22px; float:right">x</div>
  </button>
</div>
<br/>
          <div class=" inner" style="width:100%;">
    </div>
    <button class="btn" type="submit" style="border-radius:15px; font-size:18px; background-color: #4a60d4; color: white; width:50%; height:50px;" @click="GotoFiltering">선택 완료</button>
  <div class=" inner" style="width:100%; height:20px">
    </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
</template>

<script>
import axios from 'axios'
import { toRaw } from 'vue'
import VueCookies from 'vue-cookies'

export default {
  data () {
    return {
      getageRangelist: [],
      getregionlist: [],
      getoccupationlist: [],
      getinterestslist: [],
      getteamtypelist: [],
      getteamregionlist: [],
      getteaminterestslist: [],
      teaminterestslist: [],
      teamregionlist: [],
      teamtypelist: [],
      ageRangelist: [],
      regionlist: [],
      occupationlist: [],
      interestslist: [],
      inputPersonFilter: {},
      inputTeamFilter: {}
    }
  },
  methods: {
    getpersonfilteringdata () {
      axios
        .get(process.env.VUE_APP_API_BASE_URL + '/app/user-filters', { headers: { 'Content-Type': 'application/json', Authorization: VueCookies.get('Authorization') } })
        .then(res => {
          console.log(res.data)
          this.getageRangelist = res.data.result.filter((p) => { return p.category === 1 })
          for (let i = 0; i < this.getageRangelist.length; i++) {
            this.ageRangelist.push(this.getageRangelist[i].name)
          }
          console.log(this.getageRangelist)
          console.log(this.ageRangelist)

          this.getregionlist = res.data.result.filter((p) => { return p.category === 2 })
          for (let j = 0; j < this.getregionlist.length; j++) {
            this.regionlist.push(this.getregionlist[j].name)
          }
          console.log(this.getregionlist)
          console.log(this.regionlist)

          this.getoccupationlist = res.data.result.filter((p) => { return p.category === 3 })
          for (let k = 0; k < this.getoccupationlist.length; k++) {
            this.occupationlist.push(this.getoccupationlist[k].name)
          }
          console.log(this.getoccupationlist)
          console.log(this.occupationlist)

          this.getinterestslist = res.data.result.filter((p) => { return p.category === 4 })
          for (let l = 0; l < this.getinterestslist.length; l++) {
            this.interestslist.push(this.getinterestslist[l].name)
          }
          console.log(this.getinterestslist)
          console.log(this.interestslist)
        })
        .catch(err => {
          console.log(err)
        })
    },
    getteamfilteringdata () {
      axios
        .get(process.env.VUE_APP_API_BASE_URL + '/app/team-filters', { headers: { 'Content-Type': 'application/json', Authorization: VueCookies.get('Authorization') } })
        .then(res => {
          console.log(res.data)
          this.getteamtypelist = res.data.result.filter((p) => { return p.category === 1 })
          for (let l = 0; l < this.getteamtypelist.length; l++) {
            this.teamtypelist.push(this.getteamtypelist[l].name)
          }
          console.log(this.getteamtypelist)
          console.log(this.teamtypelist)

          this.getteamregionlist = res.data.result.filter((p) => { return p.category === 2 })
          for (let l = 0; l < this.getteamregionlist.length; l++) {
            this.teamregionlist.push(this.getteamregionlist[l].name)
          }
          console.log(this.getteamregionlist)
          console.log(this.teamregionlist)

          this.getteaminterestslist = res.data.result.filter((p) => { return p.category === 3 })
          for (let l = 0; l < this.getteaminterestslist.length; l++) {
            this.teaminterestslist.push(this.getteaminterestslist[l].name)
          }
          console.log(this.getteaminterestslist)
          console.log(this.teaminterestslist)
        })
        .catch(err => {
          console.log(err)
        })
    },
    changeAgeRange (a) {
      this.ageRange = a.target.value
      if (this.ageRange === '무관') {
        this.ageRangelist.splice(0)
        this.ageRangelist.push('무관')
      } else {
        this.ageRangelist.push(this.ageRange)
      }
      console.log(this.ageRangelist)
    },
    changeOccupation (o) {
      this.occupation = o.target.value
      if (this.occupation === '무관') {
        this.occupationlist.splice(0)
        this.occupationlist.push('무관')
      } else {
        this.occupationlist.push(this.occupation)
      }
      console.log(this.occupationlist)
    },
    changeRegion (r) {
      this.region = r.target.value
      if (this.region === '무관') {
        this.regionlist.splice(0)
        this.regionlist.push('무관')
      } else {
        this.regionlist.push(this.region)
      }
      console.log(this.regionlist)
    },
    changeInterest (i) {
      this.interests = i.target.value
      if (this.interests === '무관') {
        this.interestslist.splice(0)
        this.interestslist.push('무관')
      } else {
        this.interestslist.push(this.interests)
      }
      console.log(this.interestslist)
    },
    changeteamtype (tt) {
      this.teamtype = tt.target.value
      if (this.teamtype === '무관') {
        this.teamtypelist.splice(0)
        this.teamtypelist.push('무관')
      } else {
        this.teamtypelist.push(this.teamtype)
      }
      console.log(this.teamtypelist)
    },
    changeteamregion (tr) {
      this.teamregion = tr.target.value
      if (this.teamregion === '무관') {
        this.teamregionlist.splice(0)
        this.teamregionlist.push('무관')
      } else {
        this.teamregionlist.push(this.teamregion)
      }
      console.log(this.teamregionlist)
    },
    changeteaminterest (ti) {
      this.teaminterests = ti.target.value
      if (this.teaminterests === '무관') {
        this.teaminterestslist.splice(0)
        this.teaminterestslist.push('무관')
      } else {
        this.teaminterestslist.push(this.teaminterests)
      }
      console.log(this.teaminterestslist)
    },
    async GotoFiltering () {
      this.inputPersonFilter = { ageRange: toRaw(this.ageRangelist), region: toRaw(this.regionlist), occupation: toRaw(this.occupationlist), interests: toRaw(this.interestslist) }
      console.log(this.inputPersonFilter)
      this.inputTeamFilter = { type: toRaw(this.teamtypelist), region: toRaw(this.teamregionlist), interests: toRaw(this.teaminterestslist) }
      console.log(this.inputPersonFilter)

      await this.updateUserFilters()
      await this.updateTeamFilters()
      this.$router.push({ name: 'mainmenu' })
    },
    async updateUserFilters () {
      await axios
        .post(process.env.VUE_APP_API_BASE_URL + '/app/user-filters', JSON.stringify(this.inputPersonFilter), { headers: { 'Content-Type': 'application/json', Authorization: process.env.VUE_APP_ACCESS_TOKEN } })
        .then(res => {
        })
        .catch(err => {
          console.log(err)
        })
    },
    async updateTeamFilters () {
      await axios
        .post(process.env.VUE_APP_API_BASE_URL + '/app/team-filters', JSON.stringify(this.inputTeamFilter), { headers: { 'Content-Type': 'application/json', Authorization: process.env.VUE_APP_ACCESS_TOKEN } })
        .then(res => {
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteage (idx) {
      this.ageRangelist.splice(idx, 1)
      console.log(this.ageRangelist)
    },
    deleteoccupation (idx) {
      console.log(idx)
      this.occupationlist.splice(idx, 1)
      console.log(this.occupationlist)
    },
    deleteregion (idx) {
      this.regionlist.splice(idx, 1)
      console.log(this.regionlist)
    },
    deleteinterests (idx) {
      this.interestslist.splice(idx, 1)
      console.log(this.interestslist)
    },
    deleteteamtype (idx) {
      this.teamtypelist.splice(idx, 1)
      console.log(this.teamtypelist)
    },
    deleteteamregion (idx) {
      this.teamregionlist.splice(idx, 1)
      console.log(this.teamregionlist)
    },
    deleteteaminterests (idx) {
      this.teaminterestslist.splice(idx, 1)
      console.log(this.teaminterestslist)
    }
  },
  created () {
    this.getpersonfilteringdata()
    this.getteamfilteringdata()
  }
}
</script>

  <style scoped>

  .list{
    border-style: solid;
    border-radius: 20px;
    background-color: #c0c0c0;
    border-color: #c0c0c0;
    padding:5px;
    position: relative;
    width:120px;
    margin-top: 5px;
    margin-bottom:15px;
  }
  </style>
