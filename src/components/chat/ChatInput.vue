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
  //   computed : {
  //   ...mapGetters('Chat',['getRoomId','getUserId'])

  // },

  // methods : {
  //   ...mapActions('Chat',['uploadImgToS3','uploadVideoToS3']),
  //   writing(e){
  //     const icon = document.querySelector('.search-icon')
  //     if (e.target.value != ''){
  //       icon.style.color = "#00B286"
  //     } else {
  //       icon.style.color = ""
  //     }
  //   },
  //   async sendText(){
  //     let data = {
  //       params: JSON.stringify([
  //         {
  //           USER_ID : this.getUserId,
  //           ROOM_ID : this.getRoomId,
  //           MESSAGE : this.text,
  //           MEDIA : 0
  //         },
  //       ]),
  //     };

  //     this.text = ''

  //     const icon = document.querySelector('.search-icon')
  //     icon.style.color = ""

  //     //
  //     try {
  //       await axios.post(`${process.env.VUE_APP_CHAT_API}/insert_chat`,data)
  //     } catch(e){
  //       console.log(e)
  //     }
  //   },
  //   uploadImg(e){
  //     // 파일을 못받아 온 경우 리턴
  //     if (e == undefined){
  //       alert('파일을 제대로 입력해주세요')
  //       return
  //     }
  //     if (e.length > 6){
  //       alert('최대 6개까지 선택할 수 있습니다.')
  //       return
  //     }
  //     // 받아온 수 많큼 file이란 이름을 달아서 append시킴
  //     const formData = new FormData();
  //     e.forEach(v=>{
  //       formData.append('file',v)
  //     })
  //     // 사진이 담긴 formData를 보낸다.
  //     this.uploadImgToS3({formData : formData, roomId : this.getRoomId})
  //   },
  //   uploadVideo(e){
  //     // 파일을 못받아 온 경우 리턴
  //     if (e == undefined){
  //       alert('파일을 제대로 입력해주세요')
  //       return
  //     }
  //     const formData = new FormData();
  //     formData.append('file', e)
  //     this.uploadVideoToS3({formData : formData, roomId : this.getRoomId })

  //   },
  //   imgBtnClick(){
  //     document.getElementById('img').click()
  //   },
  //   videoBtnClick(){
  //     document.getElementById('video').click()
  //   },
  //   gogo(e){
  //     console.log(e)
  //   },
  //   selectPictures(){

  //   }

  // },

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
