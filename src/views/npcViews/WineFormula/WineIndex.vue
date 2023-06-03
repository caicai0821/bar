<!--
 * @Author       : 蔡诗涵
 * @Date         : 2023-06-02 16:30:15
 * @LastEditTime : 2023-06-03 20:51:10
 * @Description  : 用户端首页
 *
-->
<template>
  <div class="wineIndex">
    <Head @getLogin="getLogin"></Head>
    <!-- 登录注册弹窗 -->
    <!-- 遮罩层 -->
    <div class="black_breakgroud" v-if="flag">
      <login></login>
    </div>
    <!-- 登录 -->
    <!-- <login></login> -->
    <!-- 主体内容 -->
    <div class="body">
      <!-- 轮播图 -->
      <div class="top">
        <el-carousel indicator-position="outside">
          <el-carousel-item v-for="item in bannerList" :key="item">
            <img :src="item" alt="" />
          </el-carousel-item>
        </el-carousel>
      </div>
      <!-- 文章 -->
      <div class="middle1">
        <div
          class="articleItem"
          v-for="(item, index) in articleList"
          :key="index"
        >
          <img :src="item.articleImg" alt="" />
          <span>{{ item.articleTitle }}</span>
        </div>
      </div>
      <!-- 配方 -->
      <div>
        <ul class="middle2">
          <li
            class="recipeItem"
            v-for="(item, index) in recipeList"
            :key="index"
          >
            <div>
              <img :src="item.img" alt="" />
            </div>
            <div>
              <span>{{ item.WineName }}</span>
            </div>
            <div class="author">
              <span>{{ item.author }}</span>
              <el-divider direction="vertical"></el-divider>
              <star :is-star="4" :size="15"></star>
            </div>
            <p>
              {{ item.description }}
              {{ item.description }}
              {{ item.description }}
              {{ item.description }}
            </p>
          </li>
        </ul>
      </div>
      <!-- 更多话题 -->
      <div class="middle3">
        <div class="left">
          <div>
            <h2 class="title">热门话题</h2>
            <div class="topic">
              <el-row :gutter="20">
                <el-col
                  :span="12"
                  v-for="(item, index) in topicList"
                  :key="index"
                  ><div class="grid-content">
                    <span>{{ item }}</span>
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>
        </div>
        <div class="right">
          <h2 class="title">常见问题</h2>
          <div class="topic">
            <el-row>
              <el-col
                :span="24"
                v-for="(item, index) in problemList"
                :key="index"
                ><div class="grid-content">
                  <span>{{ item }}</span>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
      <!-- 调酒师头像 -->
      <div class="bottom">
        <div class="left">
          <h2 class="title">优质调酒师</h2>
          <div class="barmaid">
            <div
              class="barmaidItem"
              v-for="(item, index) in barmaidList"
              :key="index"
            >
              <img :src="item.img" alt="" />
              <span>{{ item.name }}</span>
            </div>
          </div>
        </div>
        <div class="right">
          <el-row :gutter="20">
            <el-col :span="14"
              ><div class="grid-content">
                <ul>
                  <li>创建人：苦艾酒 老白干</li>
                  <li>发行版本：2023060101</li>
                  <li>运行时间：2023-06-01</li>
                </ul>
              </div></el-col
            >
            <el-col :span="10"
              ><div class="grid-content">
                <span>制作不易<br />投个小币</span>
                <img src="@/../public/images/二维码.png" alt="" /></div
            ></el-col>
          </el-row>
        </div>
      </div>
    </div>
    <tail></tail>
  </div>
</template>

