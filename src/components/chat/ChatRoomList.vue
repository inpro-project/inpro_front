<template>
  <div>
    <div
      v-for="room in rooms"
      :key="room.ROOM_ID"
      style=""
      class="msg-box"
      @click="toRoom(room.ROOM_ID)"
    >
      <div class="img-info-box">
        <div class="img-box">
          <div
            v-if="room.IM_ON"
            class="im-on"
          />
          <img
            :src="room.AVATAR_PATH"
            alt="img"
          >
        </div>
        <div class="info-box">
          <p class="site-name">
            {{ room.SITE_NAME }}
          </p>

          <p class="last-msg">
            {{ room.MESSAGE }}
          </p>
        </div>
      </div>
      <div class="time-box">
        <div class="last-msg-time">
          {{ room.CREATED_AT }}
        </div>
        <div
          v-if="room.UNREAD != 0"
          class="is-unread"
        >
          {{ room.UNREAD }}
        </div>
        <div
          v-else
          class="no-unread"
        />
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      rooms: []
    }
  },

  created () {
    this.getChatRooms()
  },

  methods: {
    getChatRooms () {
      axios
        .get(process.env.VUE_APP_API_BASE_URL + '/chat/rooms', { headers: { Authorization: process.env.VUE_APP_ACCESS_TOKEN } })
        .then(res => {
          console.log(res.data.result)
          console.log(res.data)
          for (const roomInfo of res.data.result) {
            const room = {
              ROOM_ID: roomInfo.chatRoomIdx,
              IM_ON: false,
              AVATAR_PATH: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png',
              SITE_NAME: roomInfo.name,
              MESSAGE: roomInfo.message,
              CREATED_AT: roomInfo.createdAt,
              UNREAD: '0'
            }
            this.rooms.push(room)
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    toRoom (roomId) {
      console.log(roomId)
      this.$router.push({ name: 'ChatRoomView', params: { roomId: roomId } })
    }
  }
}
</script>
<style lang="scss" scoped >
.msg-box {
  display : flex;
  margin-left: 24px;
  margin-right: 24px;
  margin-top : 32px;
  height: 54px;
  justify-content: space-between;
  .img-info-box {
    display: flex;
    .img-box {
      img {
      width : 54px;
      height : 54px;
      border-radius: 16px;
      }
      .im-on{
        position: absolute;
        width: 8px;
        height: 8px;
        top: 0;
        right: 0;
        background-color: #00B286 ;
        border: 1.5px solid #F8F8FA;
        border-radius: 100%;
      }
      position: relative;
      margin-right : 10px;
    }
    .info-box {
      display: flex;
      flex-direction: column;
      justify-content: space-around ;
      text-align: left;
      width: 50vw;
      .site-name{
        font-size : 16px;
        font-weight: 700;
      }
      .last-msg{
        font-size :14px;
        color : #737373;
      }
    }
  }

  .time-box {
    width : 16vw;
    display: flex;
    flex-direction: column;
    justify-content: space-around ;
    .last-msg-time {
      text-align: end;
      font-size : 12px;
      color : #737373;

    }
    .is-unread {
      width: 24px;
      height: 24px;
      background-color: #FF0000;
      color : white;
      margin-left: auto;
      line-height: 24px;
      border-radius: 8px;
      text-align: center;
      font-size: 12px;

    }
    .no-unread {
      width: 24px;
      height: 24px;
    }
  }
  p {
    margin : 0px;
  }
}
</style>
