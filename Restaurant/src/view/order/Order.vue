<template>
	<div>
		<el-tabs v-model="activeName" @tab-click="handleClick" class="order_tab">
		    <el-tab-pane label="新订单" name="first" class="order_pane">
		    	<el-row :gutter="20">
		    		<el-col :span="16">
		    			<ordernew />
		    		</el-col>
		    		<el-col :span="8">
		    			<el-card class="box-card">
						  <div slot="header" class="clearfix">
						    <span style="line-height: 36px;">今日营业总额</span>
						    <!-- <el-button style="float: right;" type="primary">操作按钮</el-button> -->
						  </div>
						  <div class="textitem">
						    <div >
						    	订单量：25 单
						    </div>
						    <div >
						    	营业额：600 元
						    </div>
						  </div>
						</el-card>
		    		</el-col>
		    	</el-row>
		    </el-tab-pane>
		    <el-tab-pane label="预订单" name="second">配置管理</el-tab-pane>
		    <el-tab-pane label="配送异常" name="third">角色管理</el-tab-pane>
		    <el-tab-pane label="催单" name="four">定时任务补偿</el-tab-pane>
		    <el-tab-pane label="退单" name="five">定时任务补偿</el-tab-pane>
		    <el-tab-pane label="取消单" name="six">定时任务补偿</el-tab-pane>
		</el-tabs>
	</div>
</template>
<script>
import ordernew from './component/order_new.vue'
  export default {
  	components: {
  		ordernew
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

<style scoped>
	.order_list {
		position: relative;
		
	}
	.tip {
		position: absolute;
		top:10px;
		right: 10px;
	}
	.user_info {
		border-bottom: 1px solid #dfe6ec;
	}
	.order_stat {
		border-bottom: 1px solid #dfe6ec;
	}
	.order_item {
		border-bottom: 1px solid #dfe6ec;
	}
	.order_totle {
		border-bottom: 1px solid #dfe6ec;
	}
	.order_totle .title {
		font-size: 18px;
		font-weight: 500;
	}
	.order_totle .money {
		float: right;
		font-size: 18px;
		font-weight: 500;
	}
	.order_totle .money em {
		color:red;
	}
	.order_footer {
		position: relative;
	}
	.order_footer .order_btn {
		position: absolute;
		top: 20px;
		right: 20px;
	}
</style>