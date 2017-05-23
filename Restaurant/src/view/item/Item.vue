<template>
	<div>
		<el-tabs v-model="activeName" @tab-click="handleClick" class="order_tab">
		    <el-tab-pane label="菜品管理" name="first">
		    	<iteminfo />
		    </el-tab-pane>
		    <el-tab-pane label="回收站" name="second">
				
		    </el-tab-pane>
		</el-tabs>
    <div class="btn-box">
      <el-button type="primary" icon="plus" size="small">添加菜品</el-button>
      <el-button type="primary" icon="menu" size="small">添加分类</el-button>
    </div>
	</div>
</template>
<script>
import iteminfo from './component/Item_info.vue'
  export default {
  	components: {
  		iteminfo
  	},
    data() {
      return {
        activeName: 'first',
        activeNames: ['1','2','3','4']
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>

<style scoped lang="scss">
  .btn-box {
    position: absolute;
    top: 25px;
    right: 30px;
  }
</style>