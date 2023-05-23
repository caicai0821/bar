<!--
 * @Author       : 蔡诗涵
 * @Date         : 2023-05-10 16:14:51
 * @LastEditTime : 2023-05-23 17:11:44
 * @Description  :
 *
-->
<template>
  <div style="background-color: #ececec">
    <div
      class="black_breakgroud"
      v-if="flag"
      @touchmove.prevent
      @mousewheel.prevent
    >
      <wineListPopups v-if="isUp" @closePopup="closePopup"></wineListPopups>
    </div>
    <Head></Head>
    <div class="body">
      <div class="top">
        <div class="main">
          <div class="title">
            <h2>
              {{ cName }}&nbsp;&nbsp;&nbsp;&nbsp;{{
                eName
              }}&nbsp;&nbsp;&nbsp;&nbsp;{{ year }}
            </h2>
          </div>
          <div class="content">
            <div class="left">
              <div class="img">
                <img
                  src="@/../public/images/314e251f95cad1c841bf19c57c3e6709c83d51c8.jpg"
                  alt=""
                />
              </div>
              <div class="description">
                <ul>
                  <li>
                    <img src="@/assets/icons/Meal.png" alt="" />口感<span>
                      {{ descriptionList2.taste }}
                    </span>
                  </li>
                  <li>
                    <img
                      src="@/assets/icons/Clear (1).png"
                      alt=""
                    />饮用时间<span> {{ descriptionList2.drink_time }}</span>
                  </li>
                  <li>
                    <img src="@/assets/icons/Beer.png" alt="" />酒精度<span>
                      {{ descriptionList2.alcoholic_strength }}</span
                    >
                  </li>
                  <li>
                    <img src="@/assets/icons/认知.png" alt="" />调制技巧<span>
                      {{ descriptionList2.skill }}</span
                    >
                  </li>
                  <li>
                    <img src="@/assets/icons/会员.png" alt="" />调制难度<span>
                      <star
                        :size="15"
                        :IsStar="this.descriptionList2.difficulty"
                      ></star
                    ></span>
                  </li>
                  <li>介绍:&nbsp;&nbsp;{{ descriptionList2.description }}</li>
                </ul>
              </div>
            </div>
            <div class="middle">
              <div class="score">
                <span>8.0</span>
                <div class="starDiv">
                  <star :IsStar="this.descriptionList2.difficulty"></star>
                  <div class="scoreDiv"><span>14</span>人评分</div>
                </div>
              </div>
              <div>
                <Statistical :list="list"></Statistical>
              </div>
              <div class="btnDiv">
                <upvoteBtnVue></upvoteBtnVue>
                <collectBtnVue></collectBtnVue>
                <addWineListBtn @getUp="getUp"></addWineListBtn>
                <shareBtn></shareBtn>
              </div>
            </div>
          </div>
          <div class="needItemDiv">
            <div class="title">
              <img src="@/assets/icons/商务 (1).png" alt="" />
              <span>所需物品</span>
            </div>
            <div class="items">
              <div class="item" v-for="(item, index) in itemsList" :key="index">
                <img :src="item.img" alt="" />
                {{ item.name }}
              </div>
            </div>
          </div>
          <div class="formulaDiv">
            <div class="title">
              <img src="@/assets/icons/订单.png" alt="" />
              <span>美酒配方</span>
            </div>
            <div class="formula">
              <ul>
                <li v-for="(item, index) in formulaList" :key="index">
                  {{ index + 1 }} . {{ item }}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="right">
          <span class="text">也许你还喜欢</span>
          <div
            class="wineLike"
            v-for="(item, index) in wineLikeList"
            :key="index"
          >
            <div class="img">
              <img
                src="@/../public/images/314e251f95cad1c841bf19c57c3e6709c83d51c8.jpg"
                alt=""
              />
            </div>
            <div class="content">
              <div class="cname">{{ item.cname }}</div>
              <div class="ename">{{ item.ename }}</div>
              <div class="score">
                <star :size="15" :IsStar="Math.floor(item.score / 2.0)"></star
                >&nbsp;&nbsp;&nbsp;{{ item.score }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="title">
          <div>
            <img src="@/assets/icons/用户.png" alt="" />
            <span>用户评论</span>
          </div>
          <div class="commentBtn">
            <button class="btn">我来说两句</button>
          </div>
        </div>
        <div class="content">
          <comment :userList="userList"></comment>
        </div>
      </div>
    </div>
    <Tail></Tail>
  </div>
</template>

<script>
import Head from '@/components/common/head.vue'
import Tail from '@/components/common/tail.vue'
import Star from '@/components/WineFormula/star.vue'
import Statistical from '@/components/WineFormula/statistical.vue'
import addWineListBtn from '@/components/WineFormula/addWineListBtn.vue'
import collectBtnVue from '@/components/WineFormula/collectBtn.vue'
import shareBtn from '@/components/WineFormula/shareBtn.vue'
import upvoteBtnVue from '@/components/WineFormula/upvoteBtn.vue'
import wineListPopups from '@/components/WineFormula/wineListPopups.vue'
import comment from '@/components/common/comment.vue'
export default {
  components: {
    Head,
    Tail,
    Star,
    Statistical,
    addWineListBtn,
    collectBtnVue,
    shareBtn,
    upvoteBtnVue,
    wineListPopups,
    comment,
  },
  data() {
    return {
      cName: '粉红恋人',
      eName: 'Pink Lover',
      year: '1912',
      descriptionList: ['口感', '饮用时间', '酒精度', '调制技巧', '调制难度'],
      descriptionList2: {
        taste: '微甜，微辣',
        drink_time: '餐前短饮',
        alcoholic_strength: '37',
        skill: '摇晃充分',
        difficulty: 4,
        description:
          '红粉佳人（Pink lady）这款鸡尾酒这款酒在最初的时候是用干金，鸡蛋清和红石榴糖浆调制的，会多加一些牛奶或者淡奶油。鸡尾酒中粉色正是浪漫爱情的象征。寓意可以为美丽的女士们带来爱情。',
      },
      wineLikeList: [
        {
          cname: '酒的名字',
          ename: 'English',
          score: '2.9',
        },
        {
          cname: '酒的名字',
          ename: 'English',
          score: '2.9',
        },
        {
          cname: '酒的名字',
          ename: 'English',
          score: '2.9',
        },
        {
          cname: '酒的名字',
          ename: 'English',
          score: '2.9',
        },
        {
          cname: '酒的名字',
          ename: 'English',
          score: '2.9',
        },
      ],
      itemsList: [
        {
          img: require('@/../public/images/8aacf11da5a9d31d40e739dec2980691.jpeg'),
          name: '金酒',
        },
        {
          img: require('@/../public/images/8aacf11da5a9d31d40e739dec2980691.jpeg'),
          name: '石榴糖浆',
        },
        {
          img: require('@/../public/images/8aacf11da5a9d31d40e739dec2980691.jpeg'),
          name: '牛奶',
        },
        {
          img: require('@/../public/images/8aacf11da5a9d31d40e739dec2980691.jpeg'),
          name: '蛋清',
        },
        {
          img: require('@/../public/images/8aacf11da5a9d31d40e739dec2980691.jpeg'),
          name: '冰块',
        },
      ],
      formulaList: [
        '洗净双手并擦干;',
        '在鸡尾酒杯中加入冰块，进行冰杯；',
        '将调酒器分三段放于操作台面上；',
        '取适量冰块（方冰4～6块）放入调酒器底杯内；',
        '将公杯里的蛋白（1个鸡蛋的量）倒入调酒器底杯内；',
        '量入柠檬汁和红石榴糖浆；',
        '用量酒杯量入金酒1盎司，倒人调酒器底杯内；',
        '盖好滤冰网兼盖子和小盖子，用单手摇或双手摇的方法摇混均匀至外部结霜即可；',
        '将鸡尾酒杯里的冰块倒掉，滤入鸡尾酒；',
        '用吧匙将红樱桃取出，用刀在其底部划一口子，置于鸡尾酒杯上；',
        '将调制好的鸡尾酒置于杯垫上； 12.清理工作台。',
      ],
      list: {
        five: 5,
        four: 4,
        three: 3,
        two: 2,
        one: 1,
      },
      isUp: '',
      flag: false,
      // 评论数据
      userList: {
        userImg: require('@/../public/images/bb6e6077d0b12d623c5f0172d35975b4.jpeg'),
        UserName: 'caicai',
        content:
          ' “Like all forms of design, visual design is about problem-solving, not about personal preference or unsupported opinion.” — Bob Baxley /n “像其他设计一样，视觉设计也是解决问题，不是个人喜好。” “Like all forms of design, visual design is about problem-solving, not about personal preference or unsupported opinion.” — Bob Baxley “像其他设计一样，视觉设计也是解决问题，不是个人喜好。”',
        replayTime: '2023-05-22',
        isUp: false,
        score: 9,
        isNew: false,
        contentList: [
          {
            toId: '1',
            userImg: require('@/../public/images/bb6e6077d0b12d623c5f0172d35975b4.jpeg'),
            UserName: '小张小张',
            content: '111111',
            replayTime: '2023-05-22',
            isUp: false,
            isNew: false,
          },
        ],
      },
      // 统计图数据
    }
  },
  created() {},
  mounted() {},
  methods: {
    getUp(x) {
      this.isUp = x
      this.flag = true
    },
    closePopup(x) {
      this.isUp = x
      this.flag = false
    },
  },
}
</script>

<style lang="less" scoped>
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
  padding: 10px 20px;
  .top {
    display: flex;
    position: relative;
    .main {
      position: relative;
      .title {
        margin-bottom: 10px;
      }
      .content {
        display: flex;
        justify-content: space-between;
        width: 60vw;
        .left {
          display: flex;
          justify-content: space-between;
          width: 40vw;
          height: 340px;
          .img {
            width: 255px;
            height: 340px;
            img {
              width: 255px;
              height: 340px;
              object-fit: cover;
              object-position: 50% 20%;
            }
          }
          .description {
            padding: 0px 10px;
            width: 345px;
            height: 340px;
            li {
              vertical-align: middle;
              display: flex;
              margin-bottom: 20px;
              span {
                margin-left: 10px;
                text-align: center;
                color: #f86d1d;
              }
            }
            img {
              width: 25px;
              height: 25px;
            }
          }
        }
        .middle {
          min-width: 230px;
          height: 340px;
          // background-color: #7a7070;
          .score {
            display: flex;
            font-size: 48px;
            .starDiv {
              padding-top: 10px;
              .scoreDiv {
                margin-top: 5px;
                padding-left: 10px;
                font-size: 12px;
                color: #bbbbbb;
              }
            }
          }
          .btnDiv {
            display: flex;
            flex-wrap: wrap;
          }
        }
      }
      .needItemDiv {
        display: flex;
        flex-direction: column;
        margin: 10px 0px;
        width: 100%;
        .title {
          display: flex;
          align-items: center;
          img {
            width: 47px;
            height: 47px;
            vertical-align: middle;
          }
          span {
            text-align: center;
            font-weight: 700;
            font-size: 19px;
          }
        }
        .items {
          display: flex;
          flex-wrap: wrap;
          // justify-content: space-around;
          .item {
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 130px;
            width: 110px;
            margin: 0px 30px 10px 10px;
            img {
              width: 100px;
              height: 100px;
              margin-bottom: 10px;
            }
          }
        }
      }
      .formulaDiv {
        margin: 10px 0px;
        width: 100%;
        .title {
          display: flex;
          align-items: center;
          img {
            width: 47px;
            height: 47px;
            vertical-align: middle;
          }
          span {
            text-align: center;
            font-weight: 700;
            font-size: 19px;
          }
        }
        .formula {
          padding: 0px 20px;
          ul {
            li {
              display: block;
              margin-bottom: 5px;
            }
          }
        }
      }
    }
    .right {
      position: relative;
      display: flex;
      flex-direction: column;
      padding: 10px;
      margin: 0px 10px;
      width: 400px;
      min-height: 100px;
      max-height: 590px;
      border: 1px solid #bbbbbb;
      .text {
        margin-bottom: 10px;
      }
      .wineLike {
        display: flex;
        margin: 10px 0px;
        .img {
          max-height: 90px;
          max-width: 90px;
          min-height: 50px;
          min-width: 50px;

          img {
            height: 90px;
            width: 90px;
          }
        }
        .content {
          display: flex;
          flex-direction: column;
          margin: 0px 10px;
          .score {
            display: flex;
          }
        }
      }
    }
  }
  .bottom {
    width: 100%;

    .title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0px 10px;
      img {
        width: 40px;
        height: 40px;
        vertical-align: middle;
        margin-right: 10px;
      }
      span {
        text-align: center;
        font-weight: 700;
        font-size: 19px;
      }
      .commentBtn {
        .btn {
          width: 122px;
          height: 47px;
          margin-right: 10px;
          font-size: 20px;
          border: 1px solid #000000;
          border-radius: 10px;
          background-color: #fff;
        }
        .btn:hover {
          color: #5194d8;
          border: 1px solid #5194d8;
        }
      }
    }
    .content {
      position: relative;
      display: block;
      width: 80vw;
      background-color: #fff;
    }
  }
}
</style>
