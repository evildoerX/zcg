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
		      		<el-radio label="待物流接单"></el-radio>
		      		<el-radio label="待物流取货"></el-radio>
		      		<el-radio label="物流已取货"></el-radio>
		      		<el-radio label="物流已送达"></el-radio>
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
		<div class="item-list">
			<img class="img" src="../../../assets/order/2.jpg" alt="">
			<el-tag class="tip" type="primary">订单待派送</el-tag>
			<el-button type="primary" class="order_btn">派送订单</el-button>
		</div>
		<div class="item-list">
			<img class="img" src="../../../assets/order/2.jpg" alt="">
			<el-tag class="tip" type="primary">待物流接单</el-tag>
			<el-button type="primary" class="order_btn">自主派送</el-button>
		</div>
		<div class="item-list">
			<img class="img" src="../../../assets/order/3.jpg" alt="">
			<el-tag class="tip" type="primary">待物流取货</el-tag>
			<el-button type="primary" class="order_btn">物流已取货</el-button>
		</div>
		<div class="item-list">
			<img class="img" src="../../../assets/order/4.jpg" alt="">
			<el-tag class="tip" type="primary">物流派送中</el-tag>
			<el-button type="primary" class="order_btn">联系物流</el-button>
		</div>
		<div class="item-list">
			<img class="img" src="../../../assets/order/5.jpg" alt="">
			<el-tag class="tip" type="primary">物流已送达,等待用户评价</el-tag>
			<el-button class="order_btn">打印订单</el-button>
		</div>
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
		padding-left: 10px;
		border-right: 1px solid #dfe6ec;
		.item-list{
			position:relative;
			.img {
				margin-bottom: 10px;
				border: 1px solid #dfe6ec;
			}
			.tip{
				position: absolute;
				top: 10px;
				right:50px;
			}
			.order_btn{
				position: absolute;
				bottom: 40px;
				right:50px;
			}
		}
	}
</style>