<template>
	<div class="header">
		<div class="logo">
			平台后台
		</div>
		<div class="userinfo">
			<div class="item_info">
				<el-dropdown :hide-on-click="false" class="el-dropdown">
				  <span class="el-dropdown-link">
				    权限管理
				  </span>
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