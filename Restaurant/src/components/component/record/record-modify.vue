<template>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      label="门店名称"
      width="180">
      <template scope="scope">
        <span style="margin-left: 10px">{{ scope.row.m_name }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="申请id"
      width="100">
      <template scope="scope">
        <span style="margin-left: 10px">{{ scope.row.id }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="联系人"
      width="100">
      <template scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>姓名: {{ scope.row.name }}</p>
          <p>门店地址: {{ scope.row.address }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag>{{ scope.row.name }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column
      label="联系方式"
      width="200">
      <template scope="scope">
        <span style="margin-left: 10px">{{ scope.row.phone }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="状态"
      width="100">
      <template scope="scope">
        <span style="margin-left: 10px">{{ scope.row.stat }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="日期"
      width="200">
      <template scope="scope">
        <el-icon name="time"></el-icon>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>
    <el-table-column 
      label="操作"
      >
      <template scope="scope">
        <el-button
          size="small"
          type="text"
          @click="handleEdit(scope.$index, scope.row)">去修改</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          m_name: '茶壶店',
          id: '10468',
          name: '程浩',
          phone: '18651908626',
          stat: '已通过',
          date: '2017-05-19 10:58:42',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          m_name: '茶壶店',
          id: '10468',
          name: '程浩',
          phone: '18651908626',
          stat: '已通过',
          date: '2017-05-19 10:58:42',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          m_name: '茶壶店',
          id: '10468',
          name: '程浩',
          phone: '18651908626',
          stat: '已通过',
          date: '2017-05-19 10:58:42',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          m_name: '茶壶店',
          id: '10468',
          name: '程浩',
          phone: '18651908626',
          stat: '已通过',
          date: '2017-05-19 10:58:42',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    }
  }
</script>

<style scoped lang="scss">
  .record {
    background-color: #ebeef2;
  }
  .header {
      width: 100%;
      height: 60px;
      line-height: 60px;
      background: #0091ea;
      color: #fff;
      .content{
        width: 1000px;
        margin: auto;
        .txt {
          color: #fff;
          font-size: 20px;
          font-weight: 700;
        }
        .userinfo {
        padding-right: 35px;
        .userinfo-inner {
            color: #fff;
            cursor: pointer;
          }
          .logo {
            font-size: 22px;
            
          }
        }
      }
    }
    .breadcrumb{
      width: 1000px;
      margin: auto;
      margin-top: 35px;
      margin-bottom: 10px;
      padding: 0;
    }
    .content {
      width: 1000px;
      margin: auto;
      .box-card {
        height: 400px;
        position:relative;
        .sqkd {
          position:absolute;
          right:20px;
        }
      }
    }
</style>