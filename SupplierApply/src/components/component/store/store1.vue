<template>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px" class="demo-ruleForm">
    <el-form-item label="门店绑定手机号：">
      18651908626
    </el-form-item>
    <el-form-item label="门店名称" prop="storename">
      <el-input style="width:350px;" v-model="ruleForm.storename"></el-input>
    </el-form-item>
    <el-form-item label="外卖电话" prop="phone">
      <el-input style="width:220px;" v-model="ruleForm.phone"></el-input>
    </el-form-item>
    <el-form-item label="联系人名称" prop="name">
      <el-input style="width:220px;" v-model="ruleForm.name"></el-input>
    </el-form-item>
    <el-form-item label="门店分类" prop="storetype">
      <el-select v-model="ruleForm.storetype" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="营业时间" prop="time">
      <el-radio-group v-model="ruleForm.time">
        <el-radio label="24小时"></el-radio>
        <el-radio label="自定义"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="城市" prop="city">
      <el-input style="width:350px;" v-model="ruleForm.city"></el-input>
    </el-form-item>
    <el-form-item label="详细地址" prop="adress">
      <el-input style="width:350px;"  v-model="ruleForm.adress"></el-input>
      <el-button type="primary">去定位</el-button>
      <div>
        <img src="../../../assets/store_map.jpg" alt="">
      </div>
    </el-form-item>
    <el-form-item label="门店照片" prop="storepic">
      <div>
        <div class="storepic">
          <img src="../../../assets/store_pic.jpg" alt="">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </div>
      </div>
    </el-form-item>
    <el-form-item label="门店Logo" prop="storelogo">
      <div>
        <div>
          <img src="../../../assets/store_logo.jpg" alt="">
        </div>
      </div>
    </el-form-item>
  </el-form>
</template>
<script>
  export default {
    components: {
    },
    data() {
      return {
        imageUrl: '',
        ruleForm: {
          storename: '',
          phone: '',
          name: '',
          storetype:'',
          time:'',
          city: '',
          adress: '',
          storepic: '',
          storelogo: ''
        },
        rules: {
          storename: [
            { required: true, message: '请输入门店名称', trigger: 'blur' },
            { min: 2, max: 20, message: '长度在 2 到 20 个字符', trigger: 'blur' }
          ],
          phone: [
            { required: true, message: '请输入手机号', trigger: 'blur' },
            { min: 11, max: 11, message: '请输入正确的手机号', trigger: 'blur' }
          ],
          name: [
            { required: true, message: '请输入联系人名称', trigger: 'blur' },
            { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
          ],
          storetype: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          time: [
            { required: true, message: '请选择营业时间', trigger: 'change' }
          ],
          city: [
            { required: true, message: '请选择城市', trigger: 'change' }
          ],
          adress: [
            { required: true, message: '请输入详细地址', trigger: 'change' }
          ],
          storepic: [
            { required: true, message: '请上传门店照片', trigger: 'change' }
          ],
          storelogo: [
            { required: true, message: '请上传门店Logo', trigger: 'change' }
          ]
        }
      };
    },
    methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
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
  .storepic {
  }
</style>