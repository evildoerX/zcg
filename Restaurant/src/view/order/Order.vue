<template>
	<div>
		<el-tabs v-model="activeName" @tab-click="handleClick">
		    <el-tab-pane label="新订单" name="first">
		    	<el-row :gutter="20">
		    		<el-col :span="16">
		    			<el-collapse v-model="activeNames" @change="handleChange">
							  <el-collapse-item title="4 【预】4月1日 12：15 送达" name="1">
							    <div class="tip">
							    	<el-tag type="danger">待接单</el-tag>
							    </div>
							    <div class="user_info">
							    	<div class="user">
							    		<span>陈 女士</span>
								    	<span>查看手机号</span>
								    	<span>#第一次下单</span>
							    	</div>
							    	<div class="address">
							    		江苏省玄武区珠江路600号谷阳世纪大厦1405室 <i class="el-icon-circle-check"> 查看地图</i>
							    	</div>
							    </div>
							    <div class="order_stat">
							    	<el-collapse-item title="3 【预】4月1日 12：15 送达" name="1-1">
										<img src="../../assets/order/order_stat.jpg"  alt="">
									</el-collapse-item>
							    </div>
							    <div class="order_item">
							    	<img src="../../assets/order/order_item.jpg"  alt="">
							    </div>
							    <div class="order_totle">
							    	<span>本单实收总金额：</span>
							    	<span>￥ 15 元</span>
							    </div>
							    <div class="order_footer">
							    	<img src="../../assets/order/order_footer.jpg"  alt="">
							    </div>
							  </el-collapse-item>
							  <el-collapse-item title="3 【预】4月1日 12：15 送达" name="2">
							    <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
							    <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
							  </el-collapse-item>
							  <el-collapse-item title="2 【预】4月1日 12：15 送达" name="3">
							    <div>简化流程：设计简洁直观的操作流程；</div>
							    <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
							    <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
							  </el-collapse-item>
							  <el-collapse-item title="1【预】4月1日 12：15 送达" name="4">
							    <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
							    <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
							  </el-collapse-item>
							</el-collapse>
		    			
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
  export default {
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

</style>