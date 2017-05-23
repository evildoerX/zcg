  <template>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="活动"
        width="180">
      </el-table-column>
      <el-table-column
        prop="type"
        label="活动类型"
        width="100">
      </el-table-column>
      <el-table-column
        prop="info"
        label="活动内容">
      </el-table-column>
      <el-table-column
        prop="guize"
        label="生效规则">
      </el-table-column>
      <el-table-column
        prop="date"
        label="有效期"
        width="230">
      </el-table-column>
      <el-table-column width="100" label="操作">
      <template scope="scope">
        <el-button
          type="text"
          size="small"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
      </template>
    </el-table-column>
    </el-table>
  </template>

  <script>
    export default {
      data() {
        return {
          tableData: [{
            name: '店庆满50减10',
            type: '店铺满减',
            info: '满50元减10元',
            guize: '与单品活动不同享',
            date: '2017-05-23 － 2017-05-28'
          }, {
            name: '店庆满30减8',
            type: '店铺满减',
            info: '满30元减8元',
            guize: '与单品活动不同享',
            date: '2017-05-23 － 2017-05-28'
          }, {
            name: '店庆满20减5',
            type: '店铺满减',
            info: '满20元减5元',
            guize: '与单品活动不同享',
            date: '2017-05-23 － 2017-05-28'
          }, {
            name: '店庆满10减2',
            type: '店铺满减',
            info: '满10元减2元',
            guize: '与单品活动不同享',
            date: '2017-05-23 － 2017-05-28'
          }]
        }
      }
    }
  </script>

<style scoped lang="scss">
  
</style>