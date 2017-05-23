<template>
	<div>
    <div class="title">
       <span class="t1">编辑商品</span>
       <el-button class="btn1" type="text" @click="gotoitem"><<返回</el-button>
    </div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="商品名称" prop="name">
        <el-input style="width:217px;" v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="店内分类" prop="region">
        <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
          <el-option label="汤面" value="shanghai"></el-option>
          <el-option label="西安风味" value="beijing"></el-option>
          <el-option label="腊汁肉夹馍" value="beijing1"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="图片" prop="pic">
        <el-upload
        action="https://jsonplaceholder.typicode.com/posts/"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove">
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog v-model="dialogVisible" size="tiny">
        <img width="100%" :src="dialogImageUrl" alt="">
      </el-dialog>
      </el-form-item>
      <el-form-item label="描述" prop="desc">
        <el-input style="width:500px;" type="textarea" v-model="ruleForm.desc"></el-input>
      </el-form-item>
      <el-form-item label="标签" prop="checkList">
        <el-checkbox-group v-model="ruleForm.checkList">
          <el-checkbox label="招牌"></el-checkbox>
          <el-checkbox label="新菜"></el-checkbox>
          <el-checkbox label="爆款"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="价格和库存" prop="price">
        <img src="../../assets/item/item1.jpg" alt="">
      </el-form-item>
      <el-form-item label="属性" prop="elem">
        <img src="../../assets/item/item2.jpg" alt="">
      </el-form-item>
      <el-form-item label="售卖时间" prop="resource">
        <el-radio-group v-model="ruleForm.resource">
          <el-radio label="全时段售卖"></el-radio>
          <el-radio label="自定义时间"></el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="gotoitem">保存修改</el-button>
      </el-form-item>
    </el-form>
	</div>
</template>
<script>
  export default {
    data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false,
        ruleForm: {
          name: '番茄仔鸡汤面',
          checkList: ['招牌'],
          region: '西安风味',
          price:'',
          delivery: false,
          type: [],
          resource: '全时段售卖',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入商品名称', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择商品分类', trigger: 'change' }
          ],
          price: [
            { required: true, message: '请输入商品价格和库存', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ]
        }
      };
    },
    methods: {
      gotoitem(){
        this.$router.push('/item');
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped lang="scss">
.title {
  position:relative;
  padding: 20px;
  border-bottom: 1px solid #dfe6ec;
  margin-bottom: 20px;
  .t1{
    font-size: 18px;
  }
  .btn1{
    position: absolute;
    right: 30px;
  }
}
.demo-ruleForm {
  .avatar-uploader{
    border: 1px dashed #d9d9d9;
    width:178px;
    border-radius: 6px;
    cursor: pointer;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

}
  .avatar-uploader .el-upload:hover {
    border-color: #20a0ff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>