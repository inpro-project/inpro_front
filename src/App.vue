<template>
  <User-bar />
  <br />
  <br/>
  <br/>
  <router-view/>
  <GoBackBtn/>
  <Bottom-Menu />
</template>

<script>
import UserBar from '@/components/layout/UserBar.vue'
import BottomMenu from '@/components/layout/BottomMenu.vue'
import GobackBtnVue from '@/components/buttons/GobackBtn.vue'

export default {
  name: 'App',
  components: {
    'User-bar': UserBar,
    'Bottom-Menu': BottomMenu,
    GoBackBtn: GobackBtnVue
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin:0;
  width:390px;
  max-height:844px;
}
</style>
