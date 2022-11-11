<template>
    <div>
        <h2>회원가입</h2>
        <button @click ="getinfo ()">테스트</button>
    </div>
</template>
<script>
import axios from 'axios'

export default {
  data () {
  },
  methods: {
    getinfo () {
      axios
        .get('https://prod.inpro-server.shop:9000/test/log')
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.Console.log(err)
        })
        .then(() => {
        })
    }
  }
}
</script>
