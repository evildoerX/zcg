<template>
  <div>
    <el-row :gutter="10" class="item">
      <el-col :span="3" >
        <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" >
          <el-menu-item index="1">汤面</el-menu-item>
          <el-menu-item index="2">西安风味</el-menu-item>
          <el-menu-item index="3">腊汁肉夹馍</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="21">
        <div class="title">
          <span class="h1">西安风味</span>
          <el-button icon="edit" size="mini" @click="dialogForm1Visible = true">编辑</el-button>
          <div class="tip">真正纯手工面 陕西风味</div>
        </div>
        <itemdata />
      </el-col>
    </el-row>
    <el-dialog title="编辑分类" :visible.sync="dialogForm1Visible">
      <el-form :model="ruleForm1" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="分类名称" prop="name">
          <el-input v-model="ruleForm1.name"></el-input>
        </el-form-item>
        </el-form-item>
        <el-form-item label="分类描述" prop="desc">
          <el-input type="textarea" v-model="ruleForm1.desc"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogForm1Visible = false">确 定</el-button>
      </div>
    </el-dialog>
	</div>
</template>
<script>
import itemdata from './item_data.vue'
  export default {
  	components: {
      itemdata
  	},
    data() {
      return {
        dialogForm1Visible:false,
        activeName: 'first',
        activeNames: ['1','2','3','4'],
        ruleForm1: {
          name: '西安风味',
          desc: '真正纯手工面 陕西风味'
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
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>

<style scoped lang="scss">
  .item {
    padding: 10px;
    .el-menu-vertical-demo{
      height: 768px;
    }
    .title{
      margin-left: 10px;
      .h1 {
        font-size:18px;
      }
      .tip{
        padding-top: 5px;
        color: #8e8e8e;
      }
    }
  }

</style>