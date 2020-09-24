<template>
  <div>
    <!-- 订单首页
    <i-select :model.sync="model1" style="width: 200px">
      <i-option v-for="item in cityList" :key="item.value" :value="item.value">{{
        item.label
      }}</i-option>
    </i-select> -->
    <div class="contions">
      <!-- 左 -->
      <div>
        <!-- 业务统计 -->
        <div class="left">
          <div class="game">
            <div class="headPortrait"></div>
            <div class="text">
              <div>
                <span>欢迎您：YY-ABC</span>
                <span>会员编号：9</span>
                <span>可用集运卷：<span style="color:red">10</span>张</span>
              </div>
              <div>
                <span>会员等级：不享受折扣</span>
                <span>登录邮箱：libianyecanbanh@163.com</span>
              </div>
            </div>
          </div>
          <div class="Statistics">
              <div class="p2">
                <p class="p"></p>
                <p class="ye">业务统计</p>
              </div>
              <div class="number">
                  <div class="Number1">
                    <span>待入仓</span>
                    <span>12</span>
                  </div>
                  <div class="Number1">
                    <span>已入仓</span>
                    <span>14</span>
                  </div>
                  <div class="Number1">
                    <span>待集运</span>
                    <span>15</span>
                  </div>
                  <div class="Number1">
                    <span>待付款</span>
                    <span>21</span>
                  </div>
                  <div class="Number1" style="border-right:0px">
                    <span>待签收</span>
                    <span>10</span>
                  </div>
              </div>
          </div>
        </div>
        <!-- 快速通道 -->
        <div class="passageway">
          <div class="p2">
              <p class="p"></p>
              <p class="ye">快速通道</p>
          </div>
          <div class="picture">
            <div class="top">
              <div class="top-modular">
                <img src="../../../assets/images/yubao.png" alt="" class="img1">
                <span>预报包裹</span>
              </div>
              <div class="top-modular">
                <img src="../../../assets/images/shenqing.png" alt="" class="img2">
                <span>申请集运</span>
              </div>
              <div class="top-modular">
                <img src="../../../assets/images/wodedingdan.png" alt="" class="img3">
                <span>我的订单</span>
              </div>
              <div class="top-modular">
                <img src="../../../assets/images/yubao.png" alt="" class="img4">
                <span>预报包裹</span>
              </div>
            </div>
            <div class="bottom">

            </div>
          </div>
        </div>
      </div>
      <!-- 右边 -->
      <div class="right">
        <!-- 我的账户 财务明细 -->
        <div class="account">
          <div class="black">
            <div class="border"></div>
            <div class="accountt">我的账户</div>
            <div class="finance">财务明细</div>
          </div>
          <div class="blackL">
            <div class="one">
              <span class="monys">¥ 120.00</span>
              <span class="balance">可用余额</span>
            </div>
            <div class="two"></div>
            <div class="three">
              <span class="monyss">2000</span>
              <span class="balancee">可用积分</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // cityList: [
      //   {
      //     value: "beijing",
      //     label: "北京市",
      //   },
      //   {
      //     value: "shanghai",
      //     label: "上海市",
      //   },
      //   {
      //     value: "shenzhen",
      //     label: "深圳市",
      //   },
      //   {
      //     value: "hangzhou",
      //     label: "杭州市",
      //   },
      //   {
      //     value: "nanjing",
      //     label: "南京市",
      //   },
      //   {
      //     value: "chongqing",
      //     label: "重庆市",
      //   },
      // ],
      // model1: "",
    };
  },
};
</script>

