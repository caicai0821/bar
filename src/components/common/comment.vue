<template>
  <div class="comment">
    <div class="left">
      <div class="picture">
        <img :src="userList.userImg" alt="" />
      </div>
    </div>
    <div class="right">
      <div class="top">
        <span>{{ userList.UserName }}</span>
        <star :size="15" :is-star="Math.floor(userList.score / 2)"></star>
      </div>
      <div class="middle">
        <p>{{ userList.content }}</p>
      </div>
      <div class="bottom">
        <div class="timeDiv">
          {{ userList.replayTime }}
        </div>
        <div class="btnDiv">
          <div class="upVoteBtn" @click="getUp(userList)">
            <img v-if="userList.isUp" src="@/assets/icons/已点赞.png" alt="" />
            <img v-else src="@/assets/icons/点赞.png" alt="" />
          </div>
          <div
            class="commentBtn"
            @click="showComment(userList)"
            ref="commentimg"
          >
            <img src="@/assets/icons/3.1 评论.png" alt="" />
          </div>
        </div>
      </div>
      <el-divider></el-divider>
      <!-- 评论层 -->
      <div class="newComment" v-if="userList.isNew">
        <div class="text">
          <el-input
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 10 }"
            :placeholder="reliyName(userList.UserName)"
            resize="none"
            v-model="comment"
          >
          </el-input>
        </div>
        <div class="publish">
          <button class="publishBtn" @click="concealComment(userList)">
            发表
          </button>
        </div>
      </div>
      <!-- 用户评论用户层 -->
      <div
        class="userCommentDiv"
        v-for="(item, index) in userList.contentList"
        :key="index"
      >
        <div class="left">
          <div class="picture">
            <img :src="item.userImg" />
          </div>
        </div>
        <div class="right">
          <div class="top">
            <span>{{ item.UserName }}</span>
          </div>
          <div class="middle">
            <p>
              {{ item.content }}
            </p>
          </div>
          <div class="bottom">
            <div class="timeDiv">
              {{ item.replayTime }}
            </div>
            <div class="btnDiv">
              <div class="upVoteBtn" @click="getUp(item)">
                <img v-if="item.isUp" src="@/assets/icons/已点赞.png" alt="" />
                <img v-else src="@/assets/icons/点赞.png" alt="" />
              </div>
              <div
                class="commentBtn"
                @click="showComment(item)"
                ref="commentimg"
              >
                <img src="@/assets/icons/3.1 评论.png" alt="" />
              </div>
            </div>
          </div>
          <!-- 评论层 -->
          <div class="newComment" v-if="item.isNew">
            <div class="text">
              <el-input
                type="textarea"
                :autosize="{ minRows: 2, maxRows: 10 }"
                :placeholder="reliyName(item.UserName)"
                resize="none"
                v-model="comment"
              >
              </el-input>
            </div>
            <div class="publish">
              <button class="publishBtn" @click="concealComment(item)">
                发表
              </button>
            </div>
          </div>
          <!-- 文字回复 -->
          <div
            class="replay"
            v-for="(i, index) in item.contentList"
            :key="index + 'q'"
          >
            {{ i.UserName }}{{ reliyName(item.UserName) }}：{{ i.content }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import star from '@/components/WineFormula/star.vue'
export default {
  components: { star },
  props: ['userList'],
  name: 'MyComment',
  data() {
    return {
      // userList: {
      //   userImg: require('@/../public/images/bb6e6077d0b12d623c5f0172d35975b4.jpeg'),
      //   UserName: 'caicai',
      //   content:
      //     ' “Like all forms of design, visual design is about problem-solving, not about personal preference or unsupported opinion.” — Bob Baxley /n “像其他设计一样，视觉设计也是解决问题，不是个人喜好。” “Like all forms of design, visual design is about problem-solving, not about personal preference or unsupported opinion.” — Bob Baxley “像其他设计一样，视觉设计也是解决问题，不是个人喜好。”',
      //   replayTime: '2023-05-22',
      //   isUp: false,
      //   score: 9,
      //   isNew: false,
      //   contentList: [
      //     {
      //       toId: '1',
      //       userImg: require('@/../public/images/bb6e6077d0b12d623c5f0172d35975b4.jpeg'),
      //       UserName: '小张小张',
      //       content: '111111',
      //       replayTime: '2023-05-22',
      //       isUp: false,
      //       isNew: false,
      //     },
      //   ],
      // },
      comment: '',
    }
  },
  methods: {
    // 文本框无内容时的文字
    reliyName(x) {
      return '回复：' + x
    },
    // 点赞
    getUp(x) {
      if (x.isUp) {
        x.isUp = false
      } else {
        x.isUp = true
      }

      console.log(1, this.userList.isUp)
      console.log(2, x)
    },
    // 展示文本框
    showComment(x) {
      this.comment = ''
      x.isNew = !x.isNew
    },
    // 判断文本框不为空，并发布
    concealComment(x) {
      if (this.comment === '') {
        return this.$message('内容不能为空')
      }
      if (!x.contentList) {
        this.$set(x, 'contentList', [])
      }
      x.isNew = false
      x.contentList.push({
        userImg: require('@/../public/images/bb6e6077d0b12d623c5f0172d35975b4.jpeg'),
        UserName: 'caicai',
        content: this.comment,
        isUp: false,
        isNew: false,
        replayTime: this.currentTime(),
      })
    },
    // 获取时间
    currentTime() {
      const date = new Date()
      const year = date.getFullYear() // 月份从0~11，所以加一
      const dateArr = [date.getMonth() + 1, date.getDate()]
      // 如果格式是MM则需要此步骤，如果是M格式则此循环注释掉
      for (let i = 0; i < dateArr.length; i++) {
        if (dateArr[i] >= 1 && dateArr[i] <= 9) {
          dateArr[i] = '0' + dateArr[i]
        }
      }
      const strDate = year + '-' + dateArr[0] + '-' + dateArr[1]
      return strDate
    },
  },
}
</script>

<style lang="less" scoped>
.comment {
  display: flex;
  position: relative;
  // width: 1200px;
  color: #000;
  .left {
    width: 15vw;
    height: 100px;
    .picture {
      padding: 0px 10px;
      img {
        width: 100px;
        height: 100px;
      }
    }
  }
  .right {
    display: flex;
    flex-direction: column;
    width: 70vw;
    // background-color: rgb(91, 99, 99);
    .top {
      display: flex;
      align-items: baseline;
      span {
        font-size: 16px;
        margin-right: 20px;
      }
    }
    .middle {
      padding: 10px 5px;
      p {
        font-size: 14px;
        text-indent: 2em;
      }
    }
    .bottom {
      display: flex;
      justify-content: space-between;
      padding: 0px 10px;
      color: #9f9f9f;
      font-size: 14px;
      .btnDiv {
        display: flex;
        justify-content: space-between;
        width: 50px;
        img {
          width: 15px;
          height: 15px;
        }
      }
    }
    .newComment {
      position: relative;
      display: flex;
      justify-content: space-between;
      padding: 10px;
      width: 100%;
      background-color: #e5e5e5;
      .text {
        position: relative;
        min-width: 200px;
        width: 80%;
      }
      .publish {
        .publishBtn {
          color: #fff;
          width: 100px;
          height: 50px;
          border: 0px;
          border-radius: 4px;
          background-color: #a4adb3;
        }
      }
    }
    // <!-- 用户评论用户层 -->
    .userCommentDiv {
      display: flex;
      position: relative;
      color: #000;
      font-size: 14px;
      background-color: #e5e5e5;
      .left {
        width: 10vw;
        height: 100px;
        .picture {
          padding: 0px 10px;
          img {
            width: 50px;
            height: 50px;
          }
        }
      }
      .right {
        display: flex;
        flex-direction: column;
        width: 60vw;
        // background-color: rgb(91, 99, 99);
        .top {
          display: flex;
          align-items: baseline;
          span {
            font-size: 14px;
            margin-right: 20px;
          }
        }
        .middle {
          padding: 10px 5px;
          p {
            font-size: 12px;
            text-indent: 2em;
          }
        }
        .bottom {
          display: flex;
          justify-content: space-between;
          padding: 0px 10px;
          color: #9f9f9f;
          font-size: 14px;
          .btnDiv {
            display: flex;
            justify-content: space-between;
            width: 50px;
            img {
              width: 15px;
              height: 15px;
            }
          }
        }
        .newComment {
          position: relative;
          display: flex;
          justify-content: space-between;
          padding: 10px;
          width: 100%;
          background-color: #e5e5e5;
          .text {
            position: relative;
            min-width: 200px;
            width: 600px;
          }
          .publish {
            .publishBtn {
              color: #fff;
              width: 100px;
              height: 50px;
              border: 0px;
              border-radius: 4px;
              background-color: #a4adb3;
            }
          }
        }
        .replay {
          font-size: 14px;
          color: #9f9f9f;
        }
      }
    }
  }
}
</style>
