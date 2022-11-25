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
    <div style="position:relative; left:30px; float:left; color:gray">대표 URL</div><div style="position:relative; left:40px; float:left; color:gray"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
  <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
  <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
</svg></div>
   </div>

   <div>
    <div v-for="(repportfolio, i) in repportfolios" :key='i' style="border-style:solid; border-width:1px; border-color:gray; border-radius:20px; width: 90%; margin-left:5%; margin-bottom:30px;">
    <div class="repworklist" style="position: relative; top:10px; line-height:40px; left:5%; text-align:center; border-radius: 10px; width:90%; height:40px; background-color:#c0c0c0; font-size:18px; margin-bottom:15px;">
    {{this.repportfolios[i].title}}
   </div>
   <div class="repworklist" style="position: relative; top:10px; line-height:40px; left:5%; text-align:center; border-radius: 10px; width:90%; height:40px; background-color:#c0c0c0; font-size:18px; margin-bottom:15px;">
    {{this.repportfolios[i].content}}
   </div>
   <div class="repworklist" style="position: relative; top:10px; line-height:40px; left:5%; text-align:center; border-radius: 10px; width:90%; height:40px; background-color:#c0c0c0; font-size:18px; margin-bottom:20px;">
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
        <div style="display: inline-block; border:solid; border-radius:10px; border-width:1px; position:relative; left:30px; top:5px; text-align:left; background-color: gray; color:white; width:50px; font-size: 12px;"  @click="deleteportfolio(i)">&nbsp;&nbsp;&nbsp;&nbsp;삭제</div>
      <div style="display: inline-block; border:solid; border-radius:10px; border-width:1px; position:relative; left:30px; top:5px; text-align:left; background-color: gray; color:white; width:90px; font-size: 12px; margin-left:155px"  @click="setRepportfolio(i)">&nbsp;&nbsp;&nbsp;&nbsp;대표로 설정</div>
      </div>
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
<button style="border:solid; border-radius:10px; border-width:0px; background-color:gray; color:white; width:50%; height:30px" @click="postportfolio">활동 이력 등록</button>

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
        .get('http://prod.inpro-server.shop:9000/app/portfolios/1/3', { headers: { 'Content-Type': 'application/json', Authorization: 'eyJ0eXBlIjoiand0IiwiYWxnIjoiSFMyNTYifQ.eyJ1c2VySWR4IjoxLCJpYXQiOjE2Njg3NTkzMjIsImV4cCI6MTY3MDIzMDU1MX0.uETLHjg2EDpy3KEmpRgVGcMw-vv2bvImh_Dpdj4RTtc' } })
        .then(res => {
          this.portfolios = res.data.result
          for (let i = 0; i < res.data.result.length; i++) {
            this.isRepPortfolio[i] = res.data.result[i].isRepPortfolio
          }
          console.log(res.data.result)
          console.log(this.isRepPortfolio)
          this.repportfolios = this.portfolios.filter((p) => { return p.isRepPortfolio === 'Y' })
          console.log(this.repportfolios)
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteportfolio (i) {
      this.portfolios.splice(i, 1)
      console.log(this.portfolios)
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
    postportfolio () {
      this.newinputworklist = { portfolioIdx: '', title: this.inputportfoliotitles, content: this.inputportfoliocontents, url: this.inputportfoliourls, isRepPortfolio: 'N' }
      this.portfolios.push(this.newinputworklist)
    },
    deleteRepportfolio () {
      for (let j = 0; j < this.portfolios.length; j++) {
        this.portfolios[j].isRepPortfolio = 'N'
      }
      this.repportfolios.splice(0)
    },
    setRepportfolio (i) {
      this.deleteRepportfolio()
      this.portfolios[i].isRepPortfolio = 'Y'
      this.repportfolios.push(this.portfolios[i])
      console.log(this.repportfolios)
      console.log(this.portfolios)
    },
    patchportfolio () {
      // 수정 완료 버튼 누르면 포트폴리오 수정 (패치) --> api 사용
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
