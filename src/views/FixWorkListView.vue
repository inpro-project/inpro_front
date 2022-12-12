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
  나의 활동 이력 수정
   </p>
   </div>
 </div>
   </div>
   <div class="repwork" style="height:40px; margin-top: 10px;">
    <div style="position:relative; left:30px; float:left; color:gray">대표 활동 이력</div><div style="position:relative; left:40px; float:left; color:gray"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-briefcase" viewBox="0 0 16 16">
  <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z"/>
</svg></div>
   </div>
   <div>
    <div v-for="(repportfolio, i) in repportfolios" :key='i' style="border-style:solid; border-width:1px; border-color:gray; border-radius:20px; width: 90%; margin-left:5%; margin-bottom:30px;">
    <div class="repworklist" style="position: relative; top:10px; line-height:40px; left:5%; text-align:center; border-radius: 10px; width:90%; height:40px; background-color:#c0c0c0; font-size:16px; margin-bottom:15px;">
    {{this.repportfolios[i].title}}
   </div>
   <div class="repworklist" style="position: relative; top:10px; line-height:40px; left:5%; text-align:center; border-radius: 10px; width:90%; height:80px; background-color:#c0c0c0; font-size:14px; margin-bottom:15px;">
    {{this.repportfolios[i].content}}
   </div>
   <div v-if="this.repportfolios[i].url !== ''"  class="repworklist" style="position: relative; top:10px; line-height:40px; left:5%; text-align:center; border-radius: 10px; width:90%; height:80px; background-color:#c0c0c0; font-size:14px; margin-bottom:20px;">
    {{this.repportfolios[i].url}}
   </div>
  </div>
   </div>

<div>
  <hr style="border:solid; border-width: 1px; border-color: gray; background-color: gray; margin-top: 30px; margin-bottom:30px;">
</div>

<div>
    <div v-for="(portfolio, i) in portfolios" :key='i' style="border-style:solid; border-width:1px; border-color:gray; border-radius:20px; width: 90%; margin-left:5%; margin-bottom:30px;">
      <div style="text-align:start;">
        <div style="display: inline-block; border:solid; border-radius:10px; border-width:1px; position:relative; left:30px; top:5px; text-align:left; background-color: gray; color:white; width:50px; font-size: 12px;"  @click="removePortfolio(portfolio)">&nbsp;&nbsp;&nbsp;&nbsp;삭제</div>
      <div style="display: inline-block; border:solid; border-radius:10px; border-width:1px; position:relative; left:30px; top:5px; text-align:left; background-color: gray; color:white; width:90px; font-size: 12px; margin-left:155px"  @click="setRepportfolio(portfolio)">&nbsp;&nbsp;&nbsp;&nbsp;대표로 설정</div>
      </div>
    <div class="repworklist" style="position: relative; top:10px; line-height:40px; left:5%; text-align:center; border-radius: 10px; width:90%; height:40px; background-color:#c0c0c0; font-size:16px; margin-bottom:15px;">
    {{this.portfolios[i].title}}
   </div>
   <div class="repworklist" style="position: relative; top:10px; line-height:40px; left:5%; text-align:center; border-radius: 10px; width:90%; height:80px; background-color:#c0c0c0; font-size:14px; margin-bottom:15px;">
    {{this.portfolios[i].content}}
   </div>
   <div v-if="this.portfolios[i].url !== ''" class="repworklist" style="position: relative; top:10px; line-height:40px; left:5%; text-align:center; border-radius: 10px; width:90%; height:80px; background-color:#c0c0c0; font-size:14px; margin-bottom:20px;">
    {{this.portfolios[i].url}}
   </div>
  </div>
   </div>
   <div class='text' style="text-align:left; width:100%; font-size: 16px; color:gray;">
          &nbsp;&nbsp;&nbsp;&nbsp;
        </div>

        <div class="postnewportfolio">
          <div class="input-group mb-3" style="width:80%">
  <input type="text1" class="form-control" placeholder="제목" aria-label="portfoliotitle" aria-describedby="button-addon2" style="position:relative; left:45px;" @change="inputportfoliotitle">
</div>

<div class="input-group mb-3" style="width:80%">
  <input type="text1" class="form-control" placeholder="내용" aria-label="portfoliocontent" aria-describedby="button-addon2" style="position:relative; left:45px;" @change="inputportfoliocontent">
</div>

<div class="input-group mb-3" style="width:80%">
  <input type="text1" class="form-control" placeholder="url" aria-label="portfoliourl" aria-describedby="button-addon2" style="position:relative; left:45px;" @change="inputportfoliourl">
</div>
<button style="border:solid; border-radius:10px; border-width:0px; background-color:gray; color:white; width:50%; height:30px" @click="addPortfolio">URL 등록</button>

        </div>

