<template>
    <div id="emptylayout">
  <router-view/>
</div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
.emptylayout {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin:0;
  min-width: 390px;
}
</style>
