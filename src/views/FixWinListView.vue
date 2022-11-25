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
  나의 수상 경력 수정
   </p>
   </div>
 </div>
   </div>
   <div class="repwork" style="height:40px; margin-top: 10px;">
    <div style="position:relative; left:30px; float:left; color:gray">대표 수상 경력</div><div style="position:relative; left:40px; float:left; color:gray"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-trophy" viewBox="0 0 16 16">
  <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935zM3.504 1c.007.517.026 1.006.056 1.469.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.501.501 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667.03-.463.049-.952.056-1.469H3.504z"/>
</svg></div>
   </div>

   <div>
    <div v-for="(repportfolio, i) in repportfolios.filter( (p) => p.isRepPortfolio === 'Y')" :key='i' style="border-style:solid; border-width:1px; border-color:gray; border-radius:20px; width: 90%; margin-left:5%; margin-bottom:30px;">
    <div class="repworklist" style="position: relative; top:10px; line-height:40px; left:5%; text-align:center; border-radius: 10px; width:90%; height:40px; background-color:#c0c0c0; font-size:18px; margin-bottom:15px;">
    {{this.repportfolios[i].title}}
   </div>
   <div class="repworklist" style="position: relative; top:10px; line-height:40px; left:5%; text-align:center; border-radius: 10px; width:90%; height:40px; background-color:#c0c0c0; font-size:18px; margin-bottom:15px;">
    {{this.repportfolios[i].content}}
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

<button style="border:solid; border-radius:10px; border-width:0px; background-color:gray; color:white; width:50%; height:30px" @click="postportfolio">수상 경력 등록</button>

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
      inputportfoliocontents: ''
    }
  },
  methods: {
    getportfolioinfodata () {
      axios
      // get 속 링크의 useridx값은 카카오 로그인 후 부여받는 useridx 고유값 => http://prod.inpro-server.shop:9000/app/portfolios/:userIdx/:portfoliCategoryIdx
        .get('http://prod.inpro-server.shop:9000/app/portfolios/1/2', { headers: { 'Content-Type': 'application/json', Authorization: 'eyJ0eXBlIjoiand0IiwiYWxnIjoiSFMyNTYifQ.eyJ1c2VySWR4IjoxLCJpYXQiOjE2Njg3NTkzMjIsImV4cCI6MTY3MDIzMDU1MX0.uETLHjg2EDpy3KEmpRgVGcMw-vv2bvImh_Dpdj4RTtc' } })
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
    postportfolio () {
      this.newinputworklist = { portfolioIdx: '', title: this.inputportfoliotitles, content: this.inputportfoliocontents, isRepPortfolio: 'N' }
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
