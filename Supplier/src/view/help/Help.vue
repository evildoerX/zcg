<template>
    <div class="store">
    	<el-tabs v-model="activeName" @tab-click="handleClick">
		    <el-tab-pane label="全部消息(5)" name="first">
            	<img src="../../assets/help/xx/1.jpg" alt="">
		    </el-tab-pane>
		    <el-tab-pane label="平台公告(3)" name="second">
            	<img src="../../assets/help/xx/2.jpg" alt="">
		    </el-tab-pane>
		    <el-tab-pane label="我的消息(2)" name="third">
            	<img src="../../assets/help/xx/3.jpg" alt="">
		    </el-tab-pane>
		</el-tabs>
        <div class="zongping">
        </div>
    </div>
</template>

<script>
    export default {
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>

<style scoped lang="scss">
.store{
    // width: 1000px;
    // margin: 0 auto;
    .zongping{
      border-bottom: 20px solid #f1f2f7;
    }
    .data{
    border-bottom: 20px solid #f1f2f7;
    }
    .info{
        border-bottom: 20px solid #f1f2f7;
    }
}
</style>