<router-link to="/userinfo">
          <div class=" inner" style="width:100%;">
    </div>
    <button class="btn" type="submit" style="border-radius:15px; font-size:18px; background-color: #4a60d4; color: white; width:50%; height:50px;" @click="patchportfolio">수정 완료</button>
  </router-link>
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
      repportfolios: [],
      portfolios: [],
      isRepPortfolio: [],
      portfolioIdx: '',
      title: '',
      content: '',
      url: '',
      newinputworklist: {},
      inputportfoliotitles: '',
      inputportfoliocontents: '',
      inputportfoliourls: ''
    }
  },
  methods: {
    getportfolioinfodata () {
      axios
      // get 속 링크의 useridx값은 카카오 로그인 후 부여받는 useridx 고유값 => http://prod.inpro-server.shop:9000/app/portfolios/:userIdx/:portfoliCategoryIdx
        .get(process.env.VUE_APP_API_BASE_URL + '/app/portfolios/' + VueCookies.get('userIdx') + '/1', { headers: { 'Content-Type': 'application/json', Authorization: VueCookies.get('Authorization') } })
        .then(res => {
          this.portfolios = res.data.result
          console.log(this.portfolios)
          for (let i = 0; i < this.portfolios.length; i++) {
            if (this.portfolios[i].isRepPortfolio === 'Y') {
              this.repportfolios.push(this.portfolios[i])
            }
          }
          console.log(this.repportfolios)
        })
        .catch(err => {
          console.log(err)
        })
    },
    async removePortfolio (portfolio) {
      await this.deletePortfolio(portfolio)
      this.$router.go({ name: 'fixworklist' })
    },
    inputportfoliotitle (t) { // input에 입력된 값을 inputtagtext로 넣어주기
      this.inputportfoliotitles = t.target.value
    },
    inputportfoliocontent (c) { // input에 입력된 값을 inputtagtext로 넣어주기
      this.inputportfoliocontents = c.target.value
    },
    inputportfoliourl (u) { // input에 입력된 값을 inputtagtext로 넣어주기
      this.inputportfoliourls = u.target.value
    },
    async addPortfolio () {
      const portfolio = { title: this.inputportfoliotitles, content: this.inputportfoliocontents, url: this.inputportfoliourls }
      await this.postPortfolio(portfolio)
      this.$router.go({ name: 'fixworklist' })
    },
    async setRepportfolio (portfolio) {
      if (this.repportfolios.length > 0) {
        this.repportfolios[0].isRepPortfolio = 'N'
        await this.patchPortfolio(this.repportfolios[0])
      }
      portfolio.isRepPortfolio = 'Y'
      await this.patchPortfolio(portfolio)
      this.$router.go({ name: 'fixworklist' })
    },
    postPortfolio (portfolio) {
      const data = {
        title: portfolio.title,
        content: portfolio.content,
        url: portfolio.url
      }
      axios
        .post(process.env.VUE_APP_API_BASE_URL + '/app/portfolios/1', JSON.stringify(data), { headers: { 'Content-Type': 'application/json', Authorization: VueCookies.get('Authorization') } })
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
      // 수정 완료 버튼 누르면 포트폴리오 수정 (패치) --> api 사용
    },
    deletePortfolio (portfolio) {
      axios
        .delete(process.env.VUE_APP_API_BASE_URL + '/app/portfolios/' + portfolio.portfolioIdx, { headers: { 'Content-Type': 'application/json', Authorization: VueCookies.get('Authorization') } })
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
      // 수정 완료 버튼 누르면 포트폴리오 수정 (패치) --> api 사용
    },
    patchPortfolio (portfolio) {
      const data = {
        title: portfolio.title,
        content: portfolio.content,
        url: portfolio.url,
        isRepPortfolio: portfolio.isRepPortfolio
      }
      console.log(data)
      axios
        .patch(process.env.VUE_APP_API_BASE_URL + '/app/portfolios/' + portfolio.portfolioIdx, JSON.stringify(data), { headers: { 'Content-Type': 'application/json', Authorization: VueCookies.get('Authorization') } })
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
      // 수정 완료 버튼 누르면 포트폴리오 수정 (패치) --> api 사용
    },
    checkLogin () {
      if (VueCookies.get('Authorization') === null || VueCookies.get('userIdx') === null) {
        this.$router.push({ name: 'kakaologin' })
      }
    }
  },
  created () {
    this.checkLogin()
    // 미리 api에서 조회 데이터 가져옴
    this.getportfolioinfodata()
  }
}
</script>

<style>
.outer{
   text-align: left;
 }
 .inner{
   display: inline-block;
 }
 .text-wrap{
   display: inline-block;
 }

</style>
