<template>
  <div class="header-wrapper">
    <div class="head-cont">
      <div class="nav-list">
        <div>微信公众号</div>
        <div>淘宝店铺</div>
        <div>集运教学</div>
        <div>语言切换</div>
        <div>退出登录</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header-wrapper {
  width: 100%;
  height: 80px;
  line-height: 80px;
  background: #fff;
  .head-cont {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;
    .nav-list {
      display: flex;
      flex-direction: row;
      > div {
          margin-left: 56px;
          cursor: pointer;
      }

    }
  }
}
</style>