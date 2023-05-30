<!--
 * @Author       : 蔡诗涵
 * @Date         : 2023-05-24 23:06:01
 * @LastEditTime : 2023-05-29 20:42:09
 * @Description  : 管理端布局
 *
-->
<template>
  <div class="index">
    <el-container>
      <el-aside width="200px">
        酒厂管理点
        <el-menu
        :router='true'
       default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#304156"
      text-color="#fff"
      active-text-color="#ffd04b"
      :unique-opened='true'>
      <el-submenu index="/home">
        <template slot="title">
          <i class="el-icon-s-platform"></i>
          <span>首页</span>
        </template>
        <el-menu-item-group>
          <el-menu-item  index="home/visit">
            <i class="el-icon-s-marketing"></i>
            周访问量</el-menu-item>
          <el-menu-item index="1-2">
            <i class="el-icon-location"></i>
            用户地域分布</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="home/2">
        <template slot="title">
          <i class="el-icon-s-custom"></i>
          <span slot="title">用户管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">
            <i class="el-icon-s-custom"></i>
            用户列表</el-menu-item>
          <el-menu-item index="2-2">
            <i class="el-icon-s-custom"></i>
            在线用户</el-menu-item>
          <el-menu-item index="2-3">
            <i class="el-icon-s-management"></i>
            申请调酒师</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="3">
        <i class="el-icon-s-tools"></i>
        <span slot="title">系统管理</span>
      </el-menu-item>
      <el-submenu index="4">
        <template slot="title">
        <i class="el-icon-goblet-square-full"></i>
        <span slot="title">酒品管理</span>
      </template>
        <el-menu-item-group>
          <!-- 酒的种类 -->
          <el-menu-item index="4-1">
            <i class="el-icon-goblet-square-full"></i>
            种类管理</el-menu-item>
          <!-- 一瓶酒的信息 -->
          <el-menu-item index="4-2">
            <i class="el-icon-goblet-square-full"></i>
            酒品信息</el-menu-item>
          <!-- 调制酒的配方页信息 -->
          <el-menu-item index="4-3">
            <i class="el-icon-goblet-square-full"></i>
            酒品配方</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-s-order"></i>
        <span slot="title">文章管理</span>
      </template>
        <el-menu-item-group>
          <el-menu-item index="5-1">
            <i class="el-icon-s-order"></i>
            发布文章主题</el-menu-item>
          <el-menu-item index="4-2">
            <i class="el-icon-s-order"></i>
            文章列表</el-menu-item>
          <el-menu-item index="4-3">
            <i class="el-icon-s-order"></i>
            其他</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="6">
        <i class="el-icon-setting"></i>
        <span slot="title">权限管理</span>
      </el-menu-item>
      <el-menu-item index="7">
        <i class="el-icon-picture"></i>
        <span slot="title">图片管理</span>
      </el-menu-item>
      <el-menu-item index="8">
        <i class="el-icon-video-camera-solid"></i>
        <span slot="title">视频管理</span>
      </el-menu-item>
    </el-menu>
      </el-aside>
      <el-container>
        <el-header height="50px">
          <el-dropdown trigger="click">
            <span>管理员</span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item :split-button="true" @click.native="exit">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        </el-header>
        <el-main>
            <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      root: ''
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
    // 退出
    exit() {
      console.log('1111')
      this.$router.push('/boss/Login')
    }
  }
}
</script>

<style lang="less" scoped>

.index{
  .el-header{
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    background-color: #ffffff;
    color: #333;
    line-height: 50px;
    cursor: default;
    span{
      display: inline-block;
      margin-left: 10px;
    }
  }

  .el-aside {
    height: 100vh;
    background-color: #304156;
    overflow-x: hidden;
    color: #ffffff;
    text-align: center;
    line-height: 50px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
}
</style>