<style lang="scss" scoped>
  .contions{
    display: flex;
    flex-direction: row;
    .left{
      width: 700px;
      height: 210px;
      background: #ffffff;
      border-radius: 5px;
      padding:10px 38px;
      .game{
        display: flex;
        flex-direction:row;
        .headPortrait{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: blue;
      }
      .text{
          div{
            padding: 2px 0px;
            font-family: SourceHanSansCN-Normal;
            color: #999999;
            font-size: 12px;
            margin: 3px 0 0 12px;
          }
        }
      }
      .Statistics{
        margin: 20px 0 0 -16px;
        .p2{
          display: flex;
          flex-direction: row;
          .p{
            width: 2px;
            height: 16px;
            background: #ff0000;
            margin-top: 4px;
          }
          .ye{
            padding-left: 6px;
            font-size: 16px;
            font-weight: 400;
            font-family: SourceHanSansCN-Normal;
            color: 000;
          }
        }
        .number{
          display: flex;
          flex-direction: row;
          align-items:center;
          justify-content: space-around;
          margin: 25px 0 0 0;
          .Number1{
            display: flex;
            width: 100px;
            height: 50px;
            border-right: 2px dashed #c2c2c2;
            flex-direction: column;
            padding-left: 20px;
            span:nth-child(1){
              color: #999999;
              font-family: SourceHanSansCN-Normal;
              font-size: 12px;
              font-weight: 400;
            }
            span:nth-child(2){
              color: #ff0000;
              font-family: SourceHanSansCN-Medium;
              font-weight: 500;
              font-size: 26px;
            }
          }
        }
      }
    }
    .right{
      display: flex;
      width: 355px;
      height: 210px;
      background: #ffffff;
      border-radius: 5px;
      margin-left: 10px;
      .account{
        padding: 20px 28px;
        .black{
          display: flex;
          flex-direction: row;
          .border{
            border-left: 2px #ff0000 solid;
          }
          .accountt{
              padding-left: 5px;
              font-family: SourceHanSansCN-Normal;
              color: #333;
              font-size: 16px;
              font-weight: 400;
          }
          .finance{
              font-family: Source Han Sans CN;
              color: #666;
              font-size: 16px;
              font-weight: 400;
              padding-left: 130px;
          }
        }
        .blackL{
          display: flex;
          flex-direction: row;
          margin:20px 0 0 0;
          .one{
            display: flex;
            flex-direction: column;
            align-items:center;
            .monys{
              color: #ff0000;
              font-size: 26px;
              font-family: SourceHanSansCN-Medium;
              font-weight: 500;
            }
            .balance{
              color: #999;
              font-size: 12px;
              font-family: SourceHanSansCN-Normal;
              font-weight: 400;
            }
          }
          .two{
            width: 1px;
            height: 50px;
            background: #ccc;
            margin-left: 50px;
          }
          .three{
            display: flex;
            flex-direction: column;
            align-items:center;
            margin-left:45px;
            .monyss{
              color: #ff0000;
              font-size: 26px;
              font-family: SourceHanSansCN-Medium;
              font-weight: 500;
            }
            .balancee{
              color: #999;
              font-size: 12px;
              font-family: SourceHanSansCN-Normal;
              font-weight: 400;
            }
          }
        }
      }
    }
    .passageway{
      width: 700px;
      height: 286px;
      background: #fff;
      margin: 10px 0 0 0;
      border-radius: 5px;
      padding: 10px 20px;
      .p2{
          display: flex;
          flex-direction: row;
          .p{
            width: 2px;
            height: 16px;
            background: #ff0000;
            margin-top: 4px;
          }
          .ye{
            padding-left: 6px;
            font-size: 16px;
            font-weight: 400;
            font-family: SourceHanSansCN-Normal;
            color: 000;
          }
        }
        .picture{
          margin: 20px 0 0 16px;
          .top{
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            .top-modular{
              display: flex;
              flex-direction:column;
              img{border: 1px dashed #c2c2cc;}
              .img1{width: 48px;height: 54px;
              }
              .img2{width: 52px;height: 50px;}
              .img3{width: 62px;height: 59px;}
              .img4{width: 52;height: 52;}
            }
          }
        }
    }
  }
</style>
