<template>
    <OtherTeaminfoViewVue/>
    <div style="display:flex; justify-content: space-between; position:fixed; border-style:solid; border-width:0px; border-color: black; width:100%; min-width:390px; height:95px; bottom:70px; background-color: white;">
      <div style="position:relative; margin-left: 15%; top:10px;" type="button" @click="goBack()">
        <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="#A31FE1" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
</svg>
      </div>
      <div style="position:relative; top:10px; margin-left: 7%;">
        <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="white" class="bi bi-x-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>
      </div>
      <div style="position:relative; margin-right:15%; top:10px;" type="button" @click="deleteLike">
        <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="#E11F1F" class="bi bi-x-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
import OtherTeaminfoViewVue from '@/components/OtherTeaminfoView.vue'

export default {
  components: { OtherTeaminfoViewVue },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    async deleteLike () { // 유저 좋아요 취소
      const likingIdx = this.$route.params.teamIdx
      await axios
        .patch(process.env.VUE_APP_API_BASE_URL + '/app/team-likes/' + likingIdx, likingIdx, { headers: { 'Content-Type': 'application/json', Authorization: process.env.VUE_APP_ACCESS_TOKEN } })
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
