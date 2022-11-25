<template lang="">
  <div class="chat-messages">
    <div
      v-if="chatMessages.length>0"
    >
      <button class="more-message-button" @click="getMorePreviousChat">더보기</button>
    </div>
    <div
      v-for="chat,idx in chatMessages"
      :key="idx"
    >
      <div
        v-if="idx==0"
      >
        <div class="print-time">
          {{chat.createdAt.getFullYear()}}년 {{chat.createdAt.getMonth() + 1}}월 {{chat.createdAt.getDate()}}일 {{days[chat.createdAt.getDay()]}}
        </div>
        <div
          v-if="getUserId!=chat.userIdx"
          class="user-box">
          <span class="box">
            <img
              class="profile"
              :src="this.roomMembers[chat.userIdx].img"
              alt="img"
            >
          </span>
          <p class="name">{{ roomMembers[chat.userIdx].name }}</p>
        </div>
      </div>
      <div
        v-else
      >
        <div
          v-if="chatMessages[idx - 1].createdAt.getFullYear()!=chat.createdAt.getFullYear() || chatMessages[idx - 1].createdAt.getMonth()!=chat.createdAt.getMonth() || chatMessages[idx - 1].createdAt.getDate()!=chat.createdAt.getDate()"
          class="print-time"
        >
          {{chat.createdAt.getFullYear()}}년 {{chat.createdAt.getMonth() + 1}}월 {{chat.createdAt.getDate()}}일 {{days[chat.createdAt.getDay()]}}
        </div>
        <div
          v-if="chatMessages[idx - 1].userIdx!=chat.userIdx"
        >
          <div
            v-if="getUserId!=chat.userIdx"
            class="user-box">
            <span class="box">
              <img
                class="profile"
                :src="this.roomMembers[chat.userIdx].img"
                alt="img"
              >
            </span>
            <p class="name">{{ roomMembers[chat.userIdx].name }}</p>
          </div>
        </div>
      </div>
      <div
        v-if="getUserId==chat.userIdx"
        class="my-msg-created-and-isread"
      >
        <div
          v-if="chat.createdAt != '' "
          class="my-msg-created"
        >
          {{ chat.createdAt.getHours() }}:{{ chat.createdAt.getMinutes() }}
        </div>
        <div
          v-if="chat.MEDIA==0"
          class="my-msg"
        >
          <span>
            {{ chat.message }}
          </span>
        </div>
        <div v-else-if="chat.MEDIA==1">
          <ChatImages :images="chat.message" />
        </div>
        <div v-else-if="chat.MEDIA==2">
          <video

            style="width:300px"
            :src="chat.message"
            alt=""
            controls
          />
        </div>
      </div>
      <div
        v-else-if="chat.userIdx == 'system'"
        class="system-msg-box"
      >
        <div class="system-msg-divider" />
        <div class="system-msg">
          {{ chat.message }}
        </div>
        <div class="system-msg-divider" />
      </div>
      <div
        v-else
      >
        <div
          v-if="chat.FIRST"
          class="opponent-first-msg-box"
        >
          <img
            :src="getOpponentAvatar"
            class="opponent-first-img"
          >
          <div class="opponent-first-info-box">
            <p class="opponent-site-name">
              {{ getOpponentSiteName }}
            </p>
            <div class="opponent-msg-and-created">
              <div
                v-if="chat.MEDIA==0"
                class="opponent-msg"
              >
                <span>
                  {{ chat.message }}
                </span>
              </div>
              <div v-else-if="chat.MEDIA==1">
                <ChatImages :images="chat.message" />
              </div>
              <div v-else-if="chat.MEDIA==2">
                <video

                  style="width:300px"
                  :src="chat.message"
                  alt=""
                  controls
                />
              </div>
              <div class="opponent-msg-created">
                {{ chat.createdAt.getHours() }}:{{ chat.createdAt.getMinutes() }}
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <div class="opponent-msg-and-created not-first">
            <div
              v-if="chat.MEDIA==0"
              class="opponent-msg"
            >
              <span>
                {{ chat.message }}
              </span>
            </div>
            <div v-else-if="chat.MEDIA==1">
              <ChatImages :images="chat.message" />
            </div>
            <div v-else-if="chat.MEDIA==2">
              <video

                style="width:300px"
                :src="chat.message"
                alt=""
                controls
              />
            </div>

            <div class="opponent-msg-created">
              {{ chat.createdAt.getHours() }}:{{ chat.createdAt.getMinutes() }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'PreviousChat',
  props: ['userId', 'roomMembers', 'roomId'],
  data () {
    return {
      getUserId: this.userId,
      chatMessages: [],
      days: ['일', '월', '화', '수', '목', '금', '토']
    }
  },

  created () {
    this.getPreviousChat()
  },

  methods: {
    getPreviousChat () {
      axios
        .get(process.env.VUE_APP_API_BASE_URL + '/chat/room/enter/' + this.roomId + '/' + String(0), { headers: { Authorization: process.env.VUE_APP_ACCESS_TOKEN } })
        .then(res => {
          const previousChatMessages = []
          for (const curResponse of res.data.result) {
            const createdAt = new Date(curResponse.createdAt)
            const curChatMessage = {
              userIdx: curResponse.userIdx,
              name: curResponse.nickName,
              messageIdx: curResponse.chatMessageIdx,
              IS_READ: 0,
              createdAt: createdAt,
              MEDIA: 0,
              message: curResponse.chatMessage
            }
            previousChatMessages.push(curChatMessage)
          }
          this.chatMessages = previousChatMessages.concat(this.chatMessages)
        })
        .catch(err => {
          console.log(err)
        })
    },
    getMorePreviousChat () {
      axios
        .get(process.env.VUE_APP_API_BASE_URL + '/chat/room/enter/' + this.roomId + '/' + String(this.chatMessages[0].messageIdx), { headers: { Authorization: process.env.VUE_APP_ACCESS_TOKEN } })
        .then(res => {
          const previousChatMessages = []
          for (const curResponse of res.data.result) {
            const createdAt = new Date(curResponse.createdAt)
            const curChatMessage = {
              userIdx: curResponse.userIdx,
              name: curResponse.nickName,
              messageIdx: curResponse.chatMessageIdx,
              IS_READ: 0,
              createdAt: createdAt,
              MEDIA: 0,
              message: curResponse.chatMessage
            }
            previousChatMessages.push(curChatMessage)
          }
          this.chatMessages = previousChatMessages.concat(this.chatMessages)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
<style lang="scss" scoped>
.dpnone {
  display: none;
}
.system-msg-box {
  display : flex;
  align-items: center;
  margin-top : 16px;
  .system-msg-divider {

    width: 100%;
    border-top: 1px solid #C4C4C4;
  }
  .system-msg{
    min-width: 135px;

    text-align: center;
    font-size : 12px;
    color : #737373;
  }
}
.more-message-button{
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin: 0;
  padding: 0.5rem 1rem;

  font-family: "Noto Sans KR", sans-serif;
  font-size: 0.5rem;
  font-weight: 400;
  text-align: center;
  text-decoration: none;

  display: inline-block;
  width: auto;

  border: none;
  border-radius: 4px;
}

.print-time{
  display: flex;
  flex-basis: 100%;
  align-items: center;
  color: rgba(0, 0, 0, 0.35);
  font-size: 12px;
  margin: 8px 0px;
}

.print-time::before,
.print-time::after {
  content: "";
  flex-grow: 1;
  background: rgba(0, 0, 0, 0.35);
  height: 1px;
  font-size: 0px;
  line-height: 0px;
  margin: 0px 16px;
}

.opponent-first-msg-box{
  margin-top : 16px;
  display: flex;
  .opponent-first-img {
    width : 40px;
    height: 40px;
    border-radius: 8px;
    margin-right : 8px;
  }
  .opponent-first-info-box{

    .opponent-site-name {
      font-size : 12px;
      color: #737373;
      margin : 0px 0px 4px 0px;
    }
  }
}
.opponent-msg-and-created{
  display : flex;
  align-items : flex-end;

  .opponent-msg{

    word-break: break-all;
    word-wrap: normal;
    max-width: 200px;
    padding : 10px 20px;
    font-size : 14px;
    background-color: #D1EBE580;
    border-radius: 8px;
  }
  .opponent-msg-created {
    margin-left : 10px;
    color : #C4C4C4;
    font-size : 12px;
  }
}

.not-first {
  margin-left : 48px;
  margin-top : 16px;
}

.my-msg-created-and-isread {
  justify-content: flex-end;
  margin-top : 16px;
  align-items : flex-end;
  display : flex;
  .my-msg-isread{
    width: 8px;
    height: 8px;
    background-color: #FF6C03;
    border-radius: 100%;
    margin-right : 8px;
    margin-bottom : 4px;
  }
  .my-msg-created {
    margin-right : 8px;
    color : #C4C4C4;
    font-size : 12px;
  }
  .my-msg{
    word-break: break-all;
    word-wrap: normal;
    max-width: 230px;
    padding : 10px 20px;
    font-size : 14px;
    color : white;
    background-color: #00B286;
    border-radius: 8px;
  }
  .img-box{
    width: 10px;
    height: 10px;
  }
}
</style>
