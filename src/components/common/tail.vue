<template>
  <div class="tail">
    <div class="middle">
      YCT Bar版权所有者为苦艾酒与老白干 一切解释权全归于版权所有者
      <div class="code">
        <div class="codeText">
          <span>各位看官若喜欢，投个小币鼓励一下我们叭</span>
        </div>
        <div class="codeImg">
          <img src="@/assets/icons/二维码.png" alt="" />
        </div>
      </div>
    </div>
    <div class="version">
      <div>创建人：苦艾酒 老白干</div>
      <div>运行时间：2023-02-26 01:14</div>
      <div>发行版本：20230403001</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyTail',
}
</script>

<style lang="less" scoped>
.tail {
  position: relative;
  display: flex;
  width: 100%;
  height: 320px;
  background-image: linear-gradient(
    rgba(90, 87, 88, 0),
    rgba(90, 87, 88, 0.5),
    rgba(90, 87, 88, 1)
  );
  .middle {
    margin: 70px auto;
    font-size: 16px;
    color: #fff;
    .code {
      display: flex;
      justify-content: space-between;
      margin: 55px auto;
      width: 315px;
      height: 120px;
      // background-color: #b90909;
      .codeText {
        display: flex;
        text-indent: 2em;
        align-items: center;
        width: 160px;
        // background-color: #fff;
      }
      .codeImg {
        width: 120px;
        height: 100%;
        // background-color: #ffffff;
        img {
          width: 120px;
          height: 100%;
        }
      }
    }
  }
  .version {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    right: 0px;
    bottom: 0px;
    height: 170px;
    width: 310px;
    display: flex;
    color: #000;
    // background-color: #b10000;
  }
}
</style>
