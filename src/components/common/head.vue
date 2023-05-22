<!--
 * @Author       : 蔡诗涵
 * @Date         : 2023-04-19 16:58:45
 * @LastEditTime : 2023-05-20 23:56:19
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
        <span>登录</span>
        <span>&nbsp;|&nbsp;</span>
        <span>注册</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'myHead',
  data() {
    return {
      search: '',
      nav: ['首页', '排行榜', '酒厂专题', '新鲜事', '酒单', '社区', '调酒视频'],
      navTop: ['调酒师认证', '味道', '调酒师'],
      checkindex: 0,
    }
  },
  created() {},
  methods: {
    changeClass(index) {
      console.log(index)
      this.checkindex = index
      console.log(this.checkindex)
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
