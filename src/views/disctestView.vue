<template>
    <h1>나의 Disc는?</h1>
    <h2>나에게 적합한 키워드와 부적합한 키워드를 각 칸에서 하나씩 골라주세요!
        <br />
        회원님의 업무성향 DiSC를 알려드립니다 :)
    </h2>
    <div class="span4">근면</div>
    <div class="form-check-inline">
<ul class="list-group">
  <li class="list-group-item">
    <div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="gooddiscFeatureidx1" value="1" v-model="gooddiscFeatureidx">
    <label class="form-check-label" for="gooddiscFeatureidx2"></label>
</div>
<div class="form-check form-check-inline">
  <h6>근면</h6>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="baddiscFeatureidx1" value="1" v-model="baddiscFeatureidx">
  <label class="form-check-label" for="gooddiscFeatureidx2"></label>
</div>
<br/>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="gooddiscFeatureidx2" value="2" v-model="gooddiscFeatureidx">
  <label class="form-check-label" for="gooddiscFeatureidx2"></label>
</div>
<div class="form-check form-check-inline">
  <h6>침착함</h6>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="baddiscFeatureidx2" value="2" v-model="baddiscFeatureidx">
  <label class="form-check-label" for="baddiscFeatureidx2"></label>
</div>
<br/>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="gooddiscFeatureidx3" value="3" v-model="gooddiscFeatureidx">
  <label class="form-check-label" for="gooddiscFeatureidx3"></label>
</div>
<div class="form-check form-check-inline">
  <h6>사색적</h6>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="baddiscFeatureidx3" value="3" v-model="baddiscFeatureidx">
  <label class="form-check-label" for="baddiscFeatureidx3"></label>
</div>
<br/>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="gooddiscFeatureidx4" value="4" v-model="gooddiscFeatureidx">
  <label class="form-check-label" for="gooddiscFeatureidx4"></label>
</div>
<div class="form-check form-check-inline">
  <h6>긍정적</h6>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="baddiscFeatureidx4" value="4" v-model="baddiscFeatureidx">
  <label class="form-check-label" for="baddiscFeatureidx4"></label>
</div>
  </li>
</ul>
</div>

<div class="form-check-inline">
<ul class="list-group">
  <li class="list-group-item">
    <div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="gooddiscFeatureidx5" value="5" v-model="gooddiscFeatureidx">
  <label class="form-check-label" for="gooddiscFeatureidx5"></label>
</div>
<div class="form-check form-check-inline">
  <h6>개인적 성취</h6>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="baddiscFeatureidx5" value="5" v-model="baddiscFeatureidx">
  <label class="form-check-label" for="baddiscFeatureidx5"></label>
</div>
<br/>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="gooddiscFeatureidx6" value="6" v-model="gooddiscFeatureidx">
  <label class="form-check-label" for="gooddiscFeatureidx6"></label>
</div>
<div class="form-check form-check-inline">
  <h6>조급함</h6>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="baddiscFeatureidx6" value="6" v-model="baddiscFeatureidx">
  <label class="form-check-label" for="baddiscFeatureidx6"></label>
</div>
<br/>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="gooddiscFeatureidx7" value="7" v-model="gooddiscFeatureidx">
  <label class="form-check-label" for="gooddiscFeatureidx7"></label>
</div>
<div class="form-check form-check-inline">
  <h6>준비성</h6>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="baddiscFeatureidx7" value="7" v-model="baddiscFeatureidx">
  <label class="form-check-label" for="baddiscFeatureidx7"></label>
</div>
<br/>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="gooddiscFeatureidx8" value="8" v-model="gooddiscFeatureidx">
  <label class="form-check-label" for="gooddiscFeatureidx8"></label>
</div>
<div class="form-check form-check-inline">
  <h6>관대함</h6>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="baddiscFeatureidx8" value="8" v-model="baddiscFeatureidx">
  <label class="form-check-label" for="baddiscFeatureidx8"></label>
</div>
  </li>
</ul>
</div>
<br />
<br />

<div class="form-check-inline">
<ul class="list-group">
  <li class="list-group-item">
    <div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="gooddiscFeatureidx9" value="9" v-model="gooddiscFeatureidx">
  <label class="form-check-label" for="gooddiscFeatureidx9"></label>
</div>
<div class="form-check form-check-inline">
  <h6>결단력</h6>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="baddiscFeatureidx9" value="9" v-model="baddiscFeatureidx">
  <label class="form-check-label" for="baddiscFeatureidx9"></label>
