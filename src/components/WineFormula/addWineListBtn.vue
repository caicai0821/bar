<!--
 * @Author       : 蔡诗涵
 * @Date         : 2023-05-11 14:42:32
 * @LastEditTime : 2023-05-21 00:05:42
 * @Description  : 添加酒单按钮
 *
-->
<template>
  <div class="add" @click="getUp">
    <img src="@/assets/icons/加号_o.png" alt="" class="icon" />
    <button class="Btn">酒单</button>
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
      this.isUp = true
      this.$emit('getUp', this.isUp)
    },
  },
}
</script>

<style lang="less" scoped>
.add {
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
