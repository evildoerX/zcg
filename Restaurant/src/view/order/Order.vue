<template>
	<div>
		<el-tabs v-model="activeName" @tab-click="handleClick" class="order_tab">
		    <el-tab-pane label="新订单 [7]" name="first" class="order_pane" >
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
						    	订单量：29 单
						    </div>
						    <div >
						    	营业额：600 元
						    </div>
						  </div>
						</el-card>
		    		</el-col>
		    	</el-row>
		    </el-tab-pane>
		    <el-tab-pane label="预订单 [3]" name="second">
				<el-row :gutter="20">
		    		<el-col :span="16">
		    			<orderyuding />
		    		</el-col>
		    		<el-col :span="8">
		    			<el-card class="box-card">
						  <div slot="header" class="clearfix">
						    <span style="line-height: 36px;">今日营业总额</span>
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
		    </el-tab-pane>
		    <el-tab-pane label="配送异常 [1]" name="third">
		    	<el-row :gutter="20">
		    		<el-col :span="16">
		    			<orderpeisong />
		    		</el-col>
		    		<el-col :span="8">
		    			<el-card class="box-card">
						  <div slot="header" class="clearfix">
						    <span style="line-height: 36px;">今日营业总额</span>
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
		    </el-tab-pane>
		    <el-tab-pane label="催单 [1]" name="four">
		    	<el-row :gutter="20">
		    		<el-col :span="16">
		    			<ordercuidan />
		    		</el-col>
		    		<el-col :span="8">
		    			<el-card class="box-card">
						  <div slot="header" class="clearfix">
						    <span style="line-height: 36px;">今日营业总额</span>
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
		    </el-tab-pane>
		    <el-tab-pane label="退单 [1]" name="five">
		    	<el-row :gutter="20">
		    		<el-col :span="16">
		    			<ordertuidan />
		    		</el-col>
		    		<el-col :span="8">
		    			<el-card class="box-card">
						  <div slot="header" class="clearfix">
						    <span style="line-height: 36px;">今日营业总额</span>
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
		    </el-tab-pane>
		    <el-tab-pane label="已完成 [15]" name="six">
		    	<el-row :gutter="20">
		    		<el-col :span="16">
		    			<orderwancheng />
		    		</el-col>
		    		<el-col :span="8">
		    			<el-card class="box-card">
						  <div slot="header" class="clearfix">
						    <span style="line-height: 36px;">今日营业总额</span>
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
		    </el-tab-pane>
		</el-tabs>
	</div>
</template>
<script>
import ordernew from './component/order_new.vue'
import ordercuidan from './component/order_cuidan.vue'
import orderpeisong from './component/order_peisong.vue'
import orderquxiaodan from './component/order_quxiaodan.vue'
import ordertuidan from './component/order_tuidan.vue'
import orderyuding from './component/order_yuding.vue'
import orderwancheng from './component/order_wancheng.vue'
  export default {
  	components: {
  		ordernew,
  		ordercuidan,
  		orderpeisong,
  		orderquxiaodan,
  		ordertuidan,
  		orderyuding,
  		orderwancheng
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
	.order_tab {
		.order_pane {
			z-index: 998;
			position: relative;
			.mark {
				position: absolute;
				top: -5px;
				left: 50px;
				z-index: 999;

			}

		}
	}
</style>