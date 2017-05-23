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
		<div class="item-list">
			<img class="img" src="../../../assets/order/6.jpg" alt="">
		</div>
		<div class="item-list">
			<img class="img" src="../../../assets/order/6.jpg" alt="">
		</div>
		<div class="item-list">
			<img class="img" src="../../../assets/order/6.jpg" alt="">
		</div>
		<div class="item-list">
			<img class="img" src="../../../assets/order/6.jpg" alt="">
		</div>
		<div class="item-list">
			<img class="img" src="../../../assets/order/6.jpg" alt="">
		</div>
		<div class="item-list">
			<img class="img" src="../../../assets/order/6.jpg" alt="">
		</div>
		<div class="item-list">
			<img class="img" src="../../../assets/order/6.jpg" alt="">
		</div>
		<div class="item-list">
			<img class="img" src="../../../assets/order/6.jpg" alt="">
		</div>
		<div class="item-list">
			<img class="img" src="../../../assets/order/6.jpg" alt="">
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
		padding-left: 10px;
		border-right: 1px solid #dfe6ec;
		.img {
			margin-bottom: 10px;
			border: 1px solid #dfe6ec;
		}
	}
</style>