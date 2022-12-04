<template>
    <OtherUserinfoViewVue/>
    <div style="display:flex; align-items: center;  justify-content: center; position:fixed; border-style:solid; border-width:0px; border-color: black; width:100%; min-width:390px; height:95px; bottom:70px; background-color: white;">
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" style="position:relative; width:80%; background-color: #4a60d4; border-style: solid; border-radius: 20px; height:50px; border-width:0px; color:white; font-size: 18px;">팀원 수락하기</button>
    </div>
          <!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style="position:fixed; top:40%">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">팀원 역할</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">역할</span>
  <input type="text" class="form-control" placeholder="팀원" aria-label="Username" aria-describedby="basic-addon1" @change="inputrole">
</div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="allowuser">승인</button>
      </div>
    </div>
  </div>
</div>
   <br/>
   <br/>
   <br/>
</template>

<script>
import axios from 'axios'
import VueCookies from 'vue-cookies'
import OtherUserinfoViewVue from '@/components/OtherUserinfoView.vue'

export default {
  data () {
    return {
      role: []
    }
  },
  components: { OtherUserinfoViewVue },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    async allowuser () { // 팀원 수락
      const userLikeIdx = this.$route.params.userIdx
      const teamIdx = this.$route.params.teamIdx
      const allowuser = { teamIdx: teamIdx, userIdx: userLikeIdx, role: this.role }
      console.log(allowuser)
      await axios
        .post(process.env.VUE_APP_API_BASE_URL + '/app/members', allowuser, { headers: { 'Content-Type': 'application/json', Authorization: process.env.VUE_APP_ACCESS_TOKEN } })
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
      this.$router.go(-1)
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
    },
    checkLogin () {
      if (VueCookies.get('Authorization') === null || VueCookies.get('userIdx') === null) {
        this.$router.push({ name: 'kakaologin' })
      }
  },
    inputrole (r) {
      this.role = r.target.value
    }
  },
  created () {
    this.checkLogin()
  }
}
</script>

<style>

</style>
