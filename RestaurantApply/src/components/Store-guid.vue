<template>
  <div class="record">
    <el-row class="header">
      <div class="content">
        <el-col :span="20" class="txt">
        开店申请
        </el-col>
        <el-col :span="4" class="userinfo">
          <el-dropdown trigger="click">
            <span class="el-dropdown-link userinfo-inner">18651908626
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </div>
    </el-row>
    <div class="breadcrumb">
      请准备号以下材料，申请开店更方便
    </div>
    <div class="content">
    	<el-card class="box-card">
      <img src="../assets/store_guid.jpg" alt="">
      </el-card>
      <div class="btn-box" >
        <el-button class="btn-next" type="primary" @click="next">我已经准备好资料，进行开店申请</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    components: {
    },
    data() {
      return {
      	active: 0,
        activeName: 'second',
        sysUserName: '',
        sysUserAvatar: ''
      }
    },
    methods: {
      next() {
        this.$router.push('/storeapply');
      },
      handleClick(tab, event) {
        console.log(tab, event);
      },
      //退出登录
      logout: function () {
        var _this = this;
        this.$confirm('确认退出吗?', '提示', {
          //type: 'warning'
        }).then(() => {
          sessionStorage.removeItem('user');
          _this.$router.push('/login');
        }).catch(() => {

        });


      }
    },
    mounted() {
      var user = sessionStorage.getItem('user');
      if (user) {
        user = JSON.parse(user);
        this.sysUserName = user.name || '';
        this.sysUserAvatar = user.avatar || '';
      }
    }
  }

</script>

<style scoped lang="scss">
  .record {
    background-color: #ebeef2;
  }
  .header {
      width: 100%;
      height: 60px;
      line-height: 60px;
      background: #0091ea;
      color: #fff;
      .content{
        width: 1000px;
        margin: auto;
        .txt {
          color: #fff;
          font-size: 20px;
          font-weight: 700;
        }
        .userinfo {
        padding-right: 35px;
        .userinfo-inner {
            color: #fff;
            cursor: pointer;
          }
          .logo {
            font-size: 22px;
            
          }
        }
      }
    }
    .breadcrumb{
      height: 60px;
      line-height: 60px;
      background-color: #445a64;
      width: 100%;
      text-align: center;
      color: #fff;
      font-size: 18px;
    }
    .content {
      width: 1000px;
      margin: auto;
      .box-card {
        position:relative;
        .sqkd {
          position:absolute;
          right:20px;
        }
      }
    }
    .btn-box{
      height:80px;
      margin-top: 30px;
      margin-bottom: 100px;
      text-align: center;
      .btn-pre {
        width: 198px;
        height: 50px;
        margin-right: 15px;
        font-size:16px;
      }
      .btn-next {
        height: 50px;
        width: 318px;
        font-size:16px;
      }
    }
</style>