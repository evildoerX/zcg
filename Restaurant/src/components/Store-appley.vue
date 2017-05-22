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
      <!-- <el-button style="margin-top: 12px;" @click="next">下一步</el-button> -->
    	<el-steps 
    	:space="142" 
    	:active="active" 
    	:center="true"
    	finish-status="success">
		  <el-step title="门店信息"></el-step>
		  <el-step title="资质信息"></el-step>
		  <el-step title="合作方案"></el-step>
		  <el-step title="配送方案"></el-step>
		  <el-step title="结算信息"></el-step>
		  <el-step title="商品内容"></el-step>
		  <el-step title="活动信息"></el-step>
		</el-steps>
    </div>
    <div class="content">
    	<el-card class="box-card">
        	<store4 />
        </el-tabs>
      </el-card>
      <div style="height:80px;">
      </div>
    </div>
  </div>
</template>

<script>
import store4 from './component/store/store5'
  export default {
    components: {
    	store4
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
        if (this.active++ > 5) this.active = 0;
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
        position:relative;
        .sqkd {
          position:absolute;
          right:20px;
        }
      }
    }
</style>