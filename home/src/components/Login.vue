<template>
  <div>
      <div class="login-container">
        <div class="title">
          点击可以查看对应原型
        </div>
        <a href="#" class="box" style="width:540px; height:120px;">
          <div  class="btn">食客手机app</div>
          <div class="tip">食客点餐时使用的app</div>
          <div class="erweima">
            <img src="../assets/1.png" width="120" alt="">
          </div>
          <div class="saoma">
            <div class="cn">
              扫码预览
            </div>
            <div class="en">
              Sweep code preview
            </div>
          </div>
        </a>
        <a :href="item.link" class="box" v-for="item in tableData">
          <div  class="btn">{{item.name}}</div>
          <div class="tip">{{item.address}}</div>
        </a>
      </div>
      <div class="pic">
        <iframe class="page" src="http://www.processon.com/view/link/5924628be4b0bb04c34cbef6" width="1200" height="768"></iframe> 
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
            name: '餐厅申请后台',
            address: '上餐厅入住平台是需要向平台申请，审核通过后才可登录餐厅后台',
            link:'../../RestaurantApply/webroot/'
          }, {
            name: '餐厅后台',
            address: '审核通过的餐厅登录的餐厅后台',
            link:'../../Restaurant/webroot/'
          }, {
            name: '供应商申请后台',
            address: '供应商入住平台是需要向平台进行申请，申请通过后才可登录供应商后台',
            link:'../../SupplierApply/webroot/'
          }, {
            name: '供应商后台',
            address: '审核通过的供应商登录的供应商后台',
            link:'../../Supplier/webroot/'
          }, {
            name: '云客服平台后台',
            address: '客服专员登录的后台',
            link:'https://pro.modao.cc/app/c2ff5c984845f50dacf530247bcf7177360f2006'
          }, {
            name: '平台后台',
            address: '平台方所使用的后台主要是管理商户，供应商，客服专员',
            link:'../../Platform/webroot/'
          }]
        }
      }
    }
  </script>

<style lang="scss" scoped>
  a:link {   
    color: #000000;   
    text-decoration: none;   
    }   
    a:visited {   
    color: #000000;   
    text-decoration: none;   
    }   
    a:hover {   
     
    } 
  .pic {
    margin-top: 20px;
    text-align:center;
    .page {
      border: 1px solid #8492A6;
    }
  }
  .login-container {
    /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
    // position: absolute;
    margin: 0 auto;
    margin-top: 10px;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    background-color: #F9FAFC;
    border: 1px solid #8492A6;
    width: 600px;
    height: 670px;
    padding: 10px 10px 10px 10px;
    cursor:pointer;
    .title {
      font-size:18px;
      text-align:center;
    }
    .box {
      float:left;
      position:relative;
      border:1px solid #b1b1b1;
      border-radius:5px;
      margin:10px;
      padding:10px;
      width:250px;
      height:120px;
       -webkit-box-shadow: 0 2px 12px rgba(0, 0, 0, .05);
        -moz-box-shadow: 0 2px 12px rgba(0, 0, 0, .05);
        box-shadow: 0 2px 12px rgba(0, 0, 0, .05);
        transition: box-shadow .3s;
      .btn {
        margin-top:10px;
        margin-bottom:10px;
        width:150px;
        font-size:18px;
      }
      .tip{
        font-size:14px;
        color:#666666;
      }
      .erweima{
        position:absolute;
        right: 180px;
        top: 10px;
      }
      .saoma{
        position:absolute;
        right: 10px;
        top: 10px;
        font-size:18px;
        text-align:center;
        .cn {
          margin-top:30px;
          margin-bottom:10px;
        }
      }
    }
    .box:hover {
      -webkit-box-shadow: 0 2px 12px rgba(0, 0, 0, .2);
      -moz-box-shadow: 0 2px 12px rgba(0, 0, 0, .2);
      box-shadow: 0 2px 12px rgba(0, 0, 0, .2);
    }
  }
</style>