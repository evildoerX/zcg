<template>
  <div>
    <div class="page_info">
        <el-button class="kd" type="primary" @click="dialogFormVisible = true">自助开店</el-button>
        <el-button class="bwkd" type="primary" @click="dialogFormVisible = true">帮我开店</el-button>
    </div>
    <el-dialog title="申请入驻" :visible.sync="dialogFormVisible" size="tiny">
      <el-form :model="form">
        <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-position="left" label-width="0px" class="demo-ruleForm login-container">
          <el-form-item prop="account">
            <el-input type="text" v-model="ruleForm2.account" auto-complete="off" placeholder="账号"></el-input>
          </el-form-item>
          <el-form-item prop="checkPass">
            <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="密码"></el-input>
            <div>
              没有收到短信验证码？请点击 语音验证
            </div>
          </el-form-item>
          <el-form-item style="width:100%;margin-top: -20px">
            <el-button type="primary" style="width:100%;" @click.native.prevent="handleSubmit2" :loading="logining">登录</el-button>
            <!--<el-button @click.native.prevent="handleReset2">重置</el-button>-->
          </el-form-item>
          <el-checkbox v-model="checked" checked class="remember">我已阅读并已同意 《网上订餐平台服务协议》</el-checkbox>
        </el-form>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
  import { requestLogin } from '../api/api';
  import NProgress from 'nprogress'
  export default {
    data() {
      return {
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px',
        logining: false,
        ruleForm2: {
          account: 'admin',
          checkPass: '123456'
        },
        rules2: {
          account: [
            { required: true, message: '请输入账号', trigger: 'blur' },
            //{ validator: validaePass }
          ],
          checkPass: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            //{ validator: validaePass2 }
          ]
        },
        checked: true
      };
    },
    methods: {
      handleReset2() {
        this.$refs.ruleForm2.resetFields();
      },
      handleSubmit2(ev) {
        var _this = this;
        this.$refs.ruleForm2.validate((valid) => {
          if (valid) {
            //_this.$router.replace('/table');
            this.logining = true;
            NProgress.start();
            var loginParams = { username: this.ruleForm2.account, password: this.ruleForm2.checkPass };
            requestLogin(loginParams).then(data => {
              this.logining = false;
              NProgress.done();
              let { msg, code, user } = data;
              if (code !== 200) {
                this.$notify({
                  title: '错误',
                  message: msg,
                  type: 'error'
                });
              } else {
                sessionStorage.setItem('user', JSON.stringify(user));
                this.$router.push({ path: '/table' });
              }
            });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  }

</script>

<style lang="scss" scoped>
  .page_info {
    // backgroundImage: 'url(' + require('../assets/bg.jpg') + ')',
    background-image: url(../assets/bg.jpg);
    height: 770px;
    .kd {
      position:absolute;
      top:410px;
      left:365px;
      width:280px;
      height:67px;
      font-size:32px;
    }
    .bwkd {
      position:absolute;
      top:410px;
      left:765px;
      width:280px;
      height:67px;
      font-size:32px;
    }

  }
  .login-container {
    .title {
      margin: 0px auto 40px auto;
      text-align: center;
      color: #505458;
    }
    .remember {
      margin: 0px 0px 35px 0px;
    }
  }
</style>