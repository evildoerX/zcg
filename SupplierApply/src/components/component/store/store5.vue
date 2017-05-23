<template>
  <div>
    <el-form :model="ruleForm1" :rules="rules1" ref="ruleForm1" label-width="100px" class="demo-ruleForm">
      <el-form-item label="账户类型" prop="region1">
        <el-radio class="radio" v-model="radio" label="1">对私</el-radio>
        <el-radio class="radio" v-model="radio" label="2">对公</el-radio>
      </el-form-item>
      <div class="erji">
        <el-form-item label="银行卡号" prop="num">
          <el-input style="width:400px" v-model="ruleForm1.num"></el-input>
        </el-form-item>
        <el-form-item label="所属银行" prop="yh">
          <el-input style="width:300px" v-model="ruleForm1.yh"></el-input>
        </el-form-item>
        <el-form-item label="开户城市" prop="city">
          <el-input style="width:150px" v-model="ruleForm1.city"></el-input>
          <el-input style="width:150px" v-model="ruleForm1.city2"></el-input>
        </el-form-item>
        <el-form-item label="开户支行" prop="zh">
          <el-input style="width:300px" v-model="ruleForm1.zh"></el-input>
        </el-form-item>
        <div class="yh_info">
          <div class="tip">
            请绑定开户人本人的银行卡
          </div>
          <div class="info-box">
            <div class="item">
              <span class="title">
                开户人：
              </span>
              <span class="info" style="margin-left:43px;">
                程浩
              </span>
            </div>
            <div class="item">
              <span class="title">
                证件类型：
              </span>
              <span class="info">
                身份证
              </span>
            </div>
            <div class="item">
              <span class="title">
                证件号码：
              </span>
              <span class="info">
                410108198701190075
              </span>
            </div>
          </div>
        </div> 
      </div>
      <div class="jiesuan">
          结算周期：日结 T＋3（订单交易后的第4天出账）
      </div>    
    </el-form>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        radio: '1',
        ruleForm1:{
          region1: '',
          num: '',
          yh:'',
          city:'',
          city2:'',
          zh:''
        },
        rules1: {
          num: [
            { required: true, message: '请输入银行卡号', trigger: 'blur' }
          ],
          yh: [
            { required: true, message: '请输入所属银行', trigger: 'blur' }
          ],
          city: [
            { required: true, message: '请选择开户城市', trigger: 'blur' }
          ],
          zh: [
            { required: true, message: '请输入开户支行', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped lang="scss">
  .demo-ruleForm {
    .erji {
      width: 900px;
      margin: 0px 0 10px 30px;
      border: 1px solid #e6e6e6;
      padding: 10px;
      position:relative;
    }
    .jiesuan {
      width: 900px;
      margin: 0px 0 10px 30px;
      border: 1px solid #e6e6e6;
      padding: 10px;
      background-color: #f5f5f5;
    }
    .yh_info{
      position:absolute;
      top: 50px;
      right:30px;
      width: 300px;
      margin: 0px 0 10px 30px;
      padding: 10px;
      .tip {
        color: #ff6958;
        margin-bottom: 10px;
      }
      .info-box {
        padding: 15px;
        border: 1px solid #e6e6e6;
        background-color: #f5f5f5;
        .item {
          font-size: 13px;
          color: #666;
          font-weight: 200;
          margin-bottom: 10px;
          .info {
            margin-left: 30px;
          }
        }
      }
    }
  }
  
</style>