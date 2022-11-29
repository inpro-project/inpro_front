<template>
  <br/>
        <div class="outer">
      <div class=" inner" style="width: 80%">
        <div class="text-wrap">
      <p style="text-align:left; font-size:20px;">
        나의 DISC는?
      </p></div>
      </div>
      </div>
    <div class="outer">
      <div class=" inner" style="width: 80%">
        <div class="text-wrap">
      <p style="text-align:center; font-size:16px; color:gray">
        나에게 적합한 키워드와 부적합한 키워드를 각 칸에서 하나씩 골라주세요!
      </p></div>
      </div>
      </div>
      <p style="text-align:center; font-size:16px; color:gray">
        회원님의 업무성향 DISC를 알려드립니다 :)
      </p>
    <hr style="border:solid 1px gray">
    <div class="border">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-3 list">
          <input class="form-check-input" type="checkbox" id="goodfeatureidx1" value="1" v-model="gooddiscFeatureidx">
        </div>
        <div class="col-6">
            <p class="h6 small text-center">근면</p>
        </div>
        <div class="col-3">
          <input class="form-check-input" type="checkbox" id="baddfeatureidx1" value="1" v-model="baddiscFeatureidx">
        </div>
    </div>
    </div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-3 list">
          <input class="form-check-input" type="checkbox" id="goodfeatureidx2" value="2" v-model="gooddiscFeatureidx">
        </div>
        <div class="col-6">
            <p class="h6 small text-center">침착함</p>
        </div>
        <div class="col-3">
          <input class="form-check-input" type="checkbox" id="baddfeatureidx2" value="2" v-model="baddiscFeatureidx">
        </div>
    </div>
    </div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-3 list">
          <input class="form-check-input" type="checkbox" id="goodfeatureidx3" value="3" v-model="gooddiscFeatureidx">
        </div>
        <div class="col-6">
            <p class="h6 small text-center">사색적</p>
        </div>
        <div class="col-3">
          <input class="form-check-input" type="checkbox" id="baddfeatureidx3" value="3" v-model="baddiscFeatureidx">
        </div>
    </div>
    </div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-3 list">
          <input class="form-check-input" type="checkbox" id="goodfeatureidx4" value="4" v-model="gooddiscFeatureidx">
        </div>
        <div class="col-6">
            <p class="h6 small text-center">긍정적</p>
        </div>
        <div class="col-3">
          <input class="form-check-input" type="checkbox" id="baddfeatureidx4" value="4" v-model="baddiscFeatureidx">
        </div>
    </div>
    </div>
    </div>
    <div class="border ms-3">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-3 list">
          <input class="form-check-input" type="checkbox" id="goodfeatureidx5" value="5" v-model="gooddiscFeatureidx">
        </div>
        <div class="col-6">
            <p class="text-center">개인적성취</p>
        </div>
        <div class="col-3">
          <input class="form-check-input" type="checkbox" id="baddfeatureidx5" value="5" v-model="baddiscFeatureidx">
        </div>
    </div>
    </div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-3 list">
          <input class="form-check-input" type="checkbox" id="goodfeatureidx6" value="6" v-model="gooddiscFeatureidx">
        </div>
        <div class="col-6">
            <p class="h6 small text-center">조급함</p>
        </div>
        <div class="col-3">
          <input class="form-check-input" type="checkbox" id="baddfeatureidx6" value="6" v-model="baddiscFeatureidx">
        </div>
    </div>
    </div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-3 list">
          <input class="form-check-input" type="checkbox" id="goodfeatureidx7" value="7" v-model="gooddiscFeatureidx">
        </div>
        <div class="col-6">
            <p class="h6 small text-center">준비성</p>
        </div>
        <div class="col-3">
          <input class="form-check-input" type="checkbox" id="baddfeatureidx7" value="7" v-model="baddiscFeatureidx">
        </div>
    </div>
    </div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-3 list">
          <input class="form-check-input" type="checkbox" id="goodfeatureidx8" value="8" v-model="gooddiscFeatureidx">
        </div>
        <div class="col-6">
            <p class="h6 small text-center">관대함</p>
        </div>
        <div class="col-3">
          <input class="form-check-input" type="checkbox" id="baddfeatureidx8" value="8" v-model="baddiscFeatureidx">
        </div>
    </div>
    </div>
    </div>
    <br/>
    <br/>
    <div class="border">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-3 list">
          <input class="form-check-input" type="checkbox" id="goodfeatureidx9" value="9" v-model="gooddiscFeatureidx">
        </div>
        <div class="col-6">
            <p class="h6 small text-center">결단력</p>
        </div>
        <div class="col-3">
          <input class="form-check-input" type="checkbox" id="baddfeatureidx9" value="9" v-model="baddiscFeatureidx">
        </div>
    </div>
    </div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-3 list">
          <input class="form-check-input" type="checkbox" id="goodfeatureidx10" value="10" v-model="gooddiscFeatureidx">
        </div>
        <div class="col-6">
            <p class="h6 small text-center">모험심</p>
        </div>
        <div class="col-3">
          <input class="form-check-input" type="checkbox" id="baddfeatureidx10" value="10" v-model="baddiscFeatureidx">
        </div>
    </div>
    </div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-3 list">
          <input class="form-check-input" type="checkbox" id="goodfeatureidx11" value="11" v-model="gooddiscFeatureidx">
        </div>
        <div class="col-6">
            <p class="h6 small text-center">자제력</p>
        </div>
        <div class="col-3">
          <input class="form-check-input" type="checkbox" id="baddfeatureidx11" value="11" v-model="baddiscFeatureidx">
        </div>
    </div>
    </div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-3 list">
          <input class="form-check-input" type="checkbox" id="goodfeatureidx12" value="12" v-model="gooddiscFeatureidx">
        </div>
        <div class="col-6">
            <p class="h6 small text-center">갈등회피적</p>
        </div>
        <div class="col-3">
          <input class="form-check-input" type="checkbox" id="baddfeatureidx12" value="12" v-model="baddiscFeatureidx">
        </div>
    </div>
    </div>
    </div>
    <div class="border ms-3">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-3 list">
          <input class="form-check-input" type="checkbox" id="goodfeatureidx13" value="13" v-model="gooddiscFeatureidx">
        </div>
        <div class="col-6">
            <p class="text-center">결과지향</p>
        </div>
        <div class="col-3">
          <input class="form-check-input" type="checkbox" id="baddfeatureidx13" value="13" v-model="baddiscFeatureidx">
        </div>
    </div>
    </div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-3 list">
          <input class="form-check-input" type="checkbox" id="goodfeatureidx14" value="14" v-model="gooddiscFeatureidx">
        </div>
        <div class="col-6">
            <p class="h6 small text-center">낙관적</p>
        </div>
        <div class="col-3">
          <input class="form-check-input" type="checkbox" id="baddfeatureidx14" value="14" v-model="baddiscFeatureidx">
        </div>
    </div>
    </div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-3 list">
          <input class="form-check-input" type="checkbox" id="goodfeatureidx15" value="15" v-model="gooddiscFeatureidx">
        </div>
        <div class="col-6">
            <p class="h6 small text-center">헌신적</p>
        </div>
        <div class="col-3">
          <input class="form-check-input" type="checkbox" id="baddfeatureidx15" value="15" v-model="baddiscFeatureidx">
        </div>
    </div>
    </div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-3 list">
          <input class="form-check-input" type="checkbox" id="goodfeatureidx16" value="16" v-model="gooddiscFeatureidx">
        </div>
        <div class="col-6">
            <p class="h6 small text-center">정확성</p>
        </div>
        <div class="col-3">
          <input class="form-check-input" type="checkbox" id="baddfeatureidx16" value="16" v-model="baddiscFeatureidx">
        </div>
    </div>
    </div>
    </div>
    <br/>
    <br/>
    <div class="border">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-3 list">
          <input class="form-check-input" type="checkbox" id="goodfeatureidx17" value="17" v-model="gooddiscFeatureidx">
        </div>
        <div class="col-6">
            <p class="h6 small text-center">자기주장</p>
        </div>
        <div class="col-3">
          <input class="form-check-input" type="checkbox" id="baddfeatureidx17" value="17" v-model="baddiscFeatureidx">
        </div>
    </div>
    </div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-3 list">
          <input class="form-check-input" type="checkbox" id="goodfeatureidx18" value="18" v-model="gooddiscFeatureidx">
        </div>
        <div class="col-6">
            <p class="h6 small text-center">열정적</p>
        </div>
        <div class="col-3">
          <input class="form-check-input" type="checkbox" id="baddfeatureidx18" value="18" v-model="baddiscFeatureidx">
        </div>
    </div>
    </div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-3 list">
          <input class="form-check-input" type="checkbox" id="goodfeatureidx19" value="19" v-model="gooddiscFeatureidx">
        </div>
        <div class="col-6">
            <p class="h6 small text-center">협력적</p>
        </div>
        <div class="col-3">
          <input class="form-check-input" type="checkbox" id="baddfeatureidx19" value="19" v-model="baddiscFeatureidx">
        </div>
    </div>
    </div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-3 list">
          <input class="form-check-input" type="checkbox" id="goodfeatureidx20" value="20" v-model="gooddiscFeatureidx">
        </div>
        <div class="col-6">
            <p class="h6 small text-center">체계적</p>
        </div>
        <div class="col-3">
          <input class="form-check-input" type="checkbox" id="baddfeatureidx20" value="20" v-model="baddiscFeatureidx">
        </div>
    </div>
    </div>
    </div>
    <div class="border ms-3">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-3 list">
          <input class="form-check-input" type="checkbox" id="goodfeatureidx21" value="21" v-model="gooddiscFeatureidx">
        </div>
        <div class="col-6">
            <p class="text-center">도전적</p>
        </div>
        <div class="col-3">
          <input class="form-check-input" type="checkbox" id="baddfeatureidx21" value="21" v-model="baddiscFeatureidx">
        </div>
    </div>
    </div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-3 list">
          <input class="form-check-input" type="checkbox" id="goodfeatureidx22" value="22" v-model="gooddiscFeatureidx">
        </div>
        <div class="col-6">
            <p class="h6 small text-center">설득력</p>
        </div>
        <div class="col-3">
          <input class="form-check-input" type="checkbox" id="baddfeatureidx22" value="22" v-model="baddiscFeatureidx">
        </div>
    </div>
    </div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-3 list">
          <input class="form-check-input" type="checkbox" id="goodfeatureidx23" value="23" v-model="gooddiscFeatureidx">
        </div>
        <div class="col-6">
            <p class="h6 small text-center">타협적</p>
        </div>
        <div class="col-3">
          <input class="form-check-input" type="checkbox" id="baddfeatureidx23" value="23" v-model="baddiscFeatureidx">
        </div>
    </div>
    </div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-3 list">
          <input class="form-check-input" type="checkbox" id="goodfeatureidx24" value="24" v-model="gooddiscFeatureidx">
        </div>
        <div class="col-6">
            <p class="h6 small text-center">분석적</p>
        </div>
        <div class="col-3">
          <input class="form-check-input" type="checkbox" id="baddfeatureidx24" value="24" v-model="baddiscFeatureidx">
        </div>
    </div>
    </div>
    </div>
    <br/>
    <br/>
    <div class="border">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-3 list">
          <input class="form-check-input" type="checkbox" id="goodfeatureidx25" value="25" v-model="gooddiscFeatureidx">
        </div>
        <div class="col-6">
            <p class="h6 small text-center">대담함</p>
        </div>
        <div class="col-3">
          <input class="form-check-input" type="checkbox" id="baddfeatureidx25" value="25" v-model="baddiscFeatureidx">
        </div>
    </div>
    </div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-3 list">
          <input class="form-check-input" type="checkbox" id="goodfeatureidx26" value="26" v-model="gooddiscFeatureidx">
        </div>
        <div class="col-6">
            <p class="h6 small text-center">호의적인</p>
        </div>
        <div class="col-3">
          <input class="form-check-input" type="checkbox" id="baddfeatureidx26" value="26" v-model="baddiscFeatureidx">
        </div>
    </div>
    </div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-3 list">
          <input class="form-check-input" type="checkbox" id="goodfeatureidx27" value="27" v-model="gooddiscFeatureidx">
        </div>
        <div class="col-6">
            <p class="h6 small text-center">자제력</p>
        </div>
        <div class="col-3">
          <input class="form-check-input" type="checkbox" id="baddfeatureidx27" value="27" v-model="baddiscFeatureidx">
        </div>
    </div>
    </div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-3 list">
          <input class="form-check-input" type="checkbox" id="goodfeatureidx28" value="28" v-model="gooddiscFeatureidx">
        </div>
        <div class="col-6">
            <p class="h6 small text-center">완고함</p>
        </div>
        <div class="col-3">
          <input class="form-check-input" type="checkbox" id="baddfeatureidx28" value="28" v-model="baddiscFeatureidx">
        </div>
    </div>
    </div>
    </div>
    <div class="border ms-3">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-3 list">
          <input class="form-check-input" type="checkbox" id="goodfeatureidx29" value="29" v-model="gooddiscFeatureidx">
        </div>
        <div class="col-6">
            <p class="text-center">탐구적</p>
        </div>
        <div class="col-3">
          <input class="form-check-input" type="checkbox" id="baddfeatureidx29" value="29" v-model="baddiscFeatureidx">
        </div>
    </div>
    </div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-3 list">
          <input class="form-check-input" type="checkbox" id="goodfeatureidx30" value="30" v-model="gooddiscFeatureidx">
        </div>
        <div class="col-6">
            <p class="h6 small text-center">사교적</p>
        </div>
        <div class="col-3">
          <input class="form-check-input" type="checkbox" id="baddfeatureidx30" value="30" v-model="baddiscFeatureidx">
        </div>
    </div>
    </div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-3 list">
          <input class="form-check-input" type="checkbox" id="goodfeatureidx31" value="31" v-model="gooddiscFeatureidx">
        </div>
        <div class="col-6">
            <p class="h6 small text-center">사려깊음</p>
        </div>
        <div class="col-3">
          <input class="form-check-input" type="checkbox" id="baddfeatureidx31" value="31" v-model="baddiscFeatureidx">
        </div>
    </div>
    </div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-3 list">
          <input class="form-check-input" type="checkbox" id="goodfeatureidx32" value="32" v-model="gooddiscFeatureidx">
        </div>
        <div class="col-6">
            <p class="h6 small text-center">객관적</p>
        </div>
        <div class="col-3">
          <input class="form-check-input" type="checkbox" id="baddfeatureidx32" value="32" v-model="baddiscFeatureidx">
        </div>
    </div>
    </div>
    </div>
    <br/>
    <br/>
    <div class="border">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-3 list">
          <input class="form-check-input" type="checkbox" id="goodfeatureidx33" value="33" v-model="gooddiscFeatureidx">
        </div>
        <div class="col-6">
            <p class="h6 small text-center">빠른조치</p>
        </div>
        <div class="col-3">
          <input class="form-check-input" type="checkbox" id="baddfeatureidx33" value="33" v-model="baddiscFeatureidx">
        </div>
    </div>
    </div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-3 list">
          <input class="form-check-input" type="checkbox" id="goodfeatureidx134" value="34" v-model="gooddiscFeatureidx">
        </div>
        <div class="col-6">
            <p class="h6 small text-center">쾌활함</p>
        </div>
        <div class="col-3">
          <input class="form-check-input" type="checkbox" id="baddfeatureidx34" value="34" v-model="baddiscFeatureidx">
        </div>
    </div>
    </div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-3 list">
          <input class="form-check-input" type="checkbox" id="goodfeatureidx35" value="35" v-model="gooddiscFeatureidx">
        </div>
        <div class="col-6">
            <p class="h6 small text-center">일관성</p>
        </div>
        <div class="col-3">
          <input class="form-check-input" type="checkbox" id="baddfeatureidx35" value="35" v-model="baddiscFeatureidx">
        </div>
    </div>
    </div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-3 list">
          <input class="form-check-input" type="checkbox" id="goodfeatureidx36" value="36" v-model="gooddiscFeatureidx">
        </div>
        <div class="col-6">
            <p class="h6 small text-center">비판적사고</p>
        </div>
        <div class="col-3">
          <input class="form-check-input" type="checkbox" id="baddfeatureidx36" value="36" v-model="baddiscFeatureidx">
        </div>
    </div>
    </div>
    </div>
    <div class="border1 ms-3">
      <div class="smile">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