<script>
import Head from '@/components/common/head.vue'
import Tail from '@/components/common/tail.vue'
import star from '@/components/WineFormula/star.vue'
import login from '@/components/common/login.vue'
// import register from '@/components/common/register.vue'
export default {
  components: {
    Head,
    Tail,
    star,
    login,
    // register,
  },
  data() {
    return {
      flag: false,
      bannerList: [
        require('@/../public/images/d566648e4b6445ec121ef33848a4ecc5.jpeg'),
        require('@/../public/images/172a3fc975de1e7aa712ddebf5f62b98.png'),
        require('@/../public/images/8aacf11da5a9d31d40e739dec2980691.jpeg'),
        require('@/../public/images/336e53f6593280c104f2ed76053d5e93.jpg'),
        require('@/../public/images/380e98b8a9708ce0d60607f81106c6a5.jpeg'),
      ],
      articleList: [
        {
          articleTitle: '主题活动',
          articleImg: require('@/../public/images/bf8ab6be6ec6fa19d2225065765cbef1.jpeg'),
        },
        {
          articleTitle: '主题活动',
          articleImg: require('@/../public/images/bf8ab6be6ec6fa19d2225065765cbef1.jpeg'),
        },
        {
          articleTitle: '主题活动',
          articleImg: require('@/../public/images/bf8ab6be6ec6fa19d2225065765cbef1.jpeg'),
        },
        {
          articleTitle: '主题活动',
          articleImg: require('@/../public/images/bf8ab6be6ec6fa19d2225065765cbef1.jpeg'),
        },
        {
          articleTitle: '主题活动',
          articleImg: require('@/../public/images/bf8ab6be6ec6fa19d2225065765cbef1.jpeg'),
        },
        {
          articleTitle: '主题活动',
          articleImg: require('@/../public/images/bf8ab6be6ec6fa19d2225065765cbef1.jpeg'),
        },
      ],
      recipeList: [
        {
          WineName: '粉红恋人',
          author: '作者',
          score: 4,
          description:
            '红粉佳人（Pink lady）这款鸡尾酒这款酒在最初的时候是用干金，鸡蛋清和红石榴糖浆调制的，会多加一些牛奶或者淡奶油。鸡尾酒中粉色正是浪漫爱情的象征。寓意可以为美丽的女士们带来爱情。',
          img: require('@/../public/images/8aacf11da5a9d31d40e739dec2980691.jpeg'),
        },
        {
          WineName: '粉红恋人',
          author: '作者',
          score: 4,
          description:
            '红粉佳人（Pink lady）这款鸡尾酒这款酒在最初的时候是用干金，鸡蛋清和红石榴糖浆调制的，会多加一些牛奶或者淡奶油。鸡尾酒中粉色正是浪漫爱情的象征。寓意可以为美丽的女士们带来爱情。',
          img: require('@/../public/images/8aacf11da5a9d31d40e739dec2980691.jpeg'),
        },
        {
          WineName: '粉红恋人',
          author: '作者',
          score: 4,
          description:
            '红粉佳人（Pink lady）这款鸡尾酒这款酒在最初的时候是用干金，鸡蛋清和红石榴糖浆调制的，会多加一些牛奶或者淡奶油。鸡尾酒中粉色正是浪漫爱情的象征。寓意可以为美丽的女士们带来爱情。',
          img: require('@/../public/images/8aacf11da5a9d31d40e739dec2980691.jpeg'),
        },
        {
          WineName: '粉红恋人',
          author: '作者',
          score: 4,
          description:
            '红粉佳人（Pink lady）这款鸡尾酒这款酒在最初的时候是用干金，鸡蛋清和红石榴糖浆调制的，会多加一些牛奶或者淡奶油。鸡尾酒中粉色正是浪漫爱情的象征。寓意可以为美丽的女士们带来爱情。',
          img: require('@/../public/images/8aacf11da5a9d31d40e739dec2980691.jpeg'),
        },
        {
          WineName: '粉红恋人',
          author: '作者',
          score: 4,
          description:
            '红粉佳人（Pink lady）这款鸡尾酒这款酒在最初的时候是用干金，鸡蛋清和红石榴糖浆调制的，会多加一些牛奶或者淡奶油。鸡尾酒中粉色正是浪漫爱情的象征。寓意可以为美丽的女士们带来爱情。',
          img: require('@/../public/images/8aacf11da5a9d31d40e739dec2980691.jpeg'),
        },
        {
          WineName: '粉红恋人',
          author: '作者',
          score: 4,
          description:
            '红粉佳人（Pink lady）这款鸡尾酒这款酒在最初的时候是用干金，鸡蛋清和红石榴糖浆调制的，会多加一些牛奶或者淡奶油。鸡尾酒中粉色正是浪漫爱情的象征。寓意可以为美丽的女士们带来爱情。',
          img: require('@/../public/images/8aacf11da5a9d31d40e739dec2980691.jpeg'),
        },
      ],
      topicList: [
        '大家喝的第一款酒是什么呀',
        '【通知】必读，再不看就晚啦',
        '大家喝的第一款酒是什么呀',
        '大家喝的第一款酒是什么呀',
        '【通知】必读，再不看就晚啦',
        '大家喝的第一款酒是什么呀',
      ],
      problemList: [
        '大家喝的第一款酒是什么呀',
        '【通知】必读，再不看就晚啦',
        '大家喝的第一款酒是什么呀',
        '大家喝的第一款酒是什么呀',
      ],
      barmaidList: [
        {
          img: require('@/../public/images/bb6e6077d0b12d623c5f0172d35975b4.jpeg'),
          name: '小张小张自有主张',
        },
        {
          img: require('@/../public/images/bb6e6077d0b12d623c5f0172d35975b4.jpeg'),
          name: '小张小张自有主张',
        },
        {
          img: require('@/../public/images/bb6e6077d0b12d623c5f0172d35975b4.jpeg'),
          name: '小张小张自有主张',
        },
        {
          img: require('@/../public/images/bb6e6077d0b12d623c5f0172d35975b4.jpeg'),
          name: '小张小张自有主张',
        },
        {
          img: require('@/../public/images/bb6e6077d0b12d623c5f0172d35975b4.jpeg'),
          name: '小张小张自有主张',
        },
        {
          img: require('@/../public/images/bb6e6077d0b12d623c5f0172d35975b4.jpeg'),
          name: '小张小张自有主张',
        },
      ],
    }
  },
  methods: {
    getLogin(x) {
      console.log('1111')
      console.log(x)
      this.flag = x
    },
  },
}
</script>

