<template>
    <OtherUserinfoViewVue/>
    <div style="position:fixed; border-style:solid; border-width:0px; border-color: black; width:390px; height:95px; bottom:70px; background-color: white;">
      <div style="float:left; position:relative; top:10px; margin-left:40px" type="button" @click="goBack()">
        <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="#A31FE1" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
</svg>
      </div>
      <div style="float:left; position:relative; top:10px; left:42px" type="button" @click="GotoChat">
        <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="#1FE13E" class="bi bi-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
</svg>
<svg style="z-index: 99999; position:fixed; left:174px; bottom:95px" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#1FE13E" class="bi bi-chat-left" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
</svg>
      </div>
      <div style="float:right; position:relative; top:10px; margin-right:40px" type="button" @click="deleteLike">
        <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="#E11F1F" class="bi bi-x-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
import VueCookies from 'vue-cookies'
import OtherUserinfoViewVue from '@/components/OtherUserinfoView.vue'

export default {
  components: { OtherUserinfoViewVue },
  data () {
    return {
      chatRoomIdx: undefined,
      matchedUserIdx: this.$route.params.userIdx
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    async deleteLike () { /// 유저 좋아요 취소
      await axios
        .patch(process.env.VUE_APP_API_BASE_URL + '/app/user-likes/' + this.matchedUserIdx, this.matchedUserIdx, { headers: { 'Content-Type': 'application/json', Authorization: VueCookies.get('Authorization') } })
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    },
    async getChatRoomIdx () { /// 유저 좋아요 취소
      await axios
        .get(process.env.VUE_APP_API_BASE_URL + '/chat/room/match/' + this.matchedUserIdx, { headers: { 'Content-Type': 'application/json', Authorization: VueCookies.get('Authorization') } })
        .then(res => {
          this.chatRoomIdx = res.data.result.chatRoomIdx
        })
        .catch(err => {
          console.log(err)
        })
    },
    async GotoChat () {
      if (this.chatRoomIdx === undefined) {
        await this.getChatRoomIdx()
      }
      if (this.chatRoomIdx !== undefined) {
        this.$router.push({ name: 'ChatRoomView', params: { roomId: this.chatRoomIdx } })
      }
    }
  }
}
</script>

<style>

</style>
