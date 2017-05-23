<template>
	<div class="order_new">
		<el-collapse v-model="activeNames" @change="handleChange" class="order_list" >
			<el-collapse-item title="8 【预】5月24日 12：35 送达" name="1" class="order_item">
				<div class="tip">
			   	<el-tag type="danger">催单：顾客催单</el-tag>
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
			    	<el-button type="warning" class="order_btn">立即督促骑手</el-button>
			    </div>
			</el-collapse-item>
			<el-collapse-item title="7 【预】5月24日 12：25 送达" name="2" class="order_item">
				<div class="tip">
			   	<el-tag type="danger">催单：顾客催单</el-tag>
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
			    	<el-button  class="order_btn">已催单</el-button>
			    </div>
			</el-collapse-item>
		</el-collapse>
	</div>
</template>
<script>
  export default {
    data() {
      return {
        activeNames: ['1','2','3','4','5','6','7']
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