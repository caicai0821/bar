<template>
  <div class="statistical">
    <div class="statisticalDiv">
      <span>5星</span>
      <div class="base" :style="{ width: getSize(getMax(), list.five) }"></div>
      <span class="characters">{{ list.five }}</span>
    </div>
    <div class="statisticalDiv">
      <span>4星</span>
      <div class="base" :style="{ width: getSize(getMax(), list.four) }"></div>
      <span class="characters">{{ list.four }}</span>
    </div>
    <div class="statisticalDiv">
      <span>3星</span>
      <div class="base" :style="{ width: getSize(getMax(), list.three) }"></div>
      <span class="characters">{{ list.three }}</span>
    </div>
    <div class="statisticalDiv">
      <span>2星</span>
      <div class="base" :style="{ width: getSize(getMax(), list.two) }"></div>
      <span class="characters">{{ list.two }}</span>
    </div>
    <div class="statisticalDiv">
      <span>1星</span>
      <div class="base" :style="{ width: getSize(getMax(), list.one) }"></div>
      <span class="characters">{{ list.one }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyStatistical',
  props: ['list', 'total'],
  data() {
    return {
      //   total: 15,
      //   list: {
      //     five: 5,
      //     four: 4,
      //     three: 3,
      //     two: 2,
      //     one: 1,
      //   },
    }
  },
  methods: {
    getMax() {
      const max = Math.max.apply(null, Object.values(this.list))
      console.log(max)
      return max
    },
    getSize(max, n) {
      const x = 200 / max
      console.log(x * n)
      return x * n + 'px'
    },
  },
  created() {
    // this.getMax()
  },
}
</script>

<style lang="less" scoped>
.statistical {
  .statisticalDiv {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    font-weight: 500;
    color: #000;
    .base {
      margin: 3px 10px;
      width: 200px;
      height: 20px;
      background-color: #f86d1d;
    }
    .characters {
      color: #f86d1d;
    }
  }
}
</style>
