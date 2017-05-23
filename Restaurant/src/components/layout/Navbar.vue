<template>
	<div class="header">
		<div class="logo">
			商家中心|
			<span style="color:#fff;font-size:16px;">腊汁肉夹馍 </span>
		</div>
		<div class="userinfo">
			<div class="item_info">
				<el-dropdown :hide-on-click="false" class="el-dropdown">
				  <span class="el-dropdown-link">
				    正在营业中
				  </span>
				  <el-dropdown-menu slot="dropdown" class="el-menu">
				    <el-dropdown-item >
				    	<span style="color:red;font-size:16px;margin-right: 10px;">紧急关店</span>
				    	<span style="color:#727375;font-size:12px;">严重影响顾客体验，请谨慎操作</span>
				    </el-dropdown-item>
				    <el-dropdown-item>
				    	<span style="font-size:16px;margin-right: 10px;">延时关店</span>
				    	<span style="color:#727375;font-size:12px;">关店状态会在5分钟后生效</span>
				    </el-dropdown-item>
				    <el-dropdown-item>
				    	<span style="color:green;font-size:16px;margin-right: 10px;">恢复营业</span>
				    	<span style="color:#727375;font-size:12px;margin-top: -5px;">按正常的营业时间开店接单</span>
				    	<i style="color:green" class="el-icon-circle-check"></i>
				    </el-dropdown-item>
				    <div style="color:#727375;font-size:12px;margin-top: 10px;">
				    		（当前营业时间：08:00-21:00）
				    	</div>
				  </el-dropdown-menu>
				</el-dropdown>
				<el-dropdown :hide-on-click="false" class="el-dropdown">
				  <span class="el-dropdown-link">
				    18651908626<i class="el-icon-caret-bottom el-icon--right"></i>
				  </span>
				  <el-dropdown-menu slot="dropdown">
				    <el-dropdown-item>修改密码</el-dropdown-item>
				    <el-dropdown-item>修改手机</el-dropdown-item>
				    <el-dropdown-item @click.native="logout">退出登录</el-dropdown-item>
				  </el-dropdown-menu>
				</el-dropdown>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				activeIndex2: '1',
				sysUserName: '',
				sysUserAvatar: ''
			}
		},
		methods: {
			//退出登录
			handleSelect(key, keyPath) {
		    	console.log(key, keyPath);
		    },
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
	.header {
		width: 100%;
		height: 60px;
		background: #2095f2;
		line-height: 60px;
		.logo{
			font-size: 22px;
			color: #fff;
			margin-left:30px;
		}
		.userinfo{
			position:absolute;
			top: 0px;
			right: 10px;
			.item_info{
				cursor:pointer;
				float:right;
				.el-dropdown{
					padding: 0px 10px 0 10px;
					height:60px;
					color:#fff;
				}
				.el-dropdown:hover{
					padding: 0px 10px 0 10px;
					height:60px;
					background-color:#20a0ff;
				}
			}
			
		}
	}
</style>