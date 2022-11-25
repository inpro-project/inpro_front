<template>
  <div>
    <div>
      <div>
        <div class="chat-messages" ref="chatMessage"
        >
          <PreviousChat v-bind:userId="userId" v-bind:roomMembers="roomMembers" v-bind:roomId="roomId" />
          <PresentChat v-bind:newMessages="newMessages" v-bind:userId="userId" v-bind:roomMembers="roomMembers" v-bind:roomId="roomId" />
        </div>
        <div>
          <ChatInput v-bind:stompClient="stompClient" v-bind:userId="userId" v-bind:roomId="roomId" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PreviousChat from '@/components/chat/PreviousChat.vue'
import PresentChat from '@/components/chat/PresentChat.vue'
import ChatInput from '@/components/chat/ChatInput.vue'
import Stomp from 'webstomp-client'
import SockJS from 'sockjs-client'
import axios from 'axios'

export default {
  components: {
    PreviousChat, PresentChat, ChatInput
  },

  data () {
    return {
      socket: null,
      stompClient: null,
      userId: '1',
      newMessages: [],
      roomId: '',
      roomMembers: {}
    }
  },

  created () {
    this.roomId = String(this.$route.params.roomId)
    console.log('roomId : ', this.roomId)
    this.socket = new SockJS(process.env.VUE_APP_API_BASE_URL + '/ws/chat')
    this.stompClient = Stomp.over(this.socket)
    this.stompClient.connect({ Authorization: process.env.VUE_APP_ACCESS_TOKEN }, this.onConnected, this.onError)
    this.getRoomMembers()
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
        this.$refs.chatMessage.scrollTo({ top: this.$refs.chatMessage.scrollHeight + 100, behavior: 'smooth' })
      })
      this.stompClient.send('/app/chat/message', JSON.stringify({ type: 'ENTER', roomId: this.roomId, sender: this.userId, message: this.message }), { Authorization: process.env.VUE_APP_ACCESS_TOKEN })
    },
    onError () {
      console.log('error!')
    },
    getRoomMembers () {
      axios
        .get(process.env.VUE_APP_API_BASE_URL + '/chat/room/' + this.roomId + '/member', { headers: { Authorization: process.env.VUE_APP_ACCESS_TOKEN } })
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
  }
}
</script>
<style  scoped>
  .chat-messages {
    max-height: 670px;
    overflow: auto;
  }
  .chat-wrapper{
    margin-bottom : 50px;
  }
  .dpnone {
    display: none;
  }
</style>
