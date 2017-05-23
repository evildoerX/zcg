<template>
	<div class="order_new">
		<el-row :gutter="20">
		    		<el-col :span="16">
		    			<ordercheck />
		    		</el-col>
		    		<el-col :span="8" style="padding: 10px;">
		    			<el-card class="box-card" style="margin-right: 10px;">
						  <div slot="header" class="clearfix">
						    <span style="line-height: 36px;">今日营业总额</span>
						    <!-- <el-button style="float: right;" type="primary">操作按钮</el-button> -->
						  </div>
						  <div class="textitem">
						    <div >
						    	订单量：29 单
						    </div>
						    <div >
						    	营业额：600 元
						    </div>
						  </div>
						</el-card>
		    		</el-col>
		    	</el-row>
	</div>
</template>
<script>
import ordercheck from './component/order_check.vue'
  export default {
  	components: {
  		ordercheck
  	},
    data() {
      return {
        activeNames: ['1','2','3','4','5','6','7'],
        form: {
        	resource: '60分钟内需送达预订单',
        	resource1: '全部',
        	resource2: '全部',
        	resource3: '下单时间  '
        }
      };
    },
    methods: {
      handleClick(tab, event) {
		console.log(tab, event);
		},
		handleChange(tab, event) {
		console.log(tab, event);
		}
    }
  };
</script>

<style scoped lang="scss">

</style>