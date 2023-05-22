<!--
 * @Author       : 蔡诗涵
 * @Date         : 2023-05-10 16:54:44
 * @LastEditTime : 2023-05-11 14:39:58
 * @Description  : 收藏按钮
 *
-->
<template>
  <div class="collect" @click="getUp">
    <img v-if="isUp" src="@/assets/icons/爱心 (点亮).png" alt="" class="icon" />
    <img v-else src="@/assets/icons/爱心.png" alt="" class="icon" />
    <button class="Btn">收藏</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isUp: false,
    }
  },
  methods: {
    getUp() {
      this.isUp = !this.isUp
    },
  },
}
</script>

<style lang="less" scoped>
.collect {
  position: relative;
  flex-basis: 40%;
  margin: 3px;
  .icon {
    position: absolute;
    left: 7px;
    top: 7px;
    height: 15px;
    width: 15px;
  }
  .Btn {
    width: 80px;
    height: 30px;
    border-radius: 4px;
    background-color: #fff;
    border: 1px solid #bbbbbb;
  }
}
</style>
