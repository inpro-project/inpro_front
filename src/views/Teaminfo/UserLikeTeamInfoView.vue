<template>
    <OtherUserinfoViewVue/>
    <div style="position:fixed; border-style:solid; border-width:0px; border-color: black; width:390px; height:95px; bottom:70px; background-color: white;">
      <div style="float:left; position:relative; top:10px; margin-left:40px" type="button" @click="goBack()">
        <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="#A31FE1" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
</svg>
      </div>
      <div style="float:left; position:relative; top:10px; left:42px" type="button" @click="sendLike">
        <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="#1FE13E" class="bi bi-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
</svg>
<svg style="z-index: 99999;position:fixed; left:174px; bottom:95px" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#1FE13E" class="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
</svg>
      </div>
      <div style="float:right; position:relative; top:10px; margin-right:40px" type="button" @click="passLike">
        <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="#E11F1F" class="bi bi-x-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
import OtherUserinfoViewVue from '@/components/OtherUserinfoView.vue'

export default {
  components: { OtherUserinfoViewVue },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    async sendLike () { // 유저 좋아요
      const userLikeIdx = this.$route.params.userIdx
      await axios
        .post(process.env.VUE_APP_API_BASE_URL + '/app/user-likes/' + userLikeIdx, userLikeIdx, { headers: { 'Content-Type': 'application/json', Authorization: process.env.VUE_APP_ACCESS_TOKEN } })
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    },
    async passLike () { // 유저 좋아요 넘기기
      const userpassIdx = this.$route.params.userIdx
      await axios
        .post(process.env.VUE_APP_API_BASE_URL + '/app/user-passes/' + userpassIdx, userpassIdx, { headers: { 'Content-Type': 'application/json', Authorization: process.env.VUE_APP_ACCESS_TOKEN } })
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style>

</style>
