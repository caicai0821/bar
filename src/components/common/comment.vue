<template>
  <div class="comment">
    <div class="left">
      <div class="picture">
        <img
          src="@/../public/images/bb6e6077d0b12d623c5f0172d35975b4.jpeg"
          alt=""
        />
      </div>
    </div>
    <div class="right">
      <div class="top">
        <span>{{ name }}</span>
        <star :size="15" :is-star="Math.floor(9 / 2)"></star>
      </div>
      <div class="middle">
        <p>
          “Like all forms of design, visual design is about problem-solving, not
          about personal preference or unsupported opinion.” — Bob Baxley
          “像其他设计一样，视觉设计也是解决问题，不是个人喜好。” “Like all forms
          of design, visual design is about problem-solving, not about personal
          preference or unsupported opinion.” — Bob Baxley
          “像其他设计一样，视觉设计也是解决问题，不是个人喜好。”
        </p>
      </div>
      <div class="bottom">
        <div class="timeDiv">
          {{ time }}
        </div>
        <div class="btnDiv">
          <div class="upVoteBtn" @click="getUp">
            <img v-if="userList.isUp" src="@/assets/icons/已点赞.png" alt="" />
            <img v-else src="@/assets/icons/点赞.png" alt="" />
          </div>
          <div class="commentBtn" @click="showComment" ref="commentimg">
            <img src="@/assets/icons/3.1 评论.png" alt="" />
          </div>
        </div>
      </div>
      <!-- 用户评论用户层 -->
      <div class="userCommentDiv">
        <div class="left">
          <div class="picture">
            <img
              src="@/../public/images/bb6e6077d0b12d623c5f0172d35975b4.jpeg"
              alt=""
            />
          </div>
        </div>
        <div class="right">
          <div class="top">
            <span>{{ name }}</span>
          </div>
          <div class="middle">
            <p>
              “Like all forms of design, visual design is about problem-solving,
              not about personal preference or unsupported opinion.” — Bob
              Baxley “像其他设计一样，视觉设计也是解决问题，不是个人喜好。”
              “Like all forms of design, visual design is about problem-solving,
              not about personal preference or unsupported opinion.” — Bob
              Baxley “像其他设计一样，视觉设计也是解决问题，不是个人喜好。”
            </p>
          </div>
          <div class="bottom">
            <div class="timeDiv">
              {{ time }}
            </div>
            <div class="btnDiv">
              <div class="upVoteBtn" @click="getUp">
                <img
                  v-if="userList.contentList[0].isUp"
                  src="@/assets/icons/已点赞.png"
                  alt=""
                />
                <img v-else src="@/assets/icons/点赞.png" alt="" />
              </div>
              <div class="commentBtn" @click="showComment" ref="commentimg">
                <img src="@/assets/icons/3.1 评论.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="newComment" v-if="isNew">
        <div class="text">
          <el-input
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 10 }"
            :placeholder="reliyName(name)"
            resize="none"
            v-model="content"
          >
          </el-input>
        </div>
        <div class="publish">
          <button class="publishBtn" @click="concealComment">发表</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import star from '@/components/WineFormula/star.vue'
export default {
  components: { star },
  name: 'MyComment',
  data() {
    return {
      name: '从众的阿希',
      time: '2022-05-26 ',
      userList: {
        userImg: require('@/../public/images/bb6e6077d0b12d623c5f0172d35975b4.jpeg'),
        UserName: 'caicai',
        content: '111111',
        replayTime: '2023-05-22',
        isUp: false,

        contentList: [
          {
            userImg: require('@/../public/images/bb6e6077d0b12d623c5f0172d35975b4.jpeg'),
            UserName: 'caicai',
            content: '111111',
            replayTime: '2023-05-22',
            isUp: false,
          },
        ],
      },
      content: '',
      isNew: false,
    }
  },
  methods: {
    // 文本框无内容时的文字
    reliyName(x) {
      return '回复：' + x
    },
    // 点赞
    getUp() {
      console.log('111')
      this.userList.isUp = !this.userList.isUp
    },
    // 展示文本框
    showComment() {
      this.isNew = !this.isNew
      if (this.isNew) {
        this.$refs.commentimg.style.backgroundColor = '#e5e5e5'
      } else {
        this.$refs.commentimg.style.backgroundColor = ''
      }
      this.content = ''
    },
    // 判断文本框不为空，并发布
    concealComment() {
      if (this.content === '') {
        return this.$message('内容不能为空')
      }
      this.$refs.commentimg.style.backgroundColor = ''
      this.isNew = false
      this.userList.contentList.push({
        userImg: require('@/../public/images/bb6e6077d0b12d623c5f0172d35975b4.jpeg'),
        UserName: 'caicai',
        content: this.content,
        replayTime: this.currentTime(),
      })
    },
    // 获取时间
    currentTime() {
      const date = new Date()
      const year = date.getFullYear() // 月份从0~11，所以加一
      const month = date.getMonth()
      console.log('month', month)
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
  created() {},
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
    width: 80vw;
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
        .commentBtn {
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
    .userCommentDiv {
      display: flex;
      position: relative;
      // width: 1200px;
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
        width: 80vw;
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
      }
    }
  }
}
</style>
