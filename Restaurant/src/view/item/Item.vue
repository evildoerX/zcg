<template>
	<div>
		<el-tabs v-model="activeName" @tab-click="handleClick" class="order_tab">
		    <el-tab-pane label="菜品管理" name="first">
		    	<iteminfo />
		    </el-tab-pane>
		    <el-tab-pane label="回收站" name="second">
				
		    </el-tab-pane>
		</el-tabs>
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

</style>