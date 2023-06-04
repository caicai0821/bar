<template>
  <div class="Ranklist">
    <Head :name="name"></Head>
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
    this.getname()
  },
}
</script>

<style></style>