</div>
<br/>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="gooddiscFeatureidx10" value="10" v-model="gooddiscFeatureidx">
  <label class="form-check-label" for="gooddiscFeatureidx10"></label>
</div>
<div class="form-check form-check-inline">
  <h6>모험심</h6>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="baddiscFeatureidx10" value="10" v-model="baddiscFeatureidx">
  <label class="form-check-label" for="baddiscFeatureidx10"></label>
</div>
<br/>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="gooddiscFeatureidx11" value="11" v-model="gooddiscFeatureidx">
  <label class="form-check-label" for="gooddiscFeatureidx11"></label>
</div>
<div class="form-check form-check-inline">
  <h6>자제력</h6>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="baddiscFeatureidx11" value="11" v-model="baddiscFeatureidx">
  <label class="form-check-label" for="baddiscFeatureidx11"></label>
</div>
<br/>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="gooddiscFeatureidx12" value="12" v-model="gooddiscFeatureidx">
  <label class="form-check-label" for="gooddiscFeatureidx12"></label>
</div>
<div class="form-check form-check-inline">
  <h6>갈등회피적</h6>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="baddiscFeatureidx12" value="12" v-model="baddiscFeatureidx">
  <label class="form-check-label" for="baddiscFeatureidx12"></label>
</div>
  </li>
</ul>
</div>

<div class="form-check-inline">
<ul class="list-group">
  <li class="list-group-item">
    <div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="gooddiscFeatureidx13" value="13" v-model="gooddiscFeatureidx">
  <label class="form-check-label" for="gooddiscFeatureidx13"></label>
</div>
<div class="form-check form-check-inline">
  <h6>결과지향</h6>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="baddiscFeatureidx13" value="13" v-model="baddiscFeatureidx">
  <label class="form-check-label" for="baddiscFeatureidx13"></label>
</div>
<br/>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="gooddiscFeatureidx14" value="14" v-model="gooddiscFeatureidx">
  <label class="form-check-label" for="gooddiscFeatureidx14"></label>
</div>
<div class="form-check form-check-inline">
  <h6>낙관적</h6>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="baddiscFeatureidx14" value="14" v-model="baddiscFeatureidx">
  <label class="form-check-label" for="baddiscFeatureidx14"></label>
</div>
<br/>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="gooddiscFeatureidx15" value="15" v-model="gooddiscFeatureidx">
  <label class="form-check-label" for="gooddiscFeatureidx15"></label>
</div>
<div class="form-check form-check-inline">
  <h6>헌신적</h6>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="baddiscFeatureidx15" value="15" v-model="baddiscFeatureidx">
  <label class="form-check-label" for="baddiscFeatureidx15"></label>
</div>
<br/>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="gooddiscFeatureidx16" value="16" v-model="gooddiscFeatureidx">
  <label class="form-check-label" for="gooddiscFeatureidx16"></label>
</div>
<div class="form-check form-check-inline">
  <h6>정확성</h6>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="baddiscFeatureidx16" value="16" v-model="baddiscFeatureidx">
  <label class="form-check-label" for="baddiscFeatureidx16"></label>
</div>
  </li>
</ul>
</div>
<br />
<br />

<div class="form-check-inline">
<ul class="list-group">
  <li class="list-group-item">
    <div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="gooddiscFeatureidx17" value="17" v-model="gooddiscFeatureidx">
  <label class="form-check-label" for="gooddiscFeatureidx17"></label>
</div>
<div class="form-check form-check-inline">
  <h6>자기주장</h6>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="baddiscFeatureidx17" value="17" v-model="baddiscFeatureidx">
  <label class="form-check-label" for="baddiscFeatureidx17"></label>
</div>
<br/>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="gooddiscFeatureidx18" value="18" v-model="gooddiscFeatureidx">
  <label class="form-check-label" for="gooddiscFeatureidx18"></label>
</div>
<div class="form-check form-check-inline">
  <h6>열정적</h6>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="baddiscFeatureidx18" value="18" v-model="baddiscFeatureidx">
  <label class="form-check-label" for="baddiscFeatureidx18"></label>
</div>
<br/>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="gooddiscFeatureidx19" value="19" v-model="gooddiscFeatureidx">
  <label class="form-check-label" for="gooddiscFeatureidx19"></label>
</div>
<div class="form-check form-check-inline">
  <h6>협력적</h6>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="baddiscFeatureidx19" value="19" v-model="baddiscFeatureidx">
  <label class="form-check-label" for="baddiscFeatureidx19"></label>
</div>
<br/>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="gooddiscFeatureidx20" value="20" v-model="gooddiscFeatureidx">
  <label class="form-check-label" for="gooddiscFeatureidx20"></label>
