<template>
  <div>
    <el-row :gutter="10" class="item">
      <el-col :span="3" >
        <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" >
          <el-menu-item index="1">一品奶茶</el-menu-item>
          <el-menu-item index="2">木夕奶茶</el-menu-item>
          <el-menu-item index="3">咖啡奶茶</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="21">
        <itemdata />
      </el-col>
    </el-row>
	</div>
</template>
<script>
import itemdata from './item_data.vue'
  export default {
  	components: {
      itemdata
  	},
    data() {
      return {
        activeName: 'first',
        activeNames: ['1','2','3','4']
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>

<style scoped lang="scss">
  .item {
    padding: 10px;
    .el-menu-vertical-demo{
      height: 768px;
    }
  }

</style>