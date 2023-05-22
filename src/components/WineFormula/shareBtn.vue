<!--
 * @Author       : 蔡诗涵
 * @Date         : 2023-05-11 16:48:05
 * @LastEditTime : 2023-05-20 16:18:39
 * @Description  :
 *
-->
<template>
  <div class="share" @click="getUp">
    <button class="Btn">分享一下</button>
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
      console.log(this.isUp)
    },
  },
}
</script>

<style lang="less" scoped>
.share {
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
