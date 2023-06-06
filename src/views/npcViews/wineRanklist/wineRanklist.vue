<template>
  <div class="Ranklist">
    <Head :name="name" :checkindex="'1'"></Head>
    <div class="main">
      <!-- 更多酒品跳转按钮 -->
      <div class="more">
        <router-link to="/moreWine">
          <img src="@/assets/icons/酒杯.png" />更多酒品</router-link
        >
      </div>
      <div class="left">
        <div class="title"><h1>酒品TOP</h1></div>
        <div class="list">
          <ul>
            <li>
              <div
                class="item"
                v-for="(item, index) in wineList"
                :key="index"
                @click="changeWine(item.cname)"
              >
                <div class="number">{{ index + 1 }}</div>
                <div class="img">
                  <img :src="item.img" alt="" />
                </div>
                <div class="description">
                  <div class="cname">
                    <span>{{ item.cname }}</span>
                  </div>
                  <div class="ename">
                    <span>{{ item.ename }}</span>
                  </div>
                  <div class="score">
                    <star :size="15" :is-star="item.score"></star>
                    <span class="pople">{{ item.popleNum }}人评价</span>
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
      <el-divider direction="vertical"></el-divider>
      <div class="right">
        <div class="title">
          <h1>酒厂TOP</h1>
        </div>
        <div class="list">
          <ul>
            <li>
              <div
                class="item"
                v-for="(item, index) in popleList"
                :key="index"
                @click="changePopel(item.pname)"
              >
                <div class="number">{{ index + 1 }}</div>
                <div class="img">
                  <img :src="item.img" alt="" />
                </div>
                <div class="description">
                  <div class="cname">
                    <span>{{ item.pname }}</span>
                  </div>
                  <div class="Japanese">
                    <span>{{ item.Japanese }}</span>
                  </div>
                  <div class="detail">
                    <span>
                      {{ item.introduce }}
                    </span>
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
      wineList: [
        {
          img: require('@/../public/images/6e56a66abca5e45afb0c2d412aa146ad.jpeg'),
          cname: '古典',
          ename: 'OLD FASHIONED',
          score: 5,
          popleNum: 1924,
        },
        {
          img: require('@/../public/images/dae88f0651be41c8fd1f07ddb9dbfe53.jpeg'),
          cname: '尼格罗尼',
          ename: 'NEGRONI',
          score: 5,
          popleNum: 1412,
        },
        {
          img: require('@/../public/images/9b00464760a1ce564a4a29df44a472dd.jpeg'),
          cname: '得其利',
          ename: 'DAIQUIRI',
          score: 4,
          popleNum: 1124,
        },
        {
          img: require('@/../public/images/0087e669cd3eab71d3ee53dbc1ed56e9.jpeg'),
          cname: '干马天尼',
          ename: 'DRY MARTINI',
          score: 4,
          popleNum: 1134,
        },
        {
          img: require('@/../public/images/314e251f95cad1c841bf19c57c3e6709c83d51c8.jpg'),
          cname: '粉红恋人',
          ename: 'Pink Lover',
          score: 4,
          popleNum: 1922,
        },
      ],
      popleList: [
        {
          img: require('@/../public/images/江户川柯南.jpeg'),
          pname: '江户川柯南',
          Japanese: '江戸川コナン',
          introduce:
            '真实身份是高中生侦探工藤新一，人称“平成年代的福尔摩斯”、“日本警察的救世主”。他因为试图跟踪黑衣组织成员而被偷袭，并被灌下代号“APTX4869”的毒药，虽然幸免于死，但身体就此缩小成一年级小学生的模样。之后寻求阿笠博士的帮助，在被青梅竹马的女友毛利兰询问自己名字时，化名为江户川柯南。在阿笠博士的提议下，寄住于小兰的父亲毛利小五郎家中，不仅解决着各种案件，并且还在秘密调查黑衣组织。',
        },
        {
          img: require('@/../public/images/5008864a8ec06c71fb96b6aad12b5220.jpeg'),
          pname: '灰原哀',
          Japanese: '灰原哀',
          introduce:
            '原为黑衣组织的成员雪莉（Sherry），是能使身体缩小的药物——“APTX4869”的发明者。在姐姐宫野明美遭组织杀害后，因反抗组织而被囚禁，服下APTX4869，身体缩小后背叛组织逃亡，化名灰原哀，寄宿于阿笠博士家中，就读于帝丹小学一年B班 。',
        },
        {
          img: require('@/../public/images/毛利兰.jpeg'),
          pname: '毛利兰',
          Japanese: '毛利蘭',
          introduce:
            '就读于帝丹高中二年级B班，校空手道部的主将。父亲是名侦探毛利小五郎，母亲是律政界女王妃英理，青梅竹马兼男友是高中生侦探工藤新一（化名江户川柯南）。被黑衣组织成员贝尔摩得称为“Angel（天使）”。虽曾数次怀疑江户川柯南的身份，但还不知道江户川柯南的真实身份就是工藤新一。',
        },
        {
          img: require('@/../public/images/毛利小五郎.jpeg'),
          pname: '毛利小五郎',
          Japanese: 'もうりこごろう',
          introduce:
            '毛利兰的父亲，与妻子妃英理在十年前就已分居，平时和女儿住在一起，后来柯南寄居在他家中，三人一起生活。他以前是一名优秀的刑警，和目暮警官是同事，后来因为一起事件而辞职，成为一名私家侦探，偶尔也会兼职做保镖。枪法精准，柔道也是一流，擅长过肩摔。本来是个糊涂侦探，却因为经常以睡姿推理案情，屡破奇案，因此在业界享有“沉睡的小五郎”的美誉，为此也经常受到推理迷的邀请参加各种活动或参观自宅。但实际上，他只是被柯南麻醉，借用声音说出真相，完全不记得过程，但仍对自己的推理能力深信不疑，认为自己有“双重人格”。',
        },
        {
          img: require('@/../public/images/阿笠博士.jpeg'),
          pname: '阿笠博士',
          Japanese: '阿笠博士',
          introduce:
            ' 新一的邻居，发明家。和工藤优作是好友。曾经有过不少发明，不过大多数是失败作品。新一变小成为柯南后，为了帮助柯南而发明了很多有用的道具。',
        },
      ],
    }
  },
  methods: {
    // 获取登录名
    getname() {
      this.name = DBUser.getCurrUser().username
    },
    // 跳转酒配方页
    changeWine(name) {
      if (name === '粉红恋人') {
        this.$router.push('/WineIntroduction')
      } else {
        this.$message({
          type: 'warning',
          message: '暂无配方哦~',
        })
      }
    },
    // 跳转酒厂人物页
    changePopel(name) {
      if (name === '江户川柯南') {
        this.$router.push('/characterInfo')
      } else {
        this.$message({
          type: 'warning',
          message: '暂无该人物介绍哦~',
        })
      }
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
    // <!-- 更多酒品跳转按钮 -->
    .more {
      position: absolute;
      top: 5px;
      right: 30px;
      display: flex;
      a {
        color: #560000;
      }
      img {
        width: 25px;
      }
    }
    .left {
      flex: 1;
      .title {
        margin-bottom: 20px;
        text-align: center;
      }
    }
    .el-divider--vertical {
      height: 830px; //更改竖向分割线长度
      border-left: 2px dashed #bbb;
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
      margin-right: 20px;
      font-size: 60px;
      font-family: STLiti;
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
      .detail {
        height: 40px;
        span {
          display: -webkit-box;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-line-clamp: 2; // 控制多行的行数
          -webkit-box-orient: vertical;
        }
      }
    }
  }
  .item :nth-child(5) {
    margin-bottom: 0px;
  }
}
</style>
