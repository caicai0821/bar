<!--
 * @Author       : 蔡诗涵
 * @Date         : 2023-05-24 16:15:58
 * @LastEditTime : 2023-06-01 18:33:44
 * @Description  :管理员登录页
 *
-->
<template>
  <div class="login-container">
    <el-form
      ref="loginForm"
      :model="loginForm"
      :rules="loginRules"
      class="login-form"
      auto-complete="on"
      label-position="left"
    >
      <div class="title-container">
        <h3 class="title">Login Form</h3>
      </div>

      <el-form-item prop="username">
        <el-input
          ref="username"
          v-model="loginForm.username"
          placeholder="Username"
          name="username"
          type="text"
          tabindex="1"
          auto-complete="on"
        />
      </el-form-item>

      <el-form-item prop="password">
        <el-input
          :key="passwordType"
          ref="password"
          v-model="loginForm.password"
          :type="passwordType"
          placeholder="Password"
          name="password"
          tabindex="2"
          auto-complete="on"
          @keyup.enter.native="handleLogin"
        />
        <span class="show-pwd" @click="showPwd">
          <i
            :class="
              passwordType === 'password' ? 'el-icon-view' : 'el-icon-view'
            "
          ></i>
        </span>
      </el-form-item>

      <el-button
        :loading="loading"
        type="primary"
        style="width: 100%; margin-bottom: 30px"
        @click.native.prevent="handleLogin"
        >Login</el-button
      >
    </el-form>
  </div>
</template>

<script>
import router from '@/router'

export default {
  name: 'BossLogin',
  data() {
    const validatePassword = (rule, value, callback) => {
      if (value.length < 1) {
        console.log(value)
        callback(new Error('密码不能为空'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: 'admin',
        password: '123456',
      },
      loginRules: {
        password: [
          { required: true, trigger: 'blur', validator: validatePassword },
        ],
      },
      loading: false,
      passwordType: 'password',
      redirect: undefined,
    }
  },
  methods: {
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    handleLogin() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          router.push('/boss/visit')
          this.loading = true
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
  },
}
</script>

<style lang="less" scoped>
.login-container {
  min-height: 100vh;
  width: 100%;
  background-color: #2d3a4b;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: #eee;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 3px;
    font-size: 16px;
    color: #889aa4;
    cursor: pointer;
    user-select: none;
  }
}
</style>