<style lang="less" scoped>
//  <!-- 遮罩层 -->
.black_breakgroud {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 200;
}
.body {
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #ffffff;
  width: 90vw;
  font-size: 14px;
  color: black;
  margin: 0 auto;
  padding: 10px 00px;
  .top {
    .el-carousel__item h3 {
      color: #475669;
      font-size: 18px;
      opacity: 0.75;
      line-height: 300px;
      margin: 0;
    }
    img {
      width: 100%;
    }
  }
  .middle1 {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 20px;
    margin-bottom: 40px;
    .articleItem {
      width: 300px;
      height: 320px;
      margin-bottom: 20px;
      border: 1px solid #bbb;
      text-align: center;
      img {
        margin-bottom: 10px;
        width: 100%;
        height: 260px;
      }
    }
    .articleItem:nth-child(1) {
      border-radius: 10px 0 0 0;
      img {
        border-radius: 10px 0 0 0;
      }
    }
    .articleItem:nth-child(3) {
      border-radius: 0 10px 0 0;
      img {
        border-radius: 0 10px 0 0;
      }
    }
    .articleItem:nth-child(4) {
      border-radius: 0 0 0 10px;
    }
    .articleItem:nth-child(6) {
      border-radius: 0 0 10px 0;
    }
  }
  .middle2 {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 20px;
    .recipeItem {
      position: relative;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      align-items: center;
      margin-bottom: 20px;
      padding: 10px 20px;
      width: 350px;
      height: 421px;
      border: 1px solid #bbb;
      img {
        margin-bottom: 10px;
        width: 70px;
        height: 70px;
        border-radius: 50%;
      }
      span {
        display: inline-block;
        margin-bottom: 10px;
      }
      .author {
        display: flex;
        align-items: baseline;
        overflow: hidden;
      }
      p {
        display: block;
        text-indent: 2em;
        overflow: hidden;
      }
    }
    .recipeItem:nth-child(odd) {
      p {
        max-height: 250px;
      }
    }
    .recipeItem:nth-child(even) {
      height: 560px;
    }
    .recipeItem:nth-child(4),
    .recipeItem:nth-child(6) {
      position: relative;
      top: -138px;
    }
  }
  .middle3 {
    position: relative;
    display: flex;
    top: -95px;
    justify-content: space-between;
    margin: 0 20px;
    .left {
      padding: 20px;
      width: 60vw;
      border: 1px solid #bbb;
      .title {
        margin-bottom: 10px;
        color: #3b3019;
      }
      .topic {
        .el-row {
          margin-bottom: 20px;
          &:last-child {
            margin-bottom: 0;
          }
        }
        .el-col {
          border-radius: 0px;
          margin: 10px 0;
          color: #456086;
        }
        .grid-content {
          display: flex;
          padding: 0px 5px;
          align-items: center;
          border-radius: 0px;
          min-height: 36px;
          border-bottom: 1px dashed #99a9bf;
        }
        .row-bg {
          padding: 10px 0;
          background-color: #f9fafc;
        }
      }
    }
    .right {
      width: 25vw;
      border: 1px solid #bbb;
      padding: 20px;
      .title {
        margin-bottom: 10px;
        color: #3b3019;
      }
      .topic {
        .el-row {
          &:last-child {
            margin-bottom: 0;
          }
        }
        .el-col {
          border-radius: 0px;
          margin: 5px 0;
          color: #456086;
        }
        .grid-content {
          display: flex;
          padding: 0px 5px;
          align-items: center;
          border-radius: 0px;
          min-height: 36px;
          border-bottom: 1px dashed #99a9bf;
        }
        .row-bg {
          padding: 10px 0;
          background-color: #f9fafc;
        }
      }
    }
  }
  .bottom {
    position: relative;
    display: flex;
    top: -35px;
    justify-content: space-between;
    margin: 0 20px;
    .left {
      width: 60vw;
      border: 1px solid #bbb;
      padding: 20px;
      .title {
        margin-bottom: 10px;
        color: #3b3019;
      }
      .barmaid {
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 150px;
      }
      .barmaidItem {
        display: flex;
        align-items: center;
        flex-direction: column;
        img {
          width: 90px;
          border-radius: 50%;
        }
        span {
          display: block;
          margin-top: 20px;
          text-align: center;
          max-width: 85px;
        }
      }
    }
    .right {
      width: 25vw;
      border: 1px solid #bbb;
      padding: 20px 20px;
      font-size: 12px;
      font-weight: 600;
      .grid-content {
        border-radius: 0px;
        min-height: 36px;
        li {
          margin-bottom: 10px;
        }
        img {
          margin: 10px 10px 10px 0;
          width: 100px;
        }
      }
    }
  }
}
</style>
