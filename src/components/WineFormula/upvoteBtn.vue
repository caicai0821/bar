<!--
 * @Author       : 蔡诗涵
 * @Date         : 2023-05-08 21:09:32
 * @LastEditTime : 2023-05-20 16:43:01
 * @Description  :点赞按钮
 *
-->
<template>
  <div class="upvote" @click="getUp">
    <img v-if="isUp" src="@/assets/icons/已点赞.png" alt="" class="icon" />
    <img v-else src="@/assets/icons/点赞.png" alt="" class="icon" />
    <button class="Btn">点赞</button>
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
.upvote {
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
