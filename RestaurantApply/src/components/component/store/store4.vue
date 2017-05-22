<template>
  <div>
    <div class="title">
      当前选择方案：商户配送
    </div>
    <div class="tip">
      请设置配送区域
    </div>
    <div class="ps_map">
      <img src="../../../assets/ps_map.jpg" width="" alt="">
      <div class="map_panel">
        <div class="reference-container">
          <span class="reference-label">参考范围</span>
          <span class="reference-name">门店附近</span>
          <span class="reference-input-wrap">
            <el-input class="input" size="mini" v-model="input" ></el-input>
            <span class="reference-input-wrap__unit">公里</span>
          </span>
          <el-button :plain="true" type="info" size="mini">显示</el-button>
        </div>
        <div class="reference-container">
          <div class="psqy">
            <span class="reference-name">配送区域 <el-tag type="success">自配送</el-tag></span>
            <el-button style="float:right" :plain="true" type="info" size="mini">添加配送区域</el-button>
          </div>
          <div class="ps_info">
            <div class="title">
              <div class="color">
              </div>
              <div class="name">
                配送范围1
              </div>
            </div>
            <div class="info">
              <span class="name">起送价：</span>
              <span class="wrap">
                <el-input class="input" size="mini" v-model="input" ></el-input>
                <span class="unit">元</span>
              </span>
            </div>
            <div class="info">
              <span class="name">配送费：</span>
              <span class="wrap">
                <el-input class="input" size="mini" v-model="input" ></el-input>
                <span class="unit">元</span>
              </span>
            </div>
            <div class="info">
              <span class="name">区域面积：</span>
              <span class="wrap">
                <span class="unit">14.28平方公里</span>
              </span>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        input:'2'
      };
    },
    methods: {
      
    }
  }
</script>

<style scoped lang="scss">
  .title {
    font-size: 16px;
    color: #333;
    margin: 0px 0px 10px 20px;
  }
  .tip {
    color: #999;
    margin: 10px 0px 10px 20px;
  }
  .ps_map {
    position:relative;
    margin-left: -20px;
    margin-bottom: -25px;
    .map_panel{
      position:absolute;
      top:10px;
      right:-20px;
      .reference-container {
        font-size: 12px;
        margin-right: 5px;
        margin-bottom: 20px;
        background-color: #fff;
        border: 1px solid #e6e6e6;
        padding: 5px;
        .reference-label{
          color: #949494;
        }
        .reference-input-wrap{
          .input {
            width:45px;          
          }
        }
        .psqy {
          padding: 5px;
          border-bottom: 1px solid #e6e6e6;
        }
        .ps_info {
          .title {
            position:relative;
            margin-top:5px;
            margin-left: 0px;
            .color {
              width: 25px;
              height:25px;
              background-color: rgb(66, 127, 237);
            }
            .name {
              position:absolute;
              left: 30px;
              top: 0px;
            }
          }
          .info {
            height:30px;
            .wrap {
              float:right;
              .input {
                width:45px;
              }
            }
          }
        }
      }
    }
  }
</style>