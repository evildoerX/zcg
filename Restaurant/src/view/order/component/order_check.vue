<template>
	<div class="order_new">
		<el-form ref="form" :model="form" label-width="80px">
			<el-form-item label="全部">
		    	<el-radio-group v-model="form.resource">
		      		<el-radio label="在线支付"></el-radio>
		      		<el-radio label="货到付款"></el-radio>
		    	</el-radio-group>
		  	</el-form-item>
		  	<el-form-item label="订单状态">
		    	<el-radio-group v-model="form.resource1">
		      		<el-radio label="全部"></el-radio>
		      		<el-radio label="有效订单"></el-radio>
		      		<el-radio label="无效订单"></el-radio>
		    	</el-radio-group>
		  	</el-form-item>
		  	<el-form-item label="订单排序">
		    	<el-radio-group v-model="form.resource3">
		      		<el-radio label="订单序号"></el-radio>
		      		<el-radio label="下单时间"></el-radio>
		    	</el-radio-group>
		  	</el-form-item>
		  	<el-form-item label="活动时间">
			    <el-col :span="5">
			      <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
			    </el-col>
			    <el-col class="line" :span="1">—</el-col>
			    <el-col :span="5">
			    	<el-date-picker type="date" placeholder="选择日期" v-model="form.date2" style="width: 100%;"></el-date-picker>
			    </el-col>
			  </el-form-item>
		</el-form>
		<el-collapse v-model="activeNames" @change="handleChange" class="order_list" >
			<el-collapse-item title="8 【送达】5月1日 11：35 送达" name="1" class="order_item">
		    	<div class="tip">
			   	<el-tag type="primary">已完成</el-tag>
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
			    	<el-button class="order_btn">打印订单</el-button>
			    </div>
			</el-collapse-item>
			<el-collapse-item title="7 【送达】5月1日 11：35 送达" name="2" class="order_item">
		    	<div class="tip">
			   	<el-tag type="primary">已完成</el-tag>
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
			    	<el-button class="order_btn">打印订单</el-button>
			    </div>
			</el-collapse-item>
			<el-collapse-item title="6 【送达】5月1日 11：35 送达" name="3" class="order_item">
		    	<div class="tip">
			   	<el-tag type="primary">已完成</el-tag>
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
			    	<el-button class="order_btn">打印订单</el-button>
			    </div>
			</el-collapse-item>
			<el-collapse-item title="5 【送达】5月1日 11：35 送达" name="4" class="order_item">
		    	<div class="tip">
			   	<el-tag type="primary">已完成</el-tag>
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
			    	<el-button class="order_btn">打印订单</el-button>
			    </div>
			</el-collapse-item>
			<el-collapse-item title="4 【送达】5月1日 11：35 送达" name="5" class="order_item">
		    	<div class="tip">
			   	<el-tag type="primary">已完成</el-tag>
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
			    	<el-button class="order_btn">打印订单</el-button>
			    </div>
			</el-collapse-item>
			<el-collapse-item title="3 【送达】5月1日 11：35 送达" name="6" class="order_item">
		    	<div class="tip">
			   	<el-tag type="primary">已完成</el-tag>
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
			    	<el-button class="order_btn">打印订单</el-button>
			    </div>
			</el-collapse-item>
			<el-collapse-item title="2 【送达】5月1日 11：35 送达" name="7" class="order_item">
		    	<div class="tip">
			   	<el-tag type="primary">已完成</el-tag>
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
			    	<el-button class="order_btn">打印订单</el-button>
			    </div>
			</el-collapse-item>
			<el-collapse-item title="1 【送达】5月1日 11：35 送达" name="8" class="order_item">
		    	<div class="tip">
			   	<el-tag type="primary">已完成</el-tag>
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
			    	<el-button class="order_btn">打印订单</el-button>
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
        	resource3: '订单序号',
        	date1:'',
        	date2:''
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
		border: 1px solid #dfe6ec;
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