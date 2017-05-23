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
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>申请记录</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="content">
      <el-card class="box-card">
        <el-button class="sqkd" type="primary" @click="openstore">申请开店</el-button>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="已通过" name="first">
            <recordpass />
          </el-tab-pane>
          <el-tab-pane label="待完善" name="second">
            <recordcomplete />
          </el-tab-pane>
          <el-tab-pane label="审核中" name="third">
            <recordcheck />
          </el-tab-pane>
          <el-tab-pane label="需修改" name="fourth">
            <recordmodify />
          </el-tab-pane>
        </el-tabs>
      </el-card>
      <div style="height:80px;">
      </div>
    </div>
  </div>
</template>

<script>
import recordpass from './component/record/record-pass'
import recordcomplete from './component/record/record-complete'
import recordcheck from './component/record/record-check'
import recordmodify from './component/record/record-modify'
  export default {
    components: {
      recordpass,
      recordcomplete,
      recordcheck,
      recordmodify
    },
    data() {
      return {
        activeName: 'third',
        sysUserName: '',
        sysUserAvatar: ''
      }
    },
    methods: {
      openstore: function() {
        this.$router.push('/storeguid')
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
      width: 1000px;
      margin: auto;
      margin-top: 35px;
      margin-bottom: 10px;
      padding: 0;
    }
    .content {
      width: 1000px;
      margin: auto;
      .box-card {
        height: 400px;
        position:relative;
        .sqkd {
          position:absolute;
          right:20px;
          z-index: 999;
        }
      }
    }
</style>