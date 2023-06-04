<template>
  <div class="Ranklist">
    <Head :name="name" :checkindex="'1'"></Head>
    <h1>这是排行榜</h1>
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

<style></style>
