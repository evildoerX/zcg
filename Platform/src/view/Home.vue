<template>
  <div>
  		<div class="title">
          点击可以查看对应原型
        </div>
    	<div class="login-container">
    		<div class="box" >
        		餐馆总数：100000
     		</div>
     		<div class="box">
        		供应商总数：100000
     		</div>
     		<div class="box">
        		客服人员：100
     		</div>
    	</div>
    	<div class="login-container">
    		<div class="box" >
        		今日餐馆订单数：9000000
     		</div>
     		<div class="box">
        		今日供应商订单数：900000
     		</div>
     		<div class="box">
        		今日餐馆总收入：90000000
     		</div>
     		<div class="box">
        		今日供应商总收入：90000000
     		</div>
    	</div>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>

  .login-container {
    /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
    top: 10px;
    left:10px;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    background-color: #F9FAFC;
    padding: 10px 10px 10px 10px;
	width:100%;
    .title {
      font-size:18px;
      text-align:center;
    }
    .box {
      float:left;
      border:1px solid #b1b1b1;
      border-radius:5px;
      margin:10px;
      padding:10px;
      width:200px;
      height:100px;
       -webkit-box-shadow: 0 2px 12px rgba(0, 0, 0, .05);
        -moz-box-shadow: 0 2px 12px rgba(0, 0, 0, .05);
        box-shadow: 0 2px 12px rgba(0, 0, 0, .05);
        transition: box-shadow .3s;
      .btn {
        margin-top:10px;
        margin-bottom:10px;
        width:150px;
      }
      .tip{
        font-size:12px;
        color:#666666;
      }
    }
    .box:hover {
      -webkit-box-shadow: 0 2px 12px rgba(0, 0, 0, .2);
      -moz-box-shadow: 0 2px 12px rgba(0, 0, 0, .2);
      box-shadow: 0 2px 12px rgba(0, 0, 0, .2);
    }
  }
</style>