</svg>
      </div>
    </div>
    <br/>
    <br/>
    <br/>
  <button class="btn" type="submit" style="background-color: #4a60d4; color: white;" @click='pushItem()'>결과 확인하러 가기</button>
    <br/>
    <br/>
    <br/>
    <br/>
    <hr style="border:solid 1px gray">
    <p style="text-align:center; font-size:18px; color:gray">DISC란?</p>
    <div class="outer">
      <div class=" inner" style="width: 90%">
        <div class="text-wrap">
      <p style="text-align:left; font-size:14px; color:gray">
      DISC 모델은 1928년 미국 콜롬비아대학 심리학교수인 Willam Mouston Marston 박사가 고안한 독자적인 행동유형모델입니다. 인간은 환경을 어떻게 인식하고 또한 그 환경 속에서 어떻게 인식하느냐에 따라 4가지 형태로 행동을 분류합니다. 이러한 인식을 축으로 한 인간의 행동을 각각 주도형,사교형,안정형,신중형, 즉 Disc 행동유형으로 부르고 있습니다.
      </p></div>
    </div>
      </div>
      <div class="outer">
      <div class=" inner" style="width: 90%">
        <div class="text-wrap">
      <p style="text-align:left; font-size:14px; color:gray">
        DISC는 인간의 행동유형(성격)을 구성하는 핵심 4대요소인 Dominance, InfIuence, Steadiness, Conscientiousness 의 약자입니다.
      </p></div>
    </div>
      </div>
      <div class="outer">
      <div class=" inner" style="width: 90%">
        <div class="text-wrap">
      <p style="text-align:left; font-size:14px; color:gray">
        '인플' 은 회원님의 행동유형과 회원님이 선호하는 행동유형을 머신러닝을 통해 학습하고 예측하며, 이에 맞게 자동으로 추천합니다.
      </p></div>
      </div>
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
      itemList: ['dc', 'id', 'cs', 'si', 'dc', 'id', 'cs', 'si', 'dc', 'id', 'cs', 'si', 'd', 'i', 's', 'c', 'd', 'i', 's', 'c', 'd', 'i', 's', 'c', 'di', 'is', 'sc', 'cd', 'di', 'is', 'sc', 'cd', 'di', 'is', 'sc', 'cd'],
      gooddiscFeatureidx: [],
      baddiscFeatureidx: [],
      goodList: [],
      badList: [],
      goodListname: [],
      badListname: []
    }
  },
  // eslint-disable-next-line key-spacing
  methods : {
    pushItem () {
      for (let i = 0; i < this.gooddiscFeatureidx.length; i++) {
        this.goodListname.push(this.itemList[this.gooddiscFeatureidx[i] - 1])
      }
      for (let i = 0; i < this.baddiscFeatureidx.length; i++) {
        this.badListname.push(this.itemList[this.baddiscFeatureidx[i] - 1])
      }
      for (let i = 0; i < this.gooddiscFeatureidx.length; i++) {
        this.goodList.push({ discFeatureIdx: this.gooddiscFeatureidx[i], name: this.goodListname[i] })
      }
      for (let i = 0; i < this.baddiscFeatureidx.length; i++) {
        this.badList.push({ discFeatureIdx: this.baddiscFeatureidx[i], name: this.badListname[i] })
      }
      this.goodList.sort((a, b) => (parseInt(a.discFeatureIdx) > parseInt(b.discFeatureIdx)) ? 1 : -1)
      this.badList.sort((a, b) => (parseInt(a.discFeatureIdx) > parseInt(b.discFeatureIdx)) ? 1 : -1)
      const data = { goodList: this.goodList, badList: this.badList }
      console.log(data)
      axios
        .post(process.env.VUE_APP_API_BASE_URL + '/app/user-discs', JSON.stringify(data), { headers: { 'Content-Type': 'application/json', Authorization: VueCookies.get('Authorization') } })
        .then(res => {
          const userDiscIdx = res.data.result.userDiscIdx
          this.$router.push({ name: 'disctestresult', params: { userDiscIdx: userDiscIdx } })
        })
        .catch(err => {
          console.log(err)
        })
    },
    test () {
      axios
        .get(process.env.VUE_APP_API_BASE_URL + '/app/discs')
        .then(res => {
          this.discs = res.data
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>
.outer{
  text-align: center;
}
.inner{
  display: inline-block;
}
.smile{
  margin: auto;
  justify-content: center;
}
h4{
  text-align: center;
}
.container{
  height: 28px;
}
.border1{
  display:inline-block;
  width:44%;
  height: 50px;
  justify-content: center;
}
.border{
  border-radius: 10px;
  display:inline-block;
  width:44%;
  height: 111px;
}
.text-center{
  line-height: 2;
  font-size: 12px;
}
</style>
