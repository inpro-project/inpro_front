<template lang="">
  <div>
    <div class="input-group">
      <input type="text" class="form-control" v-model="message" v-on:keypress.enter="sendMessage">
      <div class="input-group-append">
        <button class="btn btn-primary" type="button" @click="sendMessage">보내기</button>
      </div>
    </div>
  </div>
</template>

<script>
import VueCookies from 'vue-cookies'
export default {
  name: 'ChatInput',
  props: ['stompClient', 'userId', 'roomId'],

  data () {
    return {
      socket: null,
      uid: '',
      message: '',
      receivedMessage: []
    }
  },
  methods: {
    sendMessage () {
      this.stompClient.send('/app/chat/message', JSON.stringify({ type: 'TALK', roomId: this.roomId, sender: this.userId, message: this.message }), { Authorization: VueCookies.get('Authorization') })
      this.message = ''
    }
  }
}
</script>
<style scoped lang="scss">
.system {
    text-align: center;
}
.mine {
  text-align: right;
}
.mine2 {
  text-align: right;
}
.att-zone-dpnone {
  display: none;
}
.imgs {
  width : 100px;
}
.dpnone {
  display: none;
}
.input-box {

  display: flex;
  width: 100%;
  height : 45px;
  background : #F8F8FA;
  position: fixed;
  bottom: 0;
  left : 0;
  align-items: center;
  justify-content: center;

}
.text-input {
  border-radius: 100px;
  height: 37px;
  background-color : white;
  width : 79.5vw;
  padding-left : 10px;
  padding-right : 40px;
  padding-bottom : 5px;
  &:focus{
    outline: none;
  }
}
.for-right-icon-div {
  position : relative;
}
.image-icon {
  color : #737373;
  margin-right : 7px;

}
.search-icon {
}

</style>
