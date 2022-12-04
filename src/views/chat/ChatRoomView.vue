<template>
  <div>
    <div>
      <div>
        <div class="chat-messages" ref="chatMessage"
        >
          <div>
          <ChatMessage  v-bind:roomId="roomId" v-bind:newMessages="newMessages"/>
          </div>
        </div>
        <div class="chat-input">
          <ChatInput v-bind:stompClient="stompClient" v-bind:userId="userId" v-bind:roomId="roomId" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ChatMessage from '@/components/chat/ChatMessage.vue'
import ChatInput from '@/components/chat/ChatInput.vue'
import Stomp from 'webstomp-client'
import SockJS from 'sockjs-client'
import axios from 'axios'
import VueCookies from 'vue-cookies'

export default {
  components: {
    ChatMessage, ChatInput
  },

  data () {
    return {
      socket: null,
      stompClient: null,
      userId: VueCookies.get('userIdx'),
      newMessages: [],
      roomId: '',
      roomMembers: {}
    }
  },

  created () {
    this.checkLogin()
    this.roomId = String(this.$route.params.roomId)
    console.log('roomId : ', this.roomId)
    this.socket = new SockJS(process.env.VUE_APP_API_BASE_URL + '/ws/chat')
    this.stompClient = Stomp.over(this.socket)
    this.stompClient.connect({ Authorization: VueCookies.get('Authorization') }, this.onConnected, this.onError)
  },

  methods: {
    onConnected () {
      console.log('connect!')
      this.stompClient.subscribe('/topic/chat/room/' + this.roomId, (newMessage) => {
        const parsedMessage = JSON.parse(newMessage.body)
        const createdAt = new Date(parsedMessage.createdAt)

        this.newMessages.push({
          userIdx: String(parsedMessage.sender),
          IS_READ: 1,
          createdAt: createdAt,
          MEDIA: 0,
          message: parsedMessage.message
        })
        setTimeout(() => this.$refs.chatMessage.scrollTo({ top: this.$refs.chatMessage.scrollHeight, behavior: 'smooth' }), 100)
      })
      this.stompClient.send('/app/chat/message', JSON.stringify({ type: 'ENTER', roomId: this.roomId, sender: this.userId, message: this.message }), { Authorization: VueCookies.get('Authorization') })
    },
    onError () {
      console.log('error!')
    },
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
    },
    checkLogin () {
      if (VueCookies.get('Authorization') === null || VueCookies.get('userIdx') === null) {
        this.$router.push({ name: 'kakaologin' })
      }
    }
  }
}
</script>
<style  scoped>
  .chat-messages {
    position: static;
    max-height: 385px;
    overflow: auto;
  }
  .chat-wrapper{
    margin-bottom : 50px;
  }
  .dpnone {
    display: none;
  }
  .chat-input {
    position: absolute;
    right: 0px;
    left: 0px;
    bottom: 70px;
  }
</style>
