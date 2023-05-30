<!--
 * @Author       : 蔡诗涵
 * @Date         : 2023-05-30 13:48:36
 * @LastEditTime : 2023-05-30 16:36:03
 * @Description  : 种类管理（表格）管理端页面
 *
-->
<template>
    <div ref="table" class="wineType">
      <el-table
      :max-height="height"
    :data="tableData"
    @current-change="handleCurrentChange"
    border
    style="width: 100%">
    <el-table-column
      type="index">
    </el-table-column>
    <el-table-column
      prop="id"
      label="id">
    </el-table-column>
    <el-table-column
      prop="img"
      label="图片">
    </el-table-column>
    <el-table-column
      prop="cname"
      label="中文名">
    </el-table-column>
    <el-table-column
      prop="ename"
      label="英文名">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作">
      <template>
        <el-button @click="deletewineType" type="text" size="small">删除</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
  <div class="pagination">
    <el-pagination
    background
    layout="prev, pager, next"
    :total="10">
  </el-pagination>
  </div>
    </div>
  </template>

<script>
export default {
  methods: {
    handleClick(row) {
      console.log(row)
    },
    handleCurrentChange(val) {
      this.currentRow = val
    },
    // 获取el-main窗口大小
    getWidth() {
      return (window.innerWidth - 240) + 'px'
    },
    getHeight() {
      return (window.innerHeight - 130) + 'px'
    },
    // 删除
    deletewineType() {
      console.log('我被删除啦')
    }
  },

  data() {
    return {
      height: '',
      currentRow: null,
      tableData: [
        {
          id: '201',
          img: require('@/../public/images/8aacf11da5a9d31d40e739dec2980691.jpeg'),
          cname: '上海',
          ename: '普陀区',
        },
        {
          id: '201',
          img: require('@/../public/images/8aacf11da5a9d31d40e739dec2980691.jpeg'),
          cname: '上海',
          ename: '普陀区',
        },
        {
          id: '201',
          img: require('@/../public/images/8aacf11da5a9d31d40e739dec2980691.jpeg'),
          cname: '上海',
          ename: '普陀区',
        },
        {
          id: '201',
          img: require('@/../public/images/8aacf11da5a9d31d40e739dec2980691.jpeg'),
          cname: '上海',
          ename: '普陀区',
        },
        {
          id: '201',
          img: require('@/../public/images/8aacf11da5a9d31d40e739dec2980691.jpeg'),
          cname: '上海',
          ename: '普陀区',
        },
        {
          id: '201',
          img: require('@/../public/images/8aacf11da5a9d31d40e739dec2980691.jpeg'),
          cname: '上海',
          ename: '普陀区',
        },
        {
          id: '201',
          img: require('@/../public/images/8aacf11da5a9d31d40e739dec2980691.jpeg'),
          cname: '上海',
          ename: '普陀区',
        },
        {
          id: '201',
          img: require('@/../public/images/8aacf11da5a9d31d40e739dec2980691.jpeg'),
          cname: '上海',
          ename: '普陀区',
        },
        {
          id: '201',
          img: require('@/../public/images/8aacf11da5a9d31d40e739dec2980691.jpeg'),
          cname: '上海',
          ename: '普陀区',
        },
        {
          id: '201',
          img: require('@/../public/images/8aacf11da5a9d31d40e739dec2980691.jpeg'),
          cname: '上海',
          ename: '普陀区',
        },
      ]
    }
  },
  created() {
    this.height = this.getHeight()
  },
}
</script>

<style lang="less" scoped>
.wineType{
  .pagination{
    margin-top: 10px;
  }
}
</style>
