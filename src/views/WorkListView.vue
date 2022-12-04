<template>
  <div class="outer ms-3">
   <div class=" inner" style="width: 90%">
     <div class="text-wrap me-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="gray" class="bi bi-briefcase" viewBox="0 0 16 16">
  <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z"/>
</svg>
   </div>
   <div class="text-wrap">
     <p style="text-align:left; position:relative; top:4px; left:4px; font-size:20px;  color:gray">
  활동 이력
   </p>
   </div>
 </div>
   </div>
   <div class="repwork" style="height:40px; margin-top: 10px;">
    <div style="position:relative; left:30px; float:left; color:gray">대표 활동 이력</div>
   </div>

   <div>
    <div v-for="(portfolio, i) in portfolios.filter( (p) => p.isRepPortfolio === 'Y')" :key='i' style="border-style:solid; border-width:1px; border-color:gray; border-radius:20px; width: 90%; margin-left:5%; margin-bottom:30px;">
    <div class="repworklist" style="position: relative; top:10px; line-height:40px; left:5%; text-align:center; border-radius: 10px; width:90%; height:40px; background-color:#c0c0c0; font-size:16px; margin-bottom:15px;">
    {{this.portfolios[i].title}}
   </div>
   <div class="repworklist" style="position: relative; top:10px; line-height:40px; left:5%; text-align:center; border-radius: 10px; width:90%; height:80px; background-color:#c0c0c0; font-size:14px; margin-bottom:15px;">
    {{this.portfolios[i].content}}
   </div>
   <div class="repworklist" style="position: relative; top:10px; line-height:40px; left:5%; text-align:center; border-radius: 10px; width:90%; height:80px; background-color:#c0c0c0; font-size:14px; margin-bottom:20px;">
    {{this.portfolios[i].url}}
   </div>
  </div>
   </div>

<div>
  <hr style="border:solid; border-width: 1px; border-color: gray; background-color: gray; margin-top: 30px;">
</div>

<div>
    <div v-for="(portfolio, i) in portfolios" :key='i' style="border-style:solid; border-width:1px; border-color:gray; border-radius:20px; width: 90%; margin-left:5%; margin-bottom:30px;">
    <div class="repworklist" style="position: relative; top:10px; line-height:40px; left:5%; text-align:center; border-radius: 10px; width:90%; height:40px; background-color:#c0c0c0; font-size:16px; margin-bottom:15px;">
    {{this.portfolios[i].title}}
   </div>
   <div class="repworklist" style="position: relative; top:10px; line-height:40px; left:5%; text-align:center; border-radius: 10px; width:90%; height:80px; background-color:#c0c0c0; font-size:14px; margin-bottom:15px;">
    {{this.portfolios[i].content}}
   </div>
   <div class="repworklist" style="position: relative; top:10px; line-height:40px; left:5%; text-align:center; border-radius: 10px; width:90%; height:80px; background-color:#c0c0c0; font-size:14px; margin-bottom:20px;">
    {{this.portfolios[i].url}}
   </div>
  </div>
   </div>
   <div class='text' style="text-align:left; width:100%; font-size: 16px; color:gray;">
          &nbsp;&nbsp;&nbsp;&nbsp;
        </div>
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
          for (let i = 0; i < res.data.result.length; i++) {
            this.isRepPortfolio[i] = res.data.result[i].isRepPortfolio
          }
          console.log(res.data.result)
          console.log(this.isRepPortfolio)
        })
        .catch(err => {
          console.log(err)
        })
    },
    checkLogin () {
      if (VueCookies.get('Authorization') === null || VueCookies.get('userIdx') === null) {
        this.$router.push({ name: 'kakaologin' })
      }
    }
  },
  created () {
    // 미리 api에서 조회 데이터 가져옴
    this.checkLogin()
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
