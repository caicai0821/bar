<!--
 * @Author       : 蔡诗涵
 * @Date         : 2023-04-26 10:56:36
 * @LastEditTime : 2023-06-04 19:13:22
 * @Description  : 注册组件
 *
-->
<template>
  <div class="register">
    <div class="close" @click="closePop">
      <img src="@/assets/icons/关闭2.png" alt="" />
    </div>
    <div class="top">
      <div class="topImg">
        <img src="@/assets/icons/红酒.png" alt="" />
      </div>
      <div class="topText">BAR</div>
    </div>
    <el-divider></el-divider>
    <div class="content" v-if="is">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item>
          <el-input v-model="form.tel" placeholder="手机号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.usernick" placeholder="昵称"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            v-model="form.password"
            type="password"
            placeholder="密码"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            v-model="form.passwordCon"
            type="password"
            placeholder="确认密码"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-radio v-model="form.radio" label="1">男</el-radio>
          <el-radio v-model="form.radio" label="2">女</el-radio>
        </el-form-item>
        <el-form-item>
          <button class="registerBtn" @click.prevent="register">
            立即注册
          </button>
        </el-form-item>
      </el-form>
      <div class="content2">
        <div class="link" @click="pushLogin">已有账号？立即登录！</div>
      </div>
    </div>
    <div class="code" v-else>
      <div>
        <el-input
          class="codeInput"
          v-model="input"
          placeholder="请输入验证码"
        ></el-input>
        <button class="codeBtn" @click="getCode">
          <span v-if="show">发送验证码</span>
          <span v-else>重新发送({{ count }}s)</span>
        </button>
      </div>
      <div>
        <button class="registerBtn2" @click="register1">立即注册</button>
      </div>
    </div>
  </div>
</template>

<script>
import { DBUser } from '@/api/db'
export default {
  name: 'MyLogin',
  data() {
    return {
      close: false,
      is: true,
      count: '',
      show: true,
      timer: null,
      form: {
        tel: '',
        usernick: '',
        password: '',
        passwordCon: '',
        radio: '1',
      },
    }
  },
  methods: {
    register() {
      if (
        this.form.password &&
        this.form.passwordCon &&
        this.form.tel &&
        this.form.usernick
      ) {
        DBUser.addUser({
          ...this.form,
        })
        this.$message({
          message: '注册成功',
          type: 'success',
        })
        this.pushLogin()
      } else {
        this.$message({
          message: '不能为空',
          type: 'error',
        })
      }
    },
    // 跳转至验证码，无后端暂时取消
    // register1() {
    //   this.$router.push('/login')
    // },
    // 获取验证码
    getCode() {
      const TIME_COUNT = 60
      if (!this.timer) {
        this.count = TIME_COUNT
        this.show = false
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= TIME_COUNT) {
            this.count--
          } else {
            this.dis = false
            this.isGrey = false
            this.show = true
            clearInterval(this.timer)
            this.timer = null
          }
        }, 1000)
      }
    },
    // 关闭弹窗并清除表单
    closePop() {
      this.$emit('closePop', this.close)
    },
    // 跳转登录组件
    pushLogin() {
      this.$emit('getLogin', true)
    },
  },
}
</script>

<style lang="less" scoped>
.register {
  position: relative;
  display: flex;
  top: 5%;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  z-index: 9;
  flex-direction: column;
  width: 450px;
  border-radius: 25px;
  box-shadow: 5px 5px 15px 2px #00000036;
  background-color: #e8e8e8;
  border: 1px solid #bbbbbb;
  .close {
    position: absolute;
    left: 400px;
    top: 10px;
    img {
      width: 30px;
    }
  }
  .top {
    margin: 15px auto;
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
    margin: 15px 0px;
    /deep/ .el-input {
      width: 300px;
      .el-input__inner {
        height: 35px;
      }
    }
    .registerBtn {
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
      flex-direction: row-reverse;
      height: 25px;
      .link {
        color: #828282;
      }
      .link:hover {
        color: #560000;
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
  .code {
    display: flex;
    flex-direction: column;
    margin: 20px 0 0 20px;
    /deep/ .el-input {
      margin-bottom: 10px;
      border: 1px solid #dcdfe6;
      border-radius: 4px 0px 0px 4px;
      width: 300px;
      .el-input__inner {
        height: 40px;
        border-radius: 4px 0px 0px 4px;
      }
    }
    .codeBtn {
      padding: 4px 8px;
      height: 50px;
      border: 1px solid #dcdfe6;
      border-radius: 0px 4px 4px 0px;
    }
    .registerBtn2 {
      margin: 10px 30%;
      width: 177px;
      height: 45px;
      color: #fff;
      left: 400px;
      top: 10px;
      border-radius: 4px;
      box-shadow: 0px 0px 0px 0px;
      background-color: #7d858a;
      border: 0px;
      text-align: center;
    }
  }
}
</style>
