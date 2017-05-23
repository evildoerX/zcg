<template>
	<div class="order_new">
		<el-form ref="form" :model="form" label-width="80px">
			<el-form-item label="预定状态">
		    	<el-radio-group v-model="form.resource">
		      		<el-radio label="未到预定时间"></el-radio>
		      		<el-radio label="60分钟内需送达预订单"></el-radio>
		      		<el-radio label="已过预定时间"></el-radio>
		    	</el-radio-group>
		  	</el-form-item>
		  	<el-form-item label="订单状态">
		    	<el-radio-group v-model="form.resource1">
		      		<el-radio label="全部"></el-radio>
		      		<el-radio label="有效订单"></el-radio>
		      		<el-radio label="待配送"></el-radio>
		      		<el-radio label="配送中"></el-radio>
		      		<el-radio label="已送达"></el-radio>
		      		<el-radio label="用户已确认订单"></el-radio>
		      		<el-radio label="无效订单"></el-radio>
		    	</el-radio-group>
		  	</el-form-item>
		  	<el-form-item label="配送状态">
		    	<el-radio-group v-model="form.resource2">
		      		<el-radio label="全部"></el-radio>
		      		<el-radio label="待骑手接单"></el-radio>
		      		<el-radio label="待骑手取货"></el-radio>
		      		<el-radio label="骑手已取货"></el-radio>
		      		<el-radio label="骑手已送达"></el-radio>
		      		<el-radio label="配送已取消"></el-radio>
		    	</el-radio-group>
		  	</el-form-item>
		  	<el-form-item label="订单顺序">
		    	<el-radio-group v-model="form.resource3">
		      		<el-radio label="期望送达时间"></el-radio>
		      		<el-radio label="下单时间"></el-radio>
		    	</el-radio-group>
		  	</el-form-item>
		</el-form>
		<el-collapse v-model="activeNames" @change="handleChange" class="order_list" >
			<el-collapse-item title="6 【预】5月23日 12：15 送达" name="3" class="order_item">
				<div class="tip">
			   	<el-tag type="warning">待骑手接单</el-tag>
			    </div>
			    <div class="user_info">
			    	<img src="../../../assets/order/order_user.jpg" alt="">
			    </div>
			    <div class="order_stat">
			    	<img src="../../../assets/order/order_stat.jpg"  alt="">
			    </div>
			    <div class="order_item">
			    	<img src="../../../assets/order/order_item.jpg"  alt="">
			    </div>
			    <div class="order_totle">
			    	<span class="title">本单实收总金额：</span>
			    	<span class="money">[已支付]￥ <em>15 元</em></span>
			    </div>
			    <div class="order_footer">
			    	<img src="../../../assets/order/order_footer.jpg"  alt="">
			    	<el-button type="warning" class="order_btn">待骑手取货</el-button>
			    </div>
			</el-collapse-item>
			<el-collapse-item title="5【预】5月23日 12：15 送达" name="4" class="order_item">
		    	<div class="tip">
			   	<el-tag type="warning">待骑手取货</el-tag>
			    </div>
			    <div class="user_info">
			    	<img src="../../../assets/order/order_user.jpg" alt="">
			    </div>
			    <div class="order_stat">
			    	<img src="../../../assets/order/order_stat.jpg"  alt="">
			    </div>
			    <div class="order_item">
			    	<img src="../../../assets/order/order_item.jpg"  alt="">
			    </div>
			    <div class="order_totle">
			    	<span class="title">本单实收总金额：</span>
			    	<span class="money">[已支付]￥ <em>15 元</em></span>
			    </div>
			    <div class="order_footer">
			    	<img src="../../../assets/order/order_footer.jpg"  alt="">
			    	<el-button type="warning" class="order_btn">骑手派送中</el-button>
			    </div>
			</el-collapse-item>
			<el-collapse-item title="4 【预】5月23日 11：45 送达" name="5" class="order_item">
				<div class="tip">
			   	<el-tag type="warning">派送中</el-tag>
			    </div>
			    <div class="user_info">
			    	<img src="../../../assets/order/order_user.jpg" alt="">
			    </div>
			    <div class="order_stat">
			    	<img src="../../../assets/order/order_stat.jpg"  alt="">
			    </div>
			    <div class="order_item">
			    	<img src="../../../assets/order/order_item.jpg"  alt="">
			    </div>
			    <div class="order_totle">
			    	<span class="title">本单实收总金额：</span>
			    	<span class="money">[已支付]￥ <em>15 元</em></span>
			    </div>
			    <div class="order_footer">
			    	<img src="../../../assets/order/order_footer.jpg"  alt="">
			    	<el-button type="info" class="order_btn">等待完成订单</el-button>
			    </div>
			</el-collapse-item>
			<el-collapse-item title="3  【送达】5月1日 11：35 送达" name="6" class="order_item">
				<div class="tip">
			   	<el-tag type="warning">派送中</el-tag>
			    </div>
			    <div class="user_info">
			    	<img src="../../../assets/order/order_user.jpg" alt="">
			    </div>
			    <div class="order_stat">
			    	<img src="../../../assets/order/order_stat.jpg"  alt="">
			    </div>
			    <div class="order_item">
			    	<img src="../../../assets/order/order_item.jpg"  alt="">
			    </div>
			    <div class="order_totle">
			    	<span class="title">本单实收总金额：</span>
			    	<span class="money">[已支付]￥ <em>15 元</em></span>
			    </div>
			    <div class="order_footer">
			    	<img src="../../../assets/order/order_footer.jpg"  alt="">
			    	<el-button type="info" class="order_btn">等待完成订单</el-button>
			    </div>
			</el-collapse-item>
		</el-collapse>
	</div>
</template>
<script>
  export default {
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
	.order_new {
		padding: 5px;
		.order_list {
			.order_item{
				position: relative;
				.tip {
				position: absolute;
				top:10px;
				right: 10px;
				}
			}
		}
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