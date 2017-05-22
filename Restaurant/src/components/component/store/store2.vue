<template>
  <div>
    <el-form :model="ruleForm1" :rules="rules1" ref="ruleForm1" label-width="100px" class="demo-ruleForm">
      <el-form-item label="证件类型" prop="region1">
        <el-select v-model="ruleForm1.region1" placeholder="身份证">
          <el-option label="身份证" value="rf1-1"></el-option>
          <el-option label="港澳居民来往内地通行证" value="rf1-2"></el-option>
          <el-option label="台胞证" value="rf1-3"></el-option>
          <el-option label="护照" value="rf1-4"></el-option>
        </el-select>
      </el-form-item>
      <div class="erji">
        <el-form-item label="真实姓名" prop="name1">
          <el-input style="width:218px" v-model="ruleForm1.name1"></el-input>
        </el-form-item>
        <el-form-item label="证件号码" prop="num1">
          <el-input style="width:218px" v-model="ruleForm1.num1"></el-input>
        </el-form-item>
        <el-form-item label="证件照片" prop="pic1">
          <img src="../../../assets/user_pic.jpg" alt="">
        </el-form-item>
      </div>  
    </el-form>
    <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
      <el-form-item label="主体资质" prop="region2">
        <el-select v-model="ruleForm2.region2" placeholder="营业执照">
          <el-option label="营业执照" value="rf2-1"></el-option>
          <el-option label="事业单位法人证书" value="rf2-2"></el-option>
          <el-option label="民办非企业单位登记证书" value="rf2-3"></el-option>
          <el-option label="社会团体法人登记证书" value="rf2-4"></el-option>
        </el-select>
      </el-form-item>
      <div class="erji">
        <el-form-item label="单位名称" prop="dwname2">
          <el-input style="width:500px" v-model="ruleForm2.dwname2"></el-input>
        </el-form-item>
        <el-form-item label="法定代表人" prop="name2">
          <el-input style="width:218px" v-model="ruleForm2.name2"></el-input>
        </el-form-item>
        <el-form-item label="注册号" prop="num2">
          <el-input style="width:218px" v-model="ruleForm2.num2"></el-input>
        </el-form-item>
        <el-form-item label="注册地址" prop="address2">
          <el-input style="width:218px" v-model="ruleForm2.address2"></el-input>
        </el-form-item>
        <el-form-item label="有效期" prop="time2">
          <el-date-picker
            v-model="ruleForm2.time2"
            type="date"
            placeholder="选择日期"
            :picker-options="pickerOptions0">
          </el-date-picker>
          <el-checkbox v-model="checked">永久</el-checkbox>
        </el-form-item>
        <el-form-item label="资质照片" prop="pic2">
          <img src="../../../assets/zizhi.jpg" alt="">
        </el-form-item>
      </div> 
    </el-form>
    <el-form :model="ruleForm3" :rules="rules3" ref="ruleForm3" label-width="100px" class="demo-ruleForm">
      <el-form-item label="行业资质" prop="region3">
        <el-select v-model="ruleForm3.region3" placeholder="餐饮服务许可证">
          <el-option label="餐饮服务许可证" value="rf3-1"></el-option>
          <el-option label="食品经营许可证" value="rf3-2"></el-option>
          <el-option label="食品流通许可证" value="rf3-3"></el-option>
          <el-option label="食品摊贩临时经营公示卡" value="rf3-4"></el-option>
          <el-option label="全国工业产品生产许可证" value="rf3-5"></el-option>
          <el-option label="小微餐饮分级证/登记凭证" value="rf3-6"></el-option>
          <el-option label="食品生产加工作坊准许证" value="rf3-7"></el-option>
          <el-option label="食品小作坊生产许可证" value="rf3-8"></el-option>
          <el-option label="食品小作坊登记证" value="rf3-9"></el-option>
          <el-option label="食品小作坊备案凭证" value="rf3-10"></el-option>
          <el-option label="食品生产加工小作坊核准证" value="rf3-11"></el-option>
          <el-option label="小作坊、小餐饮登记证/小摊点备案（登记）卡" value="rf3-12"></el-option>
          <el-option label="食品摊贩备案证明" value="rf3-13"></el-option>
          <el-option label="小作坊卫生许可证" value="rf3-14"></el-option>
          <el-option label="食品摊贩登记卡" value="rf3-15"></el-option>
          <el-option label="食品经营实名备案证" value="rf3-16"></el-option>
          <el-option label="小餐饮经营许可证" value="rf3-17"></el-option>
        </el-select>
      </el-form-item>
      <div class="erji">
        <el-form-item label="单位名称" prop="dwname3">
          <el-input style="width:500px" v-model="ruleForm3.dwname3"></el-input>
        </el-form-item>
        <el-form-item label="法定代表人" prop="name3">
          <el-input style="width:218px" v-model="ruleForm3.name3"></el-input>
        </el-form-item>
        <el-form-item label="许可证编号" prop="num3">
          <el-input style="width:218px" v-model="ruleForm3.num3"></el-input>
        </el-form-item>
        <el-form-item label="许可证地址" prop="address3">
          <el-input style="width:218px" v-model="ruleForm3.address3"></el-input>
        </el-form-item>
        <el-form-item label="有效期" prop="time3">
          <el-date-picker
            v-model="ruleForm3.time3"
            type="date"
            placeholder="选择日期"
            :picker-options="pickerOptions0">
          </el-date-picker>
          <el-checkbox v-model="checked">永久</el-checkbox>
        </el-form-item>
        <el-form-item label="资质照片" prop="pic3">
          <img src="../../../assets/zizhi2.jpg" alt="">
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        pickerOptions0: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        },
        checked: false,
        ruleForm1:{
          region1: '',
          name1: '',
          num1:'',
          pic1:''
        },
        ruleForm2:{
          region2: '',
          dwname2: '',
          name2: '',
          num2: '',
          address2: '',
          time2: '',
          pic2:''
        },
        ruleForm3:{
          region3: '',
          dwname3: '',
          name3: '',
          num3: '',
          address3: '',
          time3: '',
          pic3:''
        },
        rules1: {
          region1: [
            { required: true, message: '请选择证件类型', trigger: 'change' }
          ],
          name1: [
            { required: true, message: '请输入真实姓名', trigger: 'blur' }
          ],
          num1: [
            { required: true, message: '请输入证件号码', trigger: 'blur' }
          ],
          pic1: [
            { required: true, message: '请上传正价照片', trigger: 'blur' }
          ]
        },
        rules2: {
          region2: [
            { required: true, message: '请选择证件类型', trigger: 'change' }
          ],
          dwname2: [
            { required: true, message: '请输入单位名称', trigger: 'blur' }
          ],
          name2: [
            { required: true, message: '请输入法定代表人名称', trigger: 'blur' }
          ],
          num2: [
            { required: true, message: '请输入注册号', trigger: 'blur' }
          ],
          address2: [
            { required: true, message: '请输入注册地址', trigger: 'blur' }
          ],
          time2: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          pic2: [
            { required: true, message: '请上传正价照片', trigger: 'blur' }
          ]
        },
        rules3: {
          
        }
      };
    },
    methods: {
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
  .demo-ruleForm {
    .erji {
        width: 900px;
    margin: 0px 0 30px 30px;
    border: 1px solid #e6e6e6;
    padding: 10px;

  }
  }
  
</style>