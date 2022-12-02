<template>
  <div>
    <div>
      <ChatRoomList />
    </div>
  </div>
</template>

<script>
import VueCookies from 'vue-cookies'
import ChatRoomList from '@/components/chat/ChatRoomList.vue'

export default {
  methods: {
    checkLogin () {
      if (VueCookies.get('Authorization') === null || VueCookies.get('userIdx') === null) {
        this.$router.push({ name: 'kakaologin' })
      }
    }
  },
  created () {
    this.checkLogin()
  },
  components: {
    ChatRoomList
  }
}
</script>
