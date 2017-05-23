<template>
	<div class="order_new">
		<div>
			<img class="img" src="../../../assets/order/1.jpg" alt="">
		</div>
		<div>
			<img class="img" src="../../../assets/order/1.jpg" alt="">
		</div>
		<div>
			<img class="img" src="../../../assets/order/1.jpg" alt="">
		</div>
		<div>
			<img class="img" src="../../../assets/order/1.jpg" alt="">
		</div>
		<div>
			<img class="img" src="../../../assets/order/1.jpg" alt="">
		</div>
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
		padding-left: 10px;
		border-right: 1px solid #dfe6ec;
		.img {
			margin-bottom: 10px;
			border-bottom: 1px solid #dfe6ec;
		}
	}
	
</style>