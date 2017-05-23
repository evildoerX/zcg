<template>
    <div class="store">
        <div class="zongping">
            <img src="../../assets/spead/1.jpg" alt="">
            <el-button class="btn" type="primary" @click="dialogTableVisible = true">立即开通</el-button>
        </div>
        <el-dialog title="开通竞价推广" :visible.sync="dialogTableVisible">
        	<div>
		  		<img src="../../assets/spead/2.jpg" alt="">
        	</div>
        	<div class="img-box">
        		<img class="img" v-bind:class="{ 'class-a': isA, 'class-b': isB }" src="../../assets/spead/3.jpg" alt="">
				<img class="img" v-bind:class="{ 'class-a': isA, 'class-b': isB }" src="../../assets/spead/4.jpg" alt="">
				<img class="img" v-bind:class="{ 'class-a': isA, 'class-b': isB }" src="../../assets/spead/5.jpg" alt="">
        	</div>
        	<div>
		  		<img src="../../assets/spead/6.jpg" alt="">
        	</div>
        	<div slot="footer" class="dialog-footer">
			    <el-button type="primary" @click="dialogFormVisible = false">立即开通</el-button>
			  </div>
		</el-dialog>
    </div>
</template>

<script>
    export default {
    data() {
      return {
        dialogTableVisible: false,
        formLabelWidth: '120px'
      };
    }
  };

</script>

<style scoped lang="scss">
.store{
    width: 1000px;
    margin: 0 auto;
    .zongping{
    	position:relative;
    	border-bottom: 20px solid #f1f2f7;
    	.btn {
      		position: absolute;
      		width: 150px;
      		height: 60px;
      		bottom:155px;
      		left:340px;
      		background-color: #7370cb;
      		border: 1px solid #7370cb;
      		font-size: 20px;
    	}
    }
    .data{
    border-bottom: 20px solid #f1f2f7;
    }
    .info{
        border-bottom: 20px solid #f1f2f7;
    }
    .img-box {
    	width: 600px;
    	margin: 0 auto;
    	padding: 10px;
    	.img{
    		padding: 10px;
    		margin: 10px 20px 10px 20px;
    	}
    	.img:hover {
		    box-shadow: 0 0 3px #0091ea;
		  }
    }
    .dialog-footer {
    	text-align: center;
    }
}
</style>