<template>
	<div>
		<el-row>
		  <el-col :span="24">
			<img @click="gotoorder" style="cursor:pointer;"  src="../assets/home/1.jpg"  alt="">
		  </el-col>
		</el-row>
		<el-row>
		  <el-col :span="14">
			<img src="../assets/home/2.jpg"  alt="">
			<img src="../assets/home/3.jpg"  alt="">
		  </el-col>
		  <el-col :span="10">
			<img src="../assets/home/3.jpg"  alt="">
			<img src="../assets/home/4.jpg"  alt="">
		  </el-col>
		</el-row>
		<el-row>
		  <el-col :span="24">
			<img src="../assets/home/6.jpg"  alt="">
		  </el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		methods: {
			//退出登录
			gotoorder () {
				this.$router.push('/order');
			
			}
		},
		mounted() {
			
		}
	}

</script>

<style scoped>

</style>