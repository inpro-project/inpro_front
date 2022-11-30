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
    <button class="list" v-for="(age, idx) in filters.user.age" :key="{idx}" type="button" style="float:left; margin-left:8px; height:40px" @click="deleteage(idx)">
    <div style="position:relative; top:3px; width:90%; font-size:14px;">{{age.name}}</div>
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
    <button class="list" v-for="(occupation, idx) in filters.user.occupation" :key="{idx}" type="button" style="float:left; margin-left:8px; height:40px" @click="deleteoccupation(idx)">
    <div style="position:relative; top:3px; width:90%; font-size:14px;">{{occupation.name}}</div>
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
    <button class="list" v-for="(region, idx) in filters.user.region" :key="{idx}" type="button" style="float:left; margin-left:8px; height:40px" @click="deleteregion(idx)">
    <div style="position:relative; top:3px; width:90%; font-size:14px;">{{region.name}}</div>
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
    <button class="list" v-for="(interests, idx) in filters.user.interests" :key="{idx}" type="button" style="float:left; margin-left:8px; height:40px" @click="deleteinterests(idx)">
    <div style="position:relative; top:5px; width:90%; font-size:12px;">{{interests.name}}</div>
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
    <button class="list" v-for="(type, idx) in filters.team.type" :key="{idx}" type="button" style="float:left; margin-left:8px; height:40px" @click="deleteteamtype(idx)">
    <div style="position:relative; top:3px; width:90%; font-size:14px;">{{type.name}}</div>
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
    <button class="list" v-for="(region, idx) in filters.team.region" :key="{idx}" type="button" style="float:left; margin-left:8px; height:40px" @click="deleteteamregion(idx)">
    <div style="position:relative; top:3px; width:90%; font-size:14px;">{{region.name}}</div>
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
    <button class="list" v-for="(interests, idx) in filters.team.interests" :key="{idx}" type="button" style="float:left; margin-left:8px; height:40px" @click="deleteteaminterests(idx)">
    <div style="position:relative; top:3px; width:90%; font-size:14px;">{{interests.name}}</div>
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
import VueCookies from 'vue-cookies'

