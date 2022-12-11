<template>
    <br/>
      <div class="inner" style="width: 80%">
      <p style="text-align:left; font-size:20px;">
        나의 DISC 목록
      </p>
      </div>
      <hr style="border:solid 1px gray">
    <br/>
    <div style="position:relative; top:-20px; left:3%;">
      <p style="text-align:left; font-size:16px;">
        나의 대표 DISC
      </p>
      </div>
    <div v-for="(result, idx) in results.filter( (p) => p.isRepDisc === 'Y')" :key="{idx}">
      <div style="display:flex; justify-content:center;">
        <div type="button" style="border-style:solid; width:80%; height:100px; background-color:gray; border-radius: 20px; margin-bottom: 30px; border-width:0px; color:white; display: flex; align-items: center; justify-content: center; font-size: 18px;" @click="gotoresult(idx)">
        DiSC 결과 {{result.userDiscIdx}}
        </div>
      </div>
    </div>

    <hr style="border:solid 1px gray">
     <div v-for="(result, idx) in results" :key="{idx}">
      <div style="display:flex; justify-content:space-between;">
        <button class="buttons" style="margin-left:12%;" @click="setrep(idx)">대표로 설정</button><button class="buttons" style="margin-right:12%;" @click="deletedisc(idx)">삭제</button>
      </div>
      <div style="display:flex; justify-content:center;">
        <div type="button" style="border-style:solid; width:80%; height:100px; background-color:gray; border-radius: 20px; margin-bottom: 30px; border-width:0px; color:white; display: flex; align-items: center; justify-content: center; font-size: 18px;" @click="gotoresult(idx)">
        DiSC 결과 {{result.userDiscIdx}}
        </div>
        </div>
    </div>
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
      results: [],
      userDiscIdx: [],
      name: []
    }
  },
  methods: {
    async getresult () {
      await axios
        .get(process.env.VUE_APP_API_BASE_URL + '/app/user-discs/', { headers: { 'Content-Type': 'application/json', Authorization: VueCookies.get('Authorization') } })
        .then(res => {
          console.log(res.data.result)
          this.results = res.data.result
          for (let i = 0; i < res.data.result.length; i++) {
            this.userDiscIdx.push(res.data.result[i].userDiscIdx)
            this.name.push(res.data.result[i].name)
          }
          console.log(this.userDiscIdx)
          console.log(this.name)
        })
        .catch(err => {
          console.log(err)
        })
      this.$store.state.myIdx = this.results.filter((p) => p.isRepDisc === 'Y')[0].userDiscIdx // 내 대표 disc로 지정
      console.log('myIdx: ' + this.$store.state.myIdx)
    },
    gotoresult (idx) {
      const discIdx = this.userDiscIdx[idx]
      this.$router.push({ name: 'disctestresult', params: { userDiscIdx: discIdx } }) // 해당 disc 결과로 전송
    },
    deletedisc (idx) {
      this.results.splice(idx, 1)
    },
    setrep (idx) {
      this.results.filter((p) => p.isRepDisc === 'Y')[0].isRepDisc = 'N'
      this.results[idx].isRepDisc = 'Y'
      this.$store.state.myIdx = this.results.filter((p) => p.isRepDisc === 'Y')[0].userDiscIdx // 내 대표 disc로 지정
      console.log('myIdx: ' + this.$store.state.myIdx)
    }
  },
  created () {
    this.getresult()
  }
}
</script>

<style scoped>
.inner{
  position: relative;
  left:3%;
}

.buttons {
  margin-bottom: 10px;
  border-style: solid;
  border-width:0px;
  border-radius:10px;
  background-color: gray;
  color:white;
}
</style>
