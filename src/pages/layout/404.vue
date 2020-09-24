<template>
  <div class="not-found">
    <img class="not-img" src="@/assets/imgs/404.png" alt="">
    <div>页面走丢了...</div>
    <div class="back" @click="toHome" >返回首页</div>
  </div>
</template>

<script>
export default {
    data() {
        return  {

        }
    },
    methods: {
        toHome() {
            this.$router.push("/");
        }
    }
}
</script>
<style lang="scss" scoped>
.not-found {
  height: 100vh;
  width: 100%;
  text-align: center;
  color: #3e6ce8;
  .not-img { 
      width: 600px;
      height: 400px;
  }
  .back{ 
      border: 1px solid #3e6ce8;
      border-radius: 16px;
      width: 100px;
      height: 40px;
      line-height: 40px;
      margin: 30px auto;
      cursor: pointer;
  }
}
</style>