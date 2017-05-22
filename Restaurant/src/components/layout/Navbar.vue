<template>
	<el-row class="header">
		<el-col :span="22" class="logo">
				<span class="txt">商家中心</span>
			</el-col>
			<el-col :span="2" class="userinfo">
				<el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect">
					<!-- <el-submenu index="1">
						<template slot="title">奶茶店</template>
						<el-menu-item index="1-1">奶茶店[营业中]</el-menu-item>
						<el-menu-item index="1-2">查看全部门店</el-menu-item>
					</el-submenu>
					<el-menu-item index="3"><i class="el-icon-warning"></i>消息</el-menu-item>
					<el-submenu index="4">
						<template slot="title">正在营业</template>
						<el-menu-item index="4-1">停止营业</el-menu-item>
						<el-menu-item index="4-2">恢复营业</el-menu-item>
					</el-submenu> -->
					<el-submenu index="2">
						<template style="color:#fff" slot="title">奶茶店</template>
						<el-menu-item index="2-1">修改密码</el-menu-item>
						<el-menu-item index="2-2">修改手机</el-menu-item>
						<el-menu-item index="2-3" @click.native="logout">退出登录</el-menu-item>
					</el-submenu>
				</el-menu>
			</el-col>
	</el-row>
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
			position: absolute;
			top: 0px;
			bottom: 0px;
			width: 100%;
			height: 60px;
			line-height: 60px;
			background: #0091ea;
			color: #c0ccda;
			.userinfo {
				text-align: right;
				padding-right: 35px;
				.el-menu-demo {
					background: #0091ea;
					color: #fff;
				}
				.userinfo-inner {
					color: #c0ccda;
					cursor: pointer;
					img {
						width: 40px;
						height: 40px;
						border-radius: 20px;
						margin: 10px 0px 10px 10px;
						float: right;
					}
				}
			}
			.logo {
				font-size: 22px;
				img {
					width: 40px;
					float: left;
					margin: 10px 10px 10px 18px;
				}
				.txt {
					color: #fff;
					margin-left:30px;
				}
			}
		}
</style>