<template>
  <div class="characterInfo">
    <Head :name="name"></Head>
    <div class="main">
      <div class="top">
        <div class="left">
          <img :src="popleList.img" alt="" />
        </div>
        <div class="right">
          <div class="name">
            <div class="cname">{{ popleList.pname }}</div>
            <div class="Jname">{{ popleList.Japanese }}</div>
          </div>
          <div class="list">
            <ul>
              <li><span>性别：</span>{{ popleList.sex }}</li>
              <li><span>技能</span>：{{ popleList.skill }}</li>
              <li><span>简介</span>：{{ popleList.introduce }}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="left">
          <h2>代号</h2>
        </div>
        <div class="img">
          <img :src="wineList.img" alt="" />
        </div>
        <div class="right">
          <div class="title">
            <h3>{{ wineList.title }}</h3>
          </div>
          <div class="content">
            {{ wineList.introduce }}
          </div>
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
export default {
  components: {
    Head,
    Tail,
  },
  data() {
    return {
      name: '',
      popleList: {
        img: require('@/../public/images/江户川柯南.jpeg'),
        pname: '江户川柯南',
        Japanese: '江戸川コナン',
        sex: '男',
        skill: '核爆足球  主角光环  死神buff  ',
        introduce:
          '真实身份是高中生侦探工藤新一，人称“平成年代的福尔摩斯”、“日本警察的救世主”。他因为试图跟踪黑衣组织成员而被偷袭，并被灌下代号“APTX4869”的毒药，虽然幸免于死，但身体就此缩小成一年级小学生的模样。之后寻求阿笠博士的帮助，在被青梅竹马的女友毛利兰询问自己名字时，化名为江户川柯南。在阿笠博士的提议下，寄住于小兰的父亲毛利小五郎家中，不仅解决着各种案件，并且还在秘密调查黑衣组织。',
      },
      wineList: {
        img: require('@/../public/images/34fae6cd7b899e510fb365ff20f1ce33c895d043a798.png'),
        title: '老白干',
        introduce:
          '老白干始于汉代(公元104年)，知名于唐代，正式定名于明代。衡水老白干自古享有盛名。明代、衡水酒有“飞芳千家醉，开坛十里香”之誉。 [7]  据传，明嘉靖年间建造衡水木桥时，城内有家“德源涌”酒店，很有名望，建桥工匠常到此聚饮，饮后赞曰：“真洁，好干！”后取名：“老白干”。所谓“老”，是指历史悠久；“白”，是指酒质清澈；“干”，是指酒度高，达67度。其味“闻着清香，入口甜香，饮后余香”。',
      },
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
.characterInfo {
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
    padding: 30px 20px 10px 20px;
    .top {
      display: flex;
      margin-bottom: 30px;
      .left {
        width: 28vw;
        img {
          width: 28vw;
        }
      }
      .right {
        display: flex;
        flex-direction: column;
        padding-left: 20px;
        width: 48vw;
        .name {
          display: flex;
          justify-content: space-around;
          font-size: 40px;
          margin-bottom: 20px;
          .Jname {
            color: #bbb;
          }
        }
        .list {
          font-size: 16px;
          line-height: 50px;
          li:nth-child(3) {
            line-height: 30px;
          }
          span {
            font-weight: 700;
          }
        }
      }
    }
    .bottom {
      display: flex;
      justify-content: space-around;
      .left {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 10vw;
      }
      .img {
        width: 13vw;
        background-color: #1f7e32;
        img {
          width: 13vw;
        }
      }
      .right {
        width: 48vw;
        padding-left: 20px;
        .title {
          margin-bottom: 10px;
        }
      }
    }
  }
}
</style>
