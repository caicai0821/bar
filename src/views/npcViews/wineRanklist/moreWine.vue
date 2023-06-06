<template>
  <div class="moreWine">
    <Head :name="name"></Head>
    <div class="main">
      <div class="top">
        <h1>全部All</h1>
        <img src="@/assets/icons/酒杯.png" alt="" />
      </div>
      <div class="content">
        <!-- 右侧导航栏 -->
        <div class="navDiv">
          <Mynav :list="typeList"></Mynav>
        </div>
        <!-- 酒品列表 -->
        <ul>
          <li v-for="(item, index) in wineList" :key="index">
            <div class="item">
              <div class="left">
                <img :src="item.img" alt="" />
              </div>
              <div class="right">
                <span>{{ item.cname }}&nbsp;</span>
                <span>{{ item.ename }}</span>
                <div class="introduction">简介：{{ item.introduction }}</div>
                <div class="icon">
                  <div class="icon1">
                    <img
                      :src="
                        item.isDrink
                          ? require('@/assets/icons/Beer.png')
                          : require('@/assets/icons/Beer1.png')
                      "
                      alt="喝过"
                      title="喝过"
                    /><span ref="drinkNum">3</span>
                  </div>
                  <div class="icon1">
                    <img
                      :src="
                        item.isfollow
                          ? require('@/assets/icons/爱心 (点亮).png')
                          : require('@/assets/icons/爱心.png')
                      "
                      alt="收藏"
                      title="收藏"
                    /><span>3</span>
                  </div>
                  <div class="icon1">
                    <img
                      src="@/assets/icons/分享_o.png"
                      alt="分享"
                      title="分享"
                    />
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <tail></tail>
  </div>
</template>

