<template>
   <div class="outer" style=" margin-top: 3%;">
      <div class=" inner" style="width: 95%">
        <div class="text-wrap">
      <p style="text-align:left; font-size:20px;">
        팀원 리뷰하기
      </p></div>
      </div>
      </div>
    <div class="outer">
      <div class=" inner" style="width:95%">
        <div class="text-wrap">
      <p style="text-align:center; font-size:18px; color:gray">
        팀원에게 해당하는 성향을
        <br/>
        "3가지만" 골라주세요 !
      </p></div>
      </div>
      </div>
    <hr style="border:solid 1px gray">
    <br/>
    <div v-for="(rev, idx) in reviews" :key="idx">
      <button type="button" style="width:80%; height:50px; color:gray; margin-bottom:20px; border-radius:15px; border-width:0px; background-color: gray; color:white; font-size: 18px;" @click="inputfeature(idx)">{{rev.feature}}</button>
    </div>
    <hr style="border:solid 1px gray">
    <div v-for="(selectfeature, idx) in selectfeature" :key="idx">
      <div type="button" style="float:left; margin-right:4%; margin-left:4%; width:25%; height:40px; color:gray; margin-bottom:20px; border-radius:20px; border-width:0px; background-color: gray; color:white; font-size: 18px; line-height:40px;" @click="deletefeature(idx)">{{selectfeature}}</div>
    </div>
    <br/>
    <div>
      <button type="button" style="width:80%; height:50px; color:gray; margin-bottom:20px; border-radius:15px; border-width:0px; background-color:#4a60d4; color:white; font-size: 18px;" @click="sendreview">리뷰 완료하기</button>
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
      reviews: [],
      discFeatureIdx: [],
      name: [],
      feature: [],
      selectfeature: [],
      newreviews: []
    }
  },
  methods: {
    getreviewinfodata () {
      console.log(VueCookies.get('Authorization'))
      axios
        .get(process.env.VUE_APP_API_BASE_URL + '/app/reviews', { headers: { 'Content-Type': 'application/json', Authorization: VueCookies.get('Authorization') } })
        .then(res => {
          console.log(res.data.result)
          this.reviews = res.data.result
          for (let i = 0; i < this.reviews.length; i++) {
            this.discFeatureIdx.push(this.reviews[i].discFeatureIdx)
            this.name.push(this.reviews[i].name)
            this.feature.push(this.reviews[i].feature)
          }
          console.log(this.discFeatureIdx)
          console.log(this.name)
          console.log(this.feature)
        })
        .catch(err => {
          console.log(err)
        })
    },
    inputfeature (idx) {
      this.selectfeature.push(this.feature[idx])
      const selection = { discFeatureIdx: this.discFeatureIdx[idx], name: this.name[idx] }
      this.newreviews.push(selection)
      console.log(this.newreviews)
    },
    async sendreview () {
      const teamIdx = this.$route.params.teamIdx
      const reviewingIdx = this.$route.params.userIdx
      const request = { teamIdx: teamIdx, reviews: this.newreviews }
      await axios
        .post(process.env.VUE_APP_API_BASE_URL + '/app/reviews/' + reviewingIdx, request, { headers: { 'Content-Type': 'application/json', Authorization: VueCookies.get('Authorization') } })
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
      this.$router.go(-1)
    },
    deletefeature (idx) {
      this.selectfeature.splice(idx, 1)
      this.newreviews.splice(idx, 1)
      console.log(this.newreviews)
    }
  },
  created () {
    // 미리 api에서 조회 데이터 가져옴
    this.getreviewinfodata()
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
</style>
