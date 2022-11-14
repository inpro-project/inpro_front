<template>
  <User-bar />
  <br />
  <router-view/>
  <Bottom-Menu />
</template>

<script>
import UserBar from '@/components/layout/UserBar.vue'
import BottomMenu from '@/components/layout/BottomMenu.vue'

export default {
  name: 'App',
  components: {
    'User-bar': UserBar,
    'Bottom-Menu': BottomMenu
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
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