</div>
<div class="form-check form-check-inline">
  <h6>체계적</h6>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="baddiscFeatureidx20" value="20" v-model="baddiscFeatureidx">
  <label class="form-check-label" for="baddiscFeatureidx20"></label>
</div>
  </li>
</ul>
</div>

<div class="form-check-inline">
<ul class="list-group">
  <li class="list-group-item">
    <div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="gooddiscFeatureidx21" value="21" v-model="gooddiscFeatureidx">
  <label class="form-check-label" for="gooddiscFeatureidx21"></label>
</div>
<div class="form-check form-check-inline">
  <h6>도전적</h6>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="baddiscFeatureidx21" value="21" v-model="baddiscFeatureidx">
  <label class="form-check-label" for="baddiscFeatureidx21"></label>
</div>
<br/>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="gooddiscFeatureidx22" value="22" v-model="gooddiscFeatureidx">
  <label class="form-check-label" for="gooddiscFeatureidx22"></label>
</div>
<div class="form-check form-check-inline">
  <h6>설득력</h6>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="baddiscFeatureidx22" value="22" v-model="baddiscFeatureidx">
  <label class="form-check-label" for="baddiscFeatureidx22"></label>
</div>
<br/>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="gooddiscFeatureidx23" value="23" v-model="gooddiscFeatureidx">
  <label class="form-check-label" for="gooddiscFeatureidx23"></label>
</div>
<div class="form-check form-check-inline">
  <h6>타협적</h6>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="baddiscFeatureidx23" value="23" v-model="baddiscFeatureidx">
  <label class="form-check-label" for="baddiscFeatureidx23"></label>
</div>
<br/>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="gooddiscFeatureidx24" value="24" v-model="gooddiscFeatureidx">
  <label class="form-check-label" for="gooddiscFeatureidx24"></label>
</div>
<div class="form-check form-check-inline">
  <h6>분석적</h6>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="baddiscFeatureidx24" value="24" v-model="baddiscFeatureidx">
  <label class="form-check-label" for="baddiscFeatureidx24"></label>
</div>
  </li>
</ul>
</div>
<br />
<br />

<div class="form-check-inline">
<ul class="list-group">
  <li class="list-group-item">
    <div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="gooddiscFeatureidx25" value="25" v-model="gooddiscFeatureidx">
  <label class="form-check-label" for="gooddiscFeatureidx25"></label>
</div>
<div class="form-check form-check-inline">
  <h6>대담함</h6>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="baddiscFeatureidx25" value="25" v-model="baddiscFeatureidx">
  <label class="form-check-label" for="baddiscFeatureidx25"></label>
</div>
<br/>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="gooddiscFeatureidx26" value="26" v-model="gooddiscFeatureidx">
  <label class="form-check-label" for="gooddiscFeatureidx26"></label>
</div>
<div class="form-check form-check-inline">
  <h6>호의적인</h6>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="baddiscFeatureidx26" value="26" v-model="baddiscFeatureidx">
  <label class="form-check-label" for="baddiscFeatureidx26"></label>
</div>
<br/>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="gooddiscFeatureidx27" value="27" v-model="gooddiscFeatureidx">
  <label class="form-check-label" for="gooddiscFeatureidx27"></label>
</div>
<div class="form-check form-check-inline">
  <h6>자제력</h6>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="baddiscFeatureidx27" value="27" v-model="baddiscFeatureidx">
  <label class="form-check-label" for="baddiscFeatureidx27"></label>
</div>
<br/>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="gooddiscFeatureidx28" value="28" v-model="gooddiscFeatureidx">
  <label class="form-check-label" for="gooddiscFeatureidx28"></label>
</div>
<div class="form-check form-check-inline">
  <h6>완고함</h6>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="baddiscFeatureidx28" value="28" v-model="baddiscFeatureidx">
  <label class="form-check-label" for="baddiscFeatureidx28"></label>
</div>
  </li>
</ul>
</div>

<div class="form-check-inline">
<ul class="list-group">
  <li class="list-group-item">
    <div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="gooddiscFeatureidx29" value="29" v-model="gooddiscFeatureidx">
  <label class="form-check-label" for="gooddiscFeatureidx29"></label>
</div>
<div class="form-check form-check-inline">
  <h6>탐구적</h6>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="baddiscFeatureidx29" value="29" v-model="baddiscFeatureidx">
  <label class="form-check-label" for="baddiscFeatureidx29"></label>
