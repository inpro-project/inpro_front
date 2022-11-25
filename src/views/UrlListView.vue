<template>
  <div class="outer ms-3">
   <div class=" inner" style="width: 90%">
     <div class="text-wrap me-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="gray" class="bi bi-link-45deg" viewBox="0 0 16 16">
  <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
  <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
</svg>
   </div>
   <div class="text-wrap">
     <p style="text-align:left; position:relative; top:4px; left:4px; font-size:20px;  color:gray">
  URL
   </p>
   </div>
 </div>
   </div>
   <div class="repwork" style="height:40px; margin-top: 10px;">
    <div style="position:relative; left:30px; float:left; color:gray">대표 URL</div>
   </div>

   <div>
    <div v-for="(portfolio, i) in portfolios.filter( (p) => p.isRepPortfolio === 'Y')" :key='i' style="border-style:solid; border-width:1px; border-color:gray; border-radius:20px; width: 90%; margin-left:5%; margin-bottom:30px;">
    <div class="repworklist" style="position: relative; top:10px; line-height:40px; left:5%; text-align:center; border-radius: 10px; width:90%; height:40px; background-color:#c0c0c0; font-size:18px; margin-bottom:15px;">
    {{this.portfolios[i].title}}
   </div>
   <div class="repworklist" style="position: relative; top:10px; line-height:40px; left:5%; text-align:center; border-radius: 10px; width:90%; height:40px; background-color:#c0c0c0; font-size:18px; margin-bottom:15px;">
    {{this.portfolios[i].content}}
   </div>
   <div class="repworklist" style="position: relative; top:10px; line-height:40px; left:5%; text-align:center; border-radius: 10px; width:90%; height:40px; background-color:#c0c0c0; font-size:18px; margin-bottom:20px;">
    {{this.portfolios[i].url}}
   </div>
  </div>
   </div>

<div>
  <hr style="border:solid; border-width: 1px; border-color: gray; background-color: gray; margin-top: 30px;">
</div>

<div>
    <div v-for="(portfolio, i) in portfolios" :key='i' style="border-style:solid; border-width:1px; border-color:gray; border-radius:20px; width: 90%; margin-left:5%; margin-bottom:30px;">
    <div class="repworklist" style="position: relative; top:10px; line-height:40px; left:5%; text-align:center; border-radius: 10px; width:90%; height:40px; background-color:#c0c0c0; font-size:18px; margin-bottom:15px;">
    {{this.portfolios[i].title}}
   </div>
   <div class="repworklist" style="position: relative; top:10px; line-height:40px; left:5%; text-align:center; border-radius: 10px; width:90%; height:40px; background-color:#c0c0c0; font-size:18px; margin-bottom:15px;">
    {{this.portfolios[i].content}}
   </div>
   <div class="repworklist" style="position: relative; top:10px; line-height:40px; left:5%; text-align:center; border-radius: 10px; width:90%; height:40px; background-color:#c0c0c0; font-size:18px; margin-bottom:20px;">
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
        .get(process.env.VUE_APP_API_BASE_URL + '/app/portfolios/1/3', { headers: { 'Content-Type': 'application/json', Authorization: 'eyJ0eXBlIjoiand0IiwiYWxnIjoiSFMyNTYifQ.eyJ1c2VySWR4IjoxLCJpYXQiOjE2Njg3NTkzMjIsImV4cCI6MTY3MDIzMDU1MX0.uETLHjg2EDpy3KEmpRgVGcMw-vv2bvImh_Dpdj4RTtc' } })
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
    }
  },
  created () {
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
