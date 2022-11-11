<template>
    <h1>나의 Disc는?</h1>
    <h2>나에게 적합한 키워드와 부적합한 키워드를 각 칸에서 하나씩 골라주세요!
        <br />
        회원님의 업무성향 DiSC를 알려드립니다 :)
    </h2>
    <div id='proper'>
  <input type="checkbox" v-model="arr" value="mine">mine
  <input type="checkbox" v-model="arr" value="it">it
  <input type="checkbox" v-model="arr" value="record">record
  <button @click='checkArr()'>check</button>
</div>
<button class="btn btn-primary" type="submit">결과 확인하러 가기</button>
</template>

<script>
export default {
  data: function () {
    return {
      arr: []
    }
  },
  // eslint-disable-next-line key-spacing
  methods : {
    checkArr: function () {
      console.log(this.arr)
    }
  }
}
</script>
