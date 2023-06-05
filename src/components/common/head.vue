<!--
 * @Author       : 蔡诗涵
 * @Date         : 2023-04-19 16:58:45
 * @LastEditTime : 2023-06-05 21:19:53
 * @Description  : 页面头部导航
 *
-->
<template>
  <div class="head">
    <div class="body">
      <!-- 搜索框 -->
      <el-input
        placeholder="酒名 酒单 调酒师"
        suffix-icon="el-icon-search"
        v-model="search"
      >
      </el-input>
      <!-- 顶部链接跳转 -->
      <div class="linkStyle">
        <router-link
          to=""
          class="link"
          :class="{ active: index + 7 == checkindex }"
          v-for="(item, index) in navTop"
          :key="index"
          @click.native="changeClass(index + 7)"
          >{{ item }}</router-link
        >
      </div>
      <!-- 底部导航栏 -->
      <div class="linkStyle bottom" ref="a">
        <router-link
          to=""
          class="link"
          :class="{ active: index == checkindex }"
          v-for="(item, index) in nav"
          :key="index"
          @click.native="changeClass(index)"
          >{{ item }}</router-link
        >
      </div>
      <!-- 登录注册 -->
      <div class="linkStyle divTop">
        <div v-if="name">
          <el-dropdown>
            <span class="el-dropdown-link">
              {{ name }}
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人中心</el-dropdown-item>
              <el-dropdown-item @click.native="exit">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div v-else>
          <span @click="login">登录</span>
          <span>&nbsp;|&nbsp;</span>
          <span @click="register">注册</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { DBUser } from '@/api/db'
export default {
  name: 'myHead',
  props: ['name', 'checkindex'],
  data() {
    return {
      search: '',
      nav: ['首页', '排行榜', '酒厂专题', '新鲜事', '酒单', '社区', '调酒视频'],
      navTop: ['调酒师认证', '味道', '调酒师'],
      isLogin: false,
      isRegister: false,
    }
  },
  methods: {
    changeClass(index) {
      switch (index) {
        case 0:
          this.$router.push('/index')
          break
        case 1:
          this.$router.push('/Ranklist')
          break
        case 2:
          this.$message({
            type: 'warning',
            message: '未开发' + index,
          })
          break
        case 3:
          this.$message({
            type: 'warning',
            message: '未开发' + index,
          })
          break
        case 4:
          this.$message({
            type: 'warning',
            message: '未开发' + index,
          })
          break
        case 5:
          this.$message({
            type: 'warning',
            message: '未开发' + index,
          })
          break
        case 6:
          this.$message({
            type: 'warning',
            message: '未开发' + index,
          })
          break
        case 7:
          this.$message({
            type: 'warning',
            message: '未开发' + index,
          })
          break
        case 8:
          this.$message({
            type: 'warning',
            message: '未开发' + index,
          })
          break
        case 9:
          this.$message({
            type: 'warning',
            message: '未开发' + index,
          })
          break
      }
    },
    login() {
      this.isLogin = true
      this.$emit('getLogin', this.isLogin)
      this.isLogin = false
    },
    register() {
      this.isRegister = true
      this.$emit('getRegister', this.isRegister)
      this.isRegister = false
    },
    // 退出登录
    exit() {
      DBUser.exit()
      this.$router.go(0)
    },
  },
}
</script>

<style lang="less" scoped>
.head {
  .body {
    position: relative;
    display: flex;
    width: 100%;
    height: 410px;
    background-image: url('@/assets/icons/酒厂全员.jpeg');
    background-repeat: no-repeat;
    background-size: 100% 410px;
    /deep/ .el-input {
      position: relative;
      margin: 34px auto;
      width: 485px;
      height: 35px;
      border-radius: 10px;
      .el-input__inner {
        border-radius: 9px;
      }
    }
    .linkStyle {
      position: absolute;
      display: flex;
      padding: 5px 5px 0 0;
      justify-content: center;
      z-index: 3;
      display: flex;
      color: #fff;
      font-size: 18px;
      cursor: pointer;
      .el-dropdown-link {
        cursor: pointer;
        color: #ffffff;
      }
      .link {
        margin-left: 10px;
      }
    }
    .bottom {
      padding: 0px 0px 0 0;
      justify-content: space-evenly;
      width: 100%;
      top: 383px;
    }
    .active {
      color: #560000;
      font-size: 20px;
      font-weight: 700;
    }
    .divTop {
      right: 10px;
    }
  }
}
</style>
