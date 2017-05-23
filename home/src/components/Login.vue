<template>
  <div>
      <div class="login-container">
        <div class="title">
          点击可以查看对应原型
        </div>
        <div class="box" v-for="item in tableData">
          <div  class="btn">{{item.name}}</div>
          <div class="tip">{{item.address}}</div>
        </div>
      </div>
      <div class="pic">
        <iframe src="http://www.processon.com/view/link/5924628be4b0bb04c34cbef6" width="800" height="620"></iframe> 
      </div>
  </div>
</template>

<script>
import hello from './Hello.vue'
    export default {
      components:{
        hello
      },
      data() {
        return {
          app_pane:false,
          tableData: [{
            name: '食客手机app',
            address: '食客点餐时使用的app'
          }, {
            name: '餐厅申请后台',
            address: '上餐厅入住平台是需要向平台申请，审核通过后才可登录餐厅后台'
          }, {
            name: '餐厅后台',
            address: '审核通过的餐厅登录的餐厅后台'
          }, {
            name: '供应商申请后台',
            address: '供应商入住平台是需要向平台进行申请，申请通过后才可登录供应商后台'
          }, {
            name: '供应商后台',
            address: '审核通过的供应商登录的供应商后台'
          }, {
            name: '云客服平台后台',
            address: '客服专员登录的后台'
          }, {
            name: '平台后台',
            address: '平台方所使用的后台主要是管理商户，供应商，客服专员'
          }]
        }
      }
    }
  </script>

<style lang="scss" scoped>
  .pic {
    position:absolute;
    top:10px;
    left:550px;
  }
  .login-container {
    /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
    position: absolute;
    top: 10px;
    left:10px;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    background-color: #F9FAFC;
    border: 1px solid #8492A6;
    width: 500px;
    padding: 10px 10px 10px 10px;

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