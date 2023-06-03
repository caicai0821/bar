<!--
 * @Author       : 蔡诗涵
 * @Date         : 2023-04-26 10:56:36
 * @LastEditTime : 2023-06-03 21:11:48
 * @Description  : 登录组件
 *
-->
<template>
  <div class="login">
    <div class="close">
      <img src="@/assets/icons/关闭2.png" alt="" />
    </div>
    <div class="top">
      <div class="topImg">
        <img src="@/assets/icons/红酒.png" alt="" />
      </div>
      <div class="topText">BAR</div>
    </div>
    <el-divider></el-divider>
    <div class="content">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item>
          <el-input v-model="form.username" placeholder="账号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.password" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item>
          <button class="loginBtn">登录</button>
        </el-form-item>
      </el-form>
      <div class="content2">
        <div class="link">忘记密码</div>
        <div class="link">立即注册</div>
      </div>
      <div class="icon">
        <div>
          <img
            src="@/assets/icons/微信.png"
            alt=""
            style="width: 45px; height: 45px"
          />
        </div>
        <div><img src="@/assets/icons/QQ-circle-fill.png" alt="" /></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyLogin',
  data() {
    return {
      form: {
        username: '',
        password: '',
      },
    }
  },
}
</script>

<style lang="less" scoped>
.login {
  position: relative;
  display: flex;
  top: 10%;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  z-index: 9;
  flex-direction: column;
  width: 450px;
  height: 525px;
  border-radius: 25px;
  box-shadow: 5px 5px 15px 2px #00000036;
  background-color: #e8e8e8;
  border: 1px solid #bbbbbb;
  .close {
    position: absolute;
    left: 400px;
    top: 10px;
    img {
      width: 35px;
      height: 35px;
    }
  }
  .top {
    margin: 20px auto;
    .topImg {
      img {
        width: 100px;
      }
    }
    .topText {
      text-align: center;
    }
  }
  .content {
    margin: 20px 0px;
    /deep/ .el-input {
      margin-bottom: 10px;
      width: 300px;
      height: 40px;
      .el-input__inner {
        height: 40px;
      }
    }
    .loginBtn {
      margin: 0px 54px;
      width: 177px;
      height: 45px;
      color: #fff;
      border-radius: 4px;
      box-shadow: 0px 0px 0px 0px;
      background-color: #7d858a;
      border: 0px;
      text-align: center;
    }
    .content2 {
      display: flex;
      justify-content: space-around;
      height: 25px;
      .link {
        color: #828282;
      }
      .link:hover {
        color: #560000;
      }
    }
    .icon {
      position: relative;
      top: 25px;
      display: flex;
      justify-content: space-evenly;
      align-items: baseline;
      height: 55px;
      div > img {
        width: 53px;
        height: 53px;
      }
    }
  }
  .el-divider--horizontal {
    width: 95%;
    margin: 1px auto;
  }
  .el-divider {
    background-color: #bbbbbb;
  }
}
</style>
