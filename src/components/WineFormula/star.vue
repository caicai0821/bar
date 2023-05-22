<!--
 * @Author       : 蔡诗涵
 * @Date         : 2023-05-16 19:30:10
 * @LastEditTime : 2023-05-19 16:14:44
 * @Description  :
 *
-->
<template>
  <div :class="this.size === 15 ? 'star' : 'star1'">
    <img
      src="@/assets/icons/星星.png"
      alt=""
      v-for="index in list"
      :key="index"
    />
    <img
      src="@/assets/icons/星星 (1).png"
      alt=""
      v-for="index in list1"
      :key="index + 'a'"
    />
  </div>
</template>

<script>
export default {
  name: 'MyStar',
  props: ['IsStar', 'size'],
  data() {
    return {
      //   IsStar: 3,
      list: [],
      list1: [],
    }
  },
  methods: {
    creatStar() {
      for (let i = 0; i < this.IsStar; i++) {
        this.list.push(i)
      }
      for (let i = 0; i < 5 - this.IsStar; i++) {
        this.list1.push(i)
      }
    },
  },
  created() {
    this.creatStar()
  },
}
</script>

<style lang="less" scoped>
.star {
  display: flex;
  align-items: center;
  img {
    width: 15px;
    height: 15px;
  }
}
.star1 {
  display: flex;
  align-items: top;
  margin-left: 10px;
  img {
    width: 25x;
    height: 25px;
  }
}
</style>
