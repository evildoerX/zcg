<template>
	<div>
		<el-tabs v-model="activeName" @tab-click="handleClick">
		    <el-tab-pane label="待审核 [20]" name="second">
		    	<storecheck2 />
		    </el-tab-pane>
		    <el-tab-pane label="审核不通过 [10]" name="third">
		    	<storecheck3 />
		    </el-tab-pane>
		  </el-tabs>
	</div>
</template>

<script>
import storecheck1 from './store_check1.vue'
import storecheck2 from './store_check2.vue'
import storecheck3 from './store_check3.vue'
  export default {
  	components: {
  		storecheck1,
  		storecheck2,
  		storecheck3
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