</div>
<br/>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="gooddiscFeatureidx30" value="30" v-model="gooddiscFeatureidx">
  <label class="form-check-label" for="gooddiscFeatureidx30"></label>
</div>
<div class="form-check form-check-inline">
  <h6>사교적</h6>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="baddiscFeatureidx30" value="30" v-model="baddiscFeatureidx">
  <label class="form-check-label" for="baddiscFeatureidx30"></label>
</div>
<br/>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="gooddiscFeatureidx31" value="31" v-model="gooddiscFeatureidx">
  <label class="form-check-label" for="gooddiscFeatureidx31"></label>
</div>
<div class="form-check form-check-inline">
  <h6>사려깊음</h6>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="baddiscFeatureidx31" value="31" v-model="baddiscFeatureidx">
  <label class="form-check-label" for="baddiscFeatureidx31"></label>
</div>
<br/>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="gooddiscFeatureidx32" value="32" v-model="gooddiscFeatureidx">
  <label class="form-check-label" for="gooddiscFeatureidx32"></label>
</div>
<div class="form-check form-check-inline">
  <h6>객관적</h6>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="baddiscFeatureidx32" value="32" v-model="baddiscFeatureidx">
  <label class="form-check-label" for="baddiscFeatureidx32"></label>
</div>
  </li>
</ul>
</div>
<br />
<br />

<div class="form-check-inline">
<ul class="list-group">
  <li class="list-group-item">
    <div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="gooddiscFeatureidx33" value="33" v-model="gooddiscFeatureidx">
  <label class="form-check-label" for="gooddiscFeatureidx33"></label>
</div>
<div class="form-check form-check-inline">
  <h6>빠른조치</h6>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="baddiscFeatureidx33" value="33" v-model="baddiscFeatureidx">
  <label class="form-check-label" for="baddiscFeatureidx33"></label>
</div>
<br/>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="gooddiscFeatureidx34" value="34" v-model="gooddiscFeatureidx">
  <label class="form-check-label" for="gooddiscFeatureidx34"></label>
</div>
<div class="form-check form-check-inline">
  <h6>쾌활함</h6>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="baddiscFeatureidx34" value="34" v-model="baddiscFeatureidx">
  <label class="form-check-label" for="baddiscFeatureidx34"></label>
</div>
<br/>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="gooddiscFeatureidx35" value="35" v-model="gooddiscFeatureidx">
  <label class="form-check-label" for="gooddiscFeatureidx35"></label>
</div>
<div class="form-check form-check-inline">
  <h6>일관성</h6>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="baddiscFeatureidx35" value="35" v-model="baddiscFeatureidx">
  <label class="form-check-label" for="baddiscFeatureidx35"></label>
</div>
<br/>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="gooddiscFeatureidx36" value="36" v-model="gooddiscFeatureidx">
  <label class="form-check-label" for="gooddiscFeatureidx36"></label>
</div>
<div class="form-check form-check-inline">
  <h6>비판적 사고</h6>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="baddiscFeatureidx36" value="36" v-model="baddiscFeatureidx">
  <label class="form-check-label" for="baddiscFeatureidx36"></label>
</div>
  </li>
</ul>
</div>

<div class="form-check-inline">
<ul class="list-group">
  <li class="list-group-item">
<br/>
<br/>
<br/>
<br/>
  </li>
</ul>
</div>
<br />
<br />
<div>
  <button class="btn btn-primary" type="submit" @click='checkArr()'>결과 확인하러 가기</button>
</div>
<br/>
<div>
  <button class="btn btn-primary" type="submit" @click='test()'>값 가져오기</button>
</div>
<br />
<div>
  <button class="btn btn-primary" type="submit" @click='postidx()'>값 전송하기</button>
</div>
<br/>
<br />
<br />
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      gooddiscFeatureidx: [],
      baddiscFeatureidx: []
    }
  },
  // eslint-disable-next-line key-spacing
  methods : {
    checkArr () {
      console.log(this.gooddiscFeatureidx)
      console.log(this.baddiscFeatureidx)
    },
    test () {
      axios
        .get('http://prod.inpro-server.shop:9000/app/discs')
        .then(res => {
          this.discs = res.data
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
        .then(() => {

        })
    },
    postidx () {
      const payload = { goodlist: ['1', 'ds'], badlist: ['1', 'ds'] }
      axios
        .post('http://prod.inpro-server.shop:9000/app/user-discs', { payload })
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
        .then(() => {

        })
    }
  }
}
</script>
<style scoped>
.form-check-inline{
  text-align: center;
}
.form-check-input{
  text-align: center;
}
.list-group-item{
  text-align: justify;
}
</style>
