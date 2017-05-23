<template>
  <div class="record">
    <el-row class="header">
      <div class="content">
        <el-col :span="20" class="txt">
        入驻供应商平台申请
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
    	<el-steps 
    	:space="142" 
    	:active="active" 
    	:center="true"
    	finish-status="success">
		  <el-step title="供应商信息"></el-step>
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
        <component :is="type"></component>
      </el-card>
      <div class="btn-box" >
        <el-button class="btn-pre" @click="pre">上一步</el-button>
        <el-button class="btn-next" type="primary" @click="next">{{btn_name}}</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import store1 from './component/store/store1'
import store2 from './component/store/store2'
import store3 from './component/store/store3'
import store4 from './component/store/store4'
import store5 from './component/store/store5'
import store6 from './component/store/store6'
import store7 from './component/store/store7'

const componentsArr = [
    store1,
    store2,
    store3,
    store4,
    store5,
    store6,
    store7
]

  export default {
    components: {
    	store1,
      store2,
      store3,
      store4,
      store5,
      store6,
      store7
    },
    data() {
      return {
        btn_name:'提交并进入下一步',
        type: componentsArr[0],
      	active: 0,
        activeName: 'second',
        sysUserName: '',
        sysUserAvatar: ''
      }
    },
    methods: {
      pre() {
        if (--this.active <= 0) {
          this.$router.push('/recordlist');
          return
        }
        this.type = componentsArr[this.active]
      },
      next() {
        if (this.active === 5) {
          this.btn_name="提交并申请入驻供应商平台"
        }
        if (++this.active >= 7) {
          this.$router.push('/recordlist');
          return
          console.log(this.type)
        }
        this.type = componentsArr[this.active]
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