export default {
  data () {
    return {
      inputPersonFilter: {},
      inputTeamFilter: {},
      filters: {
        user: {
          age: [],
          occupation: [],
          region: [],
          interests: []
        },
        team: {
          type: [],
          region: [],
          interests: []
        }
      },
      deletedFilters: {
        user: {
          age: [],
          occupation: [],
          region: [],
          interests: []
        },
        team: {
          type: [],
          region: [],
          interests: []
        }
      }
    }
  },
  methods: {
    getpersonfilteringdata () {
      axios
        .get(process.env.VUE_APP_API_BASE_URL + '/app/user-filters', { headers: { 'Content-Type': 'application/json', Authorization: VueCookies.get('Authorization') } })
        .then(res => {
          const filters = res.data.result
          console.log(filters)
          for (const filter of filters) {
            if (filter.category === 1) {
              this.filters.user.age.push(filter)
            } else if (filter.category === 2) {
              this.filters.user.region.push(filter)
            } else if (filter.category === 3) {
              this.filters.user.occupation.push(filter)
            } else if (filter.category === 4) {
              this.filters.user.interests.push(filter)
            }
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    getteamfilteringdata () {
      axios
        .get(process.env.VUE_APP_API_BASE_URL + '/app/team-filters', { headers: { 'Content-Type': 'application/json', Authorization: VueCookies.get('Authorization') } })
        .then(res => {
          const filters = res.data.result
          console.log(filters)
          for (const filter of filters) {
            if (filter.category === 1) {
              this.filters.team.type.push(filter)
            } else if (filter.category === 2) {
              this.filters.team.region.push(filter)
            } else if (filter.category === 3) {
              this.filters.team.interests.push(filter)
            }
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    changeFilter (matchType, filterType, value) {
      const filter = {
        name: value,
        category: 1,
        userFilterIdx: undefined
      }
      for (const curFilter of this.filters[matchType][filterType]) {
        if (curFilter.name === filter[filterType]) {
          return
        }
      }
      if (filter.age === '무관') {
        for (const curFilter of this.filters[matchType][filterType]) {
          if (curFilter.userFilterIdx !== undefined) {
            this.deletedFilters[matchType][filterType].push(curFilter)
          }
        }
      }
      for (const curFilter of this.deletedFilters[matchType][filterType]) {
        if (curFilter.name === filter[filterType]) {
          this.filters[matchType][filterType].push(curFilter)
          return
        }
      }
      this.filters[matchType][filterType].push(filter)
      console.log(this.filters)
    },
    changeAgeRange (a) {
      this.changeFilter('user', 'age', a.target.value)
    },
    changeOccupation (o) {
      this.changeFilter('user', 'occupation', o.target.value)
    },
    changeRegion (r) {
      this.changeFilter('user', 'region', r.target.value)
    },
    changeInterest (i) {
      this.changeFilter('user', 'interests', i.target.value)
    },
    changeteamtype (tt) {
      this.changeFilter('team', 'type', tt.target.value)
    },
    changeteamregion (tr) {
      this.changeFilter('team', 'region', tr.target.value)
    },
    changeteaminterest (ti) {
      this.changeFilter('team', 'interests', ti.target.value)
    },
    async GotoFiltering () {
      await this.updateUserFilters()
      await this.updateTeamFilters()
      this.$router.push({ name: 'mainmenu' })
    },
    async updateUserFilters () {
      const userFilters = {
        ageRangeDelete: [],
        ageRangeInsert: [],
        interestsDelete: [],
        interestsInsert: [],
        occupationDelete: [],
        occupationInsert: [],
        regionDelete: [],
        regionInsert: []
      }
      for (const curFilter of this.filters.user.age) {
        if (curFilter.userFilterIdx === undefined) {
          userFilters.ageRangeInsert.push(curFilter.name)
        }
      }
      for (const curFilter of this.filters.user.interests) {
        if (curFilter.userFilterIdx === undefined) {
          userFilters.interestsInsert.push(curFilter.name)
        }
      }
      for (const curFilter of this.filters.user.occupation) {
        if (curFilter.userFilterIdx === undefined) {
          userFilters.occupationInsert.push(curFilter.name)
        }
      }
      for (const curFilter of this.filters.user.region) {
        if (curFilter.userFilterIdx === undefined) {
          userFilters.regionInsert.push(curFilter.name)
        }
      }
      for (const curFilter of this.deletedFilters.user.age) {
        userFilters.ageRangeDelete.push(curFilter.userFilterIdx)
      }
      for (const curFilter of this.deletedFilters.user.interests) {
        userFilters.interestsDelete.push(curFilter.userFilterIdx)
      }
      for (const curFilter of this.deletedFilters.user.occupation) {
        userFilters.occupationDelete.push(curFilter.userFilterIdx)
      }
      for (const curFilter of this.deletedFilters.user.region) {
        userFilters.regionDelete.push(curFilter.userFilterIdx)
      }
      console.log(userFilters)
      await axios
        .patch(process.env.VUE_APP_API_BASE_URL + '/app/user-filters', JSON.stringify(userFilters), { headers: { 'Content-Type': 'application/json', Authorization: VueCookies.get('Authorization') } })
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    },
    async updateTeamFilters () {
      const teamFilters = {
        typeInsert: [],
        typeDelete: [],
        regionInsert: [],
        regionDelete: [],
        interestsInsert: [],
        interestsDelete: []
      }
      for (const curFilter of this.filters.team.type) {
        if (curFilter.teamFilterIdx === undefined) {
          teamFilters.typeInsert.push(curFilter.name)
        }
      }
      for (const curFilter of this.deletedFilters.team.type) {
        teamFilters.typeDelete.push(curFilter.teamFilterIdx)
      }

      for (const curFilter of this.filters.team.region) {
        if (curFilter.teamFilterIdx === undefined) {
          teamFilters.regionInsert.push(curFilter.name)
        }
      }
      for (const curFilter of this.deletedFilters.team.region) {
        teamFilters.regionDelete.push(curFilter.teamFilterIdx)
      }

      for (const curFilter of this.filters.team.interests) {
        if (curFilter.teamFilterIdx === undefined) {
          teamFilters.interestsInsert.push(curFilter.name)
        }
      }
      for (const curFilter of this.deletedFilters.team.interests) {
        teamFilters.interestsDelete.push(curFilter.teamFilterIdx)
      }

      await axios
        .patch(process.env.VUE_APP_API_BASE_URL + '/app/team-filters', JSON.stringify(teamFilters), { headers: { 'Content-Type': 'application/json', Authorization: VueCookies.get('Authorization') } })
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteFilter (matchType, filterType, idx) {
      const curFilter = this.filters[matchType][filterType][idx]
      if (curFilter.userFilterIdx !== undefined) {
        this.deletedFilters[matchType][filterType].push(curFilter)
      }
      this.filters[matchType][filterType].splice(idx, 1)
    },
    deleteage (idx) {
      this.deleteFilter('user', 'age', idx)
    },
    deleteoccupation (idx) {
      this.deleteFilter('user', 'occupation', idx)
    },
    deleteregion (idx) {
      this.deleteFilter('user', 'region', idx)
    },
    deleteinterests (idx) {
      this.deleteFilter('user', 'interests', idx)
    },
    deleteteamtype (idx) {
      this.deleteFilter('team', 'type', idx)
    },
    deleteteamregion (idx) {
      this.deleteFilter('team', 'region', idx)
    },
    deleteteaminterests (idx) {
      this.deleteFilter('team', 'interests', idx)
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