<script>
import Head from '@/components/common/head.vue'
import Tail from '@/components/common/tail.vue'
import { DBUser } from '@/api/db'
import Mynav from '@/components/wineRanklist/nav.vue'
export default {
  components: {
    Head,
    Tail,
    Mynav,
  },
  data() {
    return {
      name: '',
      wineList: [
        {
          img: require('@/../public/images/314e251f95cad1c841bf19c57c3e6709c83d51c8.jpg'),
          cname: '粉红恋人',
          ename: 'Pink Lover',
          introduction:
            '介绍：红粉佳人（Pink lady）这款鸡尾酒这款酒在最初的时候是用干金，鸡蛋清和红石榴糖浆调制的，会多加一些牛奶或者淡奶油。鸡尾酒中粉色正是浪漫爱情的象征。寓意可以为美丽的女士们带来爱情。',
          isDrink: false,
          isfollow: false,
          isShares: false,
        },
        {
          img: require('@/../public/images/314e251f95cad1c841bf19c57c3e6709c83d51c8.jpg'),
          cname: '粉红恋人',
          ename: 'Pink Lover',
          introduction:
            '介绍：红粉佳人（Pink lady）这款鸡尾酒这款酒在最初的时候是用干金，鸡蛋清和红石榴糖浆调制的，会多加一些牛奶或者淡奶油。鸡尾酒中粉色正是浪漫爱情的象征。寓意可以为美丽的女士们带来爱情。',
          isDrink: false,
          isfollow: false,
          isShares: false,
        },
        {
          img: require('@/../public/images/314e251f95cad1c841bf19c57c3e6709c83d51c8.jpg'),
          cname: '粉红恋人',
          ename: 'Pink Lover',
          introduction:
            '介绍：红粉佳人（Pink lady）这款鸡尾酒这款酒在最初的时候是用干金，鸡蛋清和红石榴糖浆调制的，会多加一些牛奶或者淡奶油。鸡尾酒中粉色正是浪漫爱情的象征。寓意可以为美丽的女士们带来爱情。',
          isDrink: false,
          isfollow: false,
          isShares: false,
        },
        {
          img: require('@/../public/images/314e251f95cad1c841bf19c57c3e6709c83d51c8.jpg'),
          cname: '粉红恋人',
          ename: 'Pink Lover',
          introduction:
            '介绍：红粉佳人（Pink lady）这款鸡尾酒这款酒在最初的时候是用干金，鸡蛋清和红石榴糖浆调制的，会多加一些牛奶或者淡奶油。鸡尾酒中粉色正是浪漫爱情的象征。寓意可以为美丽的女士们带来爱情。',
          isDrink: false,
          isfollow: false,
          isShares: false,
        },
        {
          img: require('@/../public/images/314e251f95cad1c841bf19c57c3e6709c83d51c8.jpg'),
          cname: '粉红恋人',
          ename: 'Pink Lover',
          introduction:
            '介绍：红粉佳人（Pink lady）这款鸡尾酒这款酒在最初的时候是用干金，鸡蛋清和红石榴糖浆调制的，会多加一些牛奶或者淡奶油。鸡尾酒中粉色正是浪漫爱情的象征。寓意可以为美丽的女士们带来爱情。',
          isDrink: false,
          isfollow: false,
          isShares: false,
        },
        {
          img: require('@/../public/images/314e251f95cad1c841bf19c57c3e6709c83d51c8.jpg'),
          cname: '粉红恋人',
          ename: 'Pink Lover',
          introduction:
            '介绍：红粉佳人（Pink lady）这款鸡尾酒这款酒在最初的时候是用干金，鸡蛋清和红石榴糖浆调制的，会多加一些牛奶或者淡奶油。鸡尾酒中粉色正是浪漫爱情的象征。寓意可以为美丽的女士们带来爱情。',
          isDrink: false,
          isfollow: false,
          isShares: false,
        },
        {
          img: require('@/../public/images/314e251f95cad1c841bf19c57c3e6709c83d51c8.jpg'),
          cname: '粉红恋人',
          ename: 'Pink Lover',
          introduction:
            '介绍：红粉佳人（Pink lady）这款鸡尾酒这款酒在最初的时候是用干金，鸡蛋清和红石榴糖浆调制的，会多加一些牛奶或者淡奶油。鸡尾酒中粉色正是浪漫爱情的象征。寓意可以为美丽的女士们带来爱情。',
          isDrink: false,
          isfollow: false,
          isShares: false,
        },
        {
          img: require('@/../public/images/314e251f95cad1c841bf19c57c3e6709c83d51c8.jpg'),
          cname: '粉红恋人',
          ename: 'Pink Lover',
          introduction:
            '介绍：红粉佳人（Pink lady）这款鸡尾酒这款酒在最初的时候是用干金，鸡蛋清和红石榴糖浆调制的，会多加一些牛奶或者淡奶油。鸡尾酒中粉色正是浪漫爱情的象征。寓意可以为美丽的女士们带来爱情。',
          isDrink: false,
          isfollow: false,
          isShares: false,
        },
        {
          img: require('@/../public/images/314e251f95cad1c841bf19c57c3e6709c83d51c8.jpg'),
          cname: '粉红恋人',
          ename: 'Pink Lover',
          introduction:
            '介绍：红粉佳人（Pink lady）这款鸡尾酒这款酒在最初的时候是用干金，鸡蛋清和红石榴糖浆调制的，会多加一些牛奶或者淡奶油。鸡尾酒中粉色正是浪漫爱情的象征。寓意可以为美丽的女士们带来爱情。',
          isDrink: false,
          isfollow: false,
          isShares: false,
        },
        {
          img: require('@/../public/images/314e251f95cad1c841bf19c57c3e6709c83d51c8.jpg'),
          cname: '粉红恋人',
          ename: 'Pink Lover',
          introduction:
            '介绍：红粉佳人（Pink lady）这款鸡尾酒这款酒在最初的时候是用干金，鸡蛋清和红石榴糖浆调制的，会多加一些牛奶或者淡奶油。鸡尾酒中粉色正是浪漫爱情的象征。寓意可以为美丽的女士们带来爱情。',
          isDrink: false,
          isfollow: false,
          isShares: false,
        },
      ],
      typeList: [
        '全部 All',
        '金酒 Gin',
        '威士忌 Whiskey',
        '白兰地 Brandy',
        '朗姆 Rum',
        '伏特加 Vodka',
        '利口酒 Liqueur',
        '龙舌兰 Tequila',
      ],
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

<style lang="less" scoped>
.moreWine {
  position: relative;
  .main {
    position: relative;
    display: flex;
    flex-direction: column;
    position: relative;
    background-color: #ffffff;
    width: 80vw;
    font-size: 14px;
    color: black;
    margin: 0 auto;
    padding: 20px 20px 10px 20px;
    .top {
      position: relative;
      display: flex;
      h1 {
        color: #560000;
      }
      img {
        position: absolute;
        right: 20px;
        width: 25px;
      }
    }
    .content {
      .navDiv {
        position: absolute;
        left: 58vw;
      }
      .item {
        display: flex;
        margin-bottom: 20px;
        .left {
          img {
            width: 14vw;
            height: 14vw;
          }
        }
        .right {
          position: relative;
          padding: 0px 20px;
          width: 42vw;
          font-size: 18px;
          line-height: 30px;
          .introduction {
            font-size: 14px;
          }
          .icon {
            position: absolute;
            display: flex;
            width: 100%;
            bottom: 0px;
            .icon1 {
              display: flex;
              margin-right: 40px;
              align-items: center;
              font-size: 14px;
            }
            img {
              width: 30px;
            }
          }
        }
      }
    }
  }
}
</style>
