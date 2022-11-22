<template>
  <br/>
      <div class="inner" style="width: 80%">
      <p style="text-align:left; font-size:20px;">
        나의 DISC는? {{ userDiscIdx }}
      </p>
      </div>
      <hr style="border:solid 1px gray">
    <br/>
    <div class= test>
      {{userDiscIdx}}
    </div>
    <div class="progressFull">
      <div class="progress">
  <div class="progress-bar" role="progressbar" style="background-color: #e93423; width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">D</div>
  <div class="progress-bar" role="progressbar" style="background-color: #ed8232; width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">I</div>
  <div class="progress-bar" role="progressbar" style="background-color: #e9ee4c; color: black; width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">S</div>
  <div class="progress-bar" role="progressbar" style="background-color: #76f64b; color:black; width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">C</div>
</div>
    </div>
    <br/>
    <div class="border2">
      <div class="wrapper">
        <span class="D">D</span><span class="ominance">ominance</span><span class="explain" style="color:gray; font-size:14px;">&nbsp;&nbsp;&nbsp;주도형</span>
      </div>
      <div class="progressD">
        <div class="progress">
  <div class="progress-bar" role="progressbar" style=" background-color: #e93423; width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
</div>
      </div>
      <div class="D">
        <div class="text-wrap">
      <p style="text-align:left; font-size:14px; color:gray">
        경쟁적이며 자신의 의견을 주장합니다. 개척자 경향이 강합니다. 전화통화를 하고 있는 동시에, 다른 사람의 말이나 행동을 종종 가로막는 행동을 할 수 있습니다. 대체로 서두르는 편이며 많은 프로젝트를 수행합니다. 다른사람에게 항상 예의 바른 태도를 보이지는 않습니다.
      </p></div>
      </div>
    </div>
    <br/>
    <br/>
    <div class="border3">
      <div class="wrapper">
        <span class="I">I</span><span class="nfluence">nfluence</span><span class="explain" style="color:gray; font-size:14px;">&nbsp;&nbsp;&nbsp;사교형</span>
      </div>
      <div class="progressI">
        <div class="progress">
  <div class="progress-bar" role="progressbar" style="background-color: #ed8232; width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
</div>
      </div>
      <div class="I">
        <div class="text-wrap">
      <p style="text-align:left; font-size:14px; color:gray">
        말이 많으며, 의사소통에 능통합니다. 유머감각이 풍부하며 활기있고 개방적이며 친절합니다. 상대방에게 동의할 때 그 표현을 적극적으로 하며, 사물이나 주제의 긍정적인 측면을 강조합니다.
      </p></div>
      </div>
</div>
<br/>
<br/>
<div class="border4">
  <div class="wrapper">
        <span class="S">S</span><span class="teadiness">teadiness</span><span class="explain" style="color:gray; font-size:14px;">&nbsp;&nbsp;&nbsp;안정형</span>
      </div>
      <div class="progressS">
        <div class="progress">
  <div class="progress-bar" role="progressbar" style="background-color: #e9ee4c; color: black; width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
</div>
      </div>
      <div class="S">
        <div class="text-wrap">
      <p style="text-align:left; font-size:14px; color:gray">
        조심성 있으며, 안정적입니다. 안전을 추구하고 안정유지 조심성 있게 추진합니다. 타인을 부러워 하지 않으며 복지부동이 경향이 있습니다.
      </p></div>
      </div>
</div>
<br/>
<br/>
<div class="border5">
  <div class="wrapper">
        <span class="C">C</span><span class="onscientiousness">onscientiousness</span><span class="explain" style="color:gray; font-size:14px;">&nbsp;&nbsp;&nbsp;신중형</span>
      </div>
      <div class="progressC">
        <div class="progress">
  <div class="progress-bar" role="progressbar" style=" background-color: #76f64b; color:black; width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
</div>
      </div>
      <div class="C">
        <div class="text-wrap">
      <p style="text-align:left; font-size:14px; color:gray">
        꼼꼼하고 완벽주의적입니다. 질서 정연하며, 세부사항에 초점을 둡니다. 외교적인 방식으로 매우 예의를 갖춥니다.
      </p></div>
      </div>
</div>
<br/>
<br/>
<router-link to="/mainmenu">
  <button class="btn" type="submit" style="background-color: #4a60d4; color: white;">메인화면으로 가기</button>
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
    }
  },
  methods: {
    getData () {
      axios
        .get('http://prod.inpro-server.shop:9000/app/user-discs', { headers: { 'Content-Type': 'application/json', Authorization: 'eyJ0eXBlIjoiand0IiwiYWxnIjoiSFMyNTYifQ.eyJ1c2VySWR4IjoxLCJpYXQiOjE2Njg3NTkzMjIsImV4cCI6MTY3MDIzMDU1MX0.uETLHjg2EDpy3KEmpRgVGcMw-vv2bvImh_Dpdj4RTtc' } })
        .then(res => {
          this.discs = res.data
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created () {
    this.getData()
  }
}
</script>

<style scoped>

.text-wrap{
  position: relative;
  width:90%;
  top:28px;
  left:5%;
}
.progressFull{
  left:5%;
  position: relative;
  width:90%;
}
.progressD{
  position: relative;
  top:15px;
  left:15px;
  width:90%;
}
.progressI{
  position: relative;
  top:15px;
  left:15px;
  width:90%;
}
.progressS{
  position: relative;
  top:15px;
  left:15px;
  width:90%;
}
.progressC{
  position: relative;
  top:15px;
  left:15px;
  width:90%;
}
.wrapper{
  text-align: left;
  position: relative;
  top:10px;
  left:20px;
}
.D{
  font-size: 18px;
  color: #e93423;
}
.ominance{
  font-size: 16px;
  color:gray;
}
.I{
  font-size: 18px;
  color: #ed8232;
}
.nfluence{
  font-size: 16px;
  color:gray;
}
.S{
  font-size: 18px;
  color: #e9ee4c;
}
.teadiness{
  font-size: 16px;
  color:gray;
}

.C{
  font-size: 18px;
  color: #76f64b;
}
.onscientiousness{
  font-size: 16px;
  color:gray;
}
.inner{
  position: relative;
  left:3%
}
.border2{
  border-style:solid;
  border-width: 1px;
  border-color: #ee8884;
  border-radius: 20px;
  display:inline-block;
  width:86%;
  height: 210px;
}
.border3{
  border-style:solid;
  border-width: 1px;
  border-color: #f4bf89;
  border-radius: 20px;
  display:inline-block;
  width:86%;
  height: 210px;
}
.border4{
  border-style:solid;
  border-width: 1px;
  border-color: #f5f690;
  border-radius: 20px;
  display:inline-block;
  width:86%;
  height: 210px;
}
.border5{
  border-style:solid;
  border-width: 1px;
  border-color: #abfa8d;
  border-radius: 20px;
  display:inline-block;
  width:86%;
  height: 210px;
}
</style>
