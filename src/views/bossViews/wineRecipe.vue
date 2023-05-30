<template>
    <div class="recipe">
      <el-table :data="list" style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand" v-for="item, index in props.row.data.requiredDto.productList" :key="index">
          <el-form-item :label="'配方酒'+(index+1)">
            <span>{{ props.row.data.requiredDto.productList[index].cname }}</span>
          </el-form-item>
          <el-form-item label="英文名">
            <span>{{ props.row.data.requiredDto.productList[index].ename }}</span>
          </el-form-item>
          <el-form-item label="酒的描述">
            <span>{{ props.row.data.requiredDto.productList[index].description }}</span>
          </el-form-item>
          <el-form-item label="图片">
            <span>{{ props.row.data.requiredDto.productList[index].productImg }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="ID"
      prop="data.id">
    </el-table-column>
    <el-table-column
      label="图片"
      prop="data.img">
    </el-table-column>
    <el-table-column
      label="中文名"
      prop="data.cname">
    </el-table-column>
    <el-table-column
      label="英文名"
      prop="data.ename">
    </el-table-column>
    <el-table-column
      label="鸡尾酒描述"
      prop="data.cocktailDesc">
    </el-table-column>
    <el-table-column
      label="创建时间"
      prop="data.createTime">
    </el-table-column>
    <el-table-column
      label="更新时间"
      prop="data.updateTime">
    </el-table-column>
    <el-table-column
      label="创建人"
      prop="data.createUser">
    </el-table-column>
    <el-table-column
      label="更新人"
      prop="data.updateUser">
    </el-table-column>
  </el-table>
    </div>
  </template>
<script>
export default {
  methods: {
    // 获取列表
    getList() {
      this.$axios.get('http://localhost:8089/select/wine').then(function (response) {
        console.log(response)
      }).catch(function (error) {
        console.log(error)
      })
    }
  },
  created() {
    this.getList()
  },
  data() {
    return {
      list: [{
        data: {
          id: 1,
          img: 'img',
          cocktailDesc: '纪念亚历山大的婚礼',
          typeDto: {
            taste: '中味',
            skill: '兑和',
            reference_time: '餐后',
            difficulty: '容易',
            alcoholic: '35'
          },
          requiredDto: {
            productList: [
              {
                id: 1,
                description: '白兰地，，，',
                productImg: 'Img',
                categoryId: 2,
                productLink: 'Link',
                createTime: '2023-05-30 15:03:38',
                updateTime: '2023-05-30 15:03:38',
                ename: 'Brandy',
                cname: '白兰地'
              },
              {
                id: 2,
                description: '杯子，，，',
                productImg: 'Img',
                categoryId: 8,
                productLink: 'Link',
                createTime: '2023-05-30 15:03:38',
                updateTime: '2023-05-30 15:03:38',
                ename: 'Martini Glass',
                cname: '鸡尾酒杯'
              }
            ],
            name: '白兰地'
          },
          step: {
            1: '加入冰块',
            2: '加入白兰地'
          },
          createTime: '2023-05-30 15:03:38',
          updateTime: '2023-05-30 15:03:38',
          createUser: 'root',
          updateUser: 'root',
          ename: 'Alexander',
          cname: '亚历山大'
        },
      }]
    }
  }
}
</script>

  <style lang="less" scoped>
  .recipe{
    .demo-table-expand {
    padding:0 20px;
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
  }
  </style>
