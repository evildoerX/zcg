<template>
	<div>
		<el-tabs v-model="activeName" @tab-click="handleClick" class="order_tab">
		    <el-tab-pane label="菜品管理" name="first">
		    	<iteminfo />
		    </el-tab-pane>
		    <el-tab-pane label="回收站" name="second">
				
		    </el-tab-pane>
		</el-tabs>
    <div class="btn-box">
      <el-button type="primary" icon="plus" size="small" @click="additem">添加菜品</el-button>
      <el-button type="primary" icon="menu" size="small" @click="dialogFormVisible = true">添加分类</el-button>
    </div>
    <el-dialog title="添加分类" :visible.sync="dialogFormVisible">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="分类名称" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        </el-form-item>
        <el-form-item label="分类描述" prop="desc">
          <el-input type="textarea" v-model="ruleForm.desc"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
	</div>
</template>
<script>
import iteminfo from './component/Item_info.vue'
  export default {
  	components: {
  		iteminfo
  	},
    data() {
      return {
        activeName: 'first',
        dialogFormVisible: false,
        ruleForm: {
          name: '',
          desc: ''
        },
        formLabelWidth: '120px',
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      additem(){
        this.$router.push('/itemadd');
      },
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>

<style scoped lang="scss">
  .btn-box {
    position: absolute;
    top: 25px;
    right: 30px;
  }
</style>