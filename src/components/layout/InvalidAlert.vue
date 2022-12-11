<template>
    <!--유해이미지 판단시 경고창-->
    <div v-if="(this.$store.state.isinvalid !== 0)" class="alert alert-danger d-flex align-items-center justify-content-center" role="alert">
  <button style="position: relative; left:-40px" type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" @click="isvalid"></button>
  <div>
    유해한 이미지를 첨부하였습니다.
    <br/>다시 시도해주세요.
  </div>
</div>
</template>

<script>
export default {
  name: 'InvalidAlert',
  methods: {
    isvalid () {
      this.$store.state.isinvalid = 0
    }
  }
}
</script>

<style>

</style>
