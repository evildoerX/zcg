<template>
	<div>
		<el-tabs v-model="activeName" @tab-click="handleClick">
		    <el-tab-pane label="待审核 [20]" name="second">
		    	<gyscheck2 />
		    </el-tab-pane>
		    <el-tab-pane label="审核不通过 [10]" name="third">
		    	<gyscheck3 />
		    </el-tab-pane>
		  </el-tabs>
	</div>
</template>

<script>
import gyscheck1 from './gys_check1.vue'
import gyscheck2 from './gys_check2.vue'
import gyscheck3 from './gys_check3.vue'
  export default {
  	components: {
  		gyscheck1,
  		gyscheck2,
  		gyscheck3
  	},
    data() {
      return {
        activeName: 'second'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>

<style scoped>

</style>