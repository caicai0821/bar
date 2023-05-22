<template>
  <div class="popups">
    <div class="wineListPopups">
      <div class="close" @click="close">
        <img src="@/assets/icons/关闭小.png" alt="" />
      </div>
      <div class="top"></div>
      <div class="content">
        <div class="list" v-for="(item, index) in list" :key="index">
          <div class="img">
            <img
              class="img-object"
              src="@/../public/images/d566648e4b6445ec121ef33848a4ecc5.jpeg"
              alt="酒单封面"
            />
          </div>
          <div class="text">
            <span>{{ item }}</span>
          </div>
        </div>
        <div class="add">
          <div class="icon" @click="showInput">
            <img src="@/assets/icons/新增.png" alt="" />
          </div>
          <div class="text">
            <el-input
              class="input-new-tag"
              v-if="inputVisible"
              v-model="inputValue"
              ref="saveTagInput"
              size="small"
              @keyup.enter.native="handleInputConfirm"
              @blur="handleInputConfirm"
            >
            </el-input>
            <span v-else>新建我的酒单</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: ['甜甜的酒'],
      inputVisible: false,
      inputValue: '',
      isUp: false,
    }
  },
  methods: {
    showInput() {
      this.inputVisible = true
      this.$nextTick((_) => {
        this.$refs.saveTagInput.$refs.input.focus()
      })
    },
    handleInputConfirm() {
      const inputValue = this.inputValue
      if (inputValue) {
        this.list.push(inputValue)
      }
      this.inputVisible = false
      this.inputValue = ''
    },
    close() {
      this.$emit('closePopup', this.isUp)
    },
  },
}
</script>

<style lang="less" scoped>
.popups {
  position: fixed;
  top: 30%;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  z-index: 9;
  .wineListPopups {
    position: relative;
    width: 400px;
    min-height: 100px;
    border-radius: 20px;
    border: 1px solid #bbbbbb;
    background-color: #ffffff;
    .img-object {
      object-fit: cover;
      object-position: 50% 20%;
    }
    .close {
      position: absolute;
      top: 5px;
      right: 10px;
      width: 24px;
      height: 24px;
      img {
        width: 24px;
        height: 24px;
      }
    }
    .top {
      width: 400px;
      height: 35px;
      background-color: #716868;
      border-radius: 20px 20px 0 0;
    }
    .content {
      padding: 5px 5px;
      min-height: 100px;
      color: #000;
      font-size: 14px;
      .list {
        display: flex;
        align-items: baseline;
        .img {
          width: 90px;
          height: 90px;
          img {
            margin: 5px 5px;
            width: 80px;
            height: 80px;
          }
        }
      }
      .add {
        display: flex;
        align-items: baseline;
        .icon {
          width: 90px;
          height: 90px;
          img {
            margin: 5px 5px;
            width: 80px;
            height: 80px;
          }
        }
      }
    }
  }
}
</style>
