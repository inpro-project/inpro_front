<template>
  <div>
    <div>
      <PreviousChat v-bind:roomMembers="roomMembers" v-bind:roomId="roomId" />
      <PresentChat v-bind:newMessages="newMessages" v-bind:roomMembers="roomMembers" v-bind:roomId="roomId" />
    </div>
  </div>
</template>
<script>
import PreviousChat from '@/components/chat/PreviousChat.vue'
import PresentChat from '@/components/chat/PresentChat.vue'
import axios from 'axios'
import VueCookies from 'vue-cookies'

export default {
  components: {
    PreviousChat, PresentChat
  },
  props: ['roomId', 'newMessages'],
  data () {
    return {
      roomMembers: []
    }
  },
  methods: {
    getRoomMembers () {
      axios
        .get(process.env.VUE_APP_API_BASE_URL + '/chat/room/' + this.roomId + '/member', { headers: { Authorization: VueCookies.get('Authorization') } })
        .then(res => {
          for (const curRes of res.data.result) {
            const roomMember = {
              userIdx: curRes.userIdx,
              chatMemberIdx: curRes.userIdx,
              name: curRes.nickName,
              img: curRes.userImageUrl
            }
            this.roomMembers[curRes.userIdx] = roomMember
            console.log(curRes.userIdx)
            console.log(curRes.nickName)
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  setup () {},
  created () {
    this.getRoomMembers()
  },
  mounted () {},
  unmounted () {}
}
</script>
