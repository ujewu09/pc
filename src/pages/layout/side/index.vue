<template>
  <div class="side-wrapper">
    <div class="nav-wrapper" v-for="(item, index) in navList" :key="index">
      <div class="title">{{ item.title }}</div>
      <div class="col-list">
        <div
          :class="{ 'col-item': true, active: v.link == $route.path }"
          @click="routeTo(v.link)"
          v-for="(v, index) in item.colList"
          :key="index"
        >
          {{ v.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        {
          title: "管理中心",
          colList: [
            { text: "管理首页", link: "/manageHome" },
            { text: "我的订单", link: "/myOrder" },
            { text: "我的包裹", link: "/myBag" },
          ],
        },
        {
          title: "用户中心",
          colList: [{ text: "个人信息管理", link: "/baseMassage" }],
        },
      ],
    };
  },
  methods: {
    routeTo(link) {
      console.log(link);
      this.$router.push(link);
    },
  },
};
</script>
<style lang="scss" scoped>
.side-wrapper {
  width: 116px;
  height: 750px;
  background: #fff;
  border-radius: 5px;
  padding: 0px 20px 8px 22px;
  box-sizing: border-box;
  .nav-wrapper {
    margin-top: 28px;
    .title {
      font-size: 16px;
      color: #333;
      font-weight: 500;
      line-height: 1;
    }
    .col-list {
      .col-item {
        font-weight: 400;
        font-size: 12px;
        color: #999999;
        margin-top: 16px;
        line-height: 1;
        cursor: pointer;
        &.active {
          color: #ff0000;
        }
        &:hover {
          color: #ff0000;
        }
      }
    }
  }
}
</style>