<!--
 * @Author       : 蔡诗涵
 * @Date         : 2023-06-06 16:36:51
 * @LastEditTime : 2023-06-06 16:38:23
 * @Description  :右侧导航栏
 *
-->
<template>
  <div class="nav">
    <ul>
      <li v-for="(item, index) in list" :key="index">
        {{ item }}
        <hr />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['list'],
}
</script>

<style lang="less" scoped>
.nav {
  position: absolute;
  display: flex;
  justify-content: center;
  padding: 10px 0px;
  //   left: 58vw;
  width: 20vw;
  border: 1px solid rgba(187, 187, 187, 1);
  font-size: 18px;
  border-radius: 32px;
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 10vw;
    line-height: 30px;
    hr {
      width: 10vw;
      color: #bbb;
    }
  }
}
</style>
