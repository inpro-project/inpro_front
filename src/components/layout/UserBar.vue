<template>
  <div class="container">
    <nav class="navbar navbar-expand-md fixed-top" style="background-color: #4a60d4">
      <div class="container-fluid row justify-content-center align-items-center">
        <img src="@/assets/inplelogo.png" alt="" width="80" height="70">
      </div>
</nav>
  </div>
</template>

<script>
export default {
  name: 'User-bar'
}
</script>

<style scoped>
.navbar{
  width:390px;
  height:70px;
}
.container{
  width:390px;
  background-color: #4a60d4;
  color:#4a60d4;

}
.container-fluid {
  position:relative;
  left:140px;
  width:120px;
  bottom:3px;
  color: #4a60d4;
}
</style>
