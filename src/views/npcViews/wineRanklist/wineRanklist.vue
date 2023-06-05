<template>
  <div class="Ranklist">
    <Head :name="name" :checkindex="'1'"></Head>
    <div class="main">
      <div class="left">
        <div class="title"><h1>酒品TOP</h1></div>
        <div class="list">
          <ul>
            <li>
              <div class="item" v-for="(item, index) in wineList" :key="index">
                <div class="number">{{ index + 1 }}</div>
                <div class="img">
                  <img
                    src="@/../public/images/314e251f95cad1c841bf19c57c3e6709c83d51c8.jpg"
                    alt=""
                  />
                </div>
                <div class="description">
                  <div class="cname">
                    <span>酒名</span>
                  </div>
                  <div class="ename">
                    <span>英文名</span>
                  </div>
                  <div class="score">
                    <star :size="15" :is-star="4"></star>
                    <span class="pople">119人评价</span>
                  </div>
                </div>
              </div>
            </li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
      <div class="divider"></div>
      <div class="right">
        <div class="title">
          <h1>酒厂TOP</h1>
        </div>
        <div class="list">
          <ul>
            <li>
              <div class="item" v-for="(item, index) in wineList" :key="index">
                <div class="number">{{ index + 1 }}</div>
                <div class="img">
                  <img
                    src="@/../public/images/314e251f95cad1c841bf19c57c3e6709c83d51c8.jpg"
                    alt=""
                  />
                </div>
                <div class="description">
                  <div class="cname">
                    <span>酒名</span>
                  </div>
                  <div class="ename">
                    <span>英文名</span>
                  </div>
                  <div>
                    <span>简介</span>
                  </div>
                </div>
              </div>
            </li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
    <tail></tail>
  </div>
</template>

<script>
import Head from '@/components/common/head.vue'
import Tail from '@/components/common/tail.vue'
import { DBUser } from '@/api/db'
import star from '@/components/WineFormula/star.vue'
export default {
  components: {
    Head,
    Tail,
    star,
  },
  data() {
    return {
      name: '',
      wineList: [{}, {}, {}, {}, {}],
    }
  },
  methods: {
    // 获取登录名
    getname() {
      this.name = DBUser.getCurrUser().username
    },
  },
  created() {
    // 判定用户是否登录
    if (DBUser.getCurrUser().username) {
      this.getname()
    } else {
      this.$message({
        type: 'error',
        message: '请先登录',
      })
      this.$router.push('/index')
    }
  },
}
</script>

<style lang="less">
.Ranklist {
  position: relative;
  .main {
    position: relative;
    display: flex;
    position: relative;
    background-color: #ffffff;
    width: 90vw;
    font-size: 14px;
    color: black;
    margin: 0 auto;
    padding: 30px 20px 10px 20px;
    .left {
      flex: 1;
      .title {
        margin-bottom: 20px;
        text-align: center;
      }
    }
    .divider {
      height: 100%;
      border: 1px solid #bbb;
    }
    .right {
      flex: 1;
      padding: 0 0 0 10px;
      .title {
        margin-bottom: 20px;
        text-align: center;
      }
    }
  }
  // 列表item样式
  .item {
    display: flex;
    margin-bottom: 60px;
    .number {
      margin-right: 10px;
      font-size: 60px;
      font-family: STCaiyun;
    }
    .img {
      margin-right: 10px;
      img {
        width: 100px;
        height: 100px;
      }
    }
    .description {
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      .score {
        display: flex;
        width: 100%;
        .pople {
          display: block;
          margin-left: 60px;
        }
      }
    }
  }
  .item :nth-child(5) {
    margin-bottom: 0px;
  }
}
</style>
