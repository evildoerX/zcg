<template>
  <div class="card-box">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
        <div class="title">
          添加商品
        </div>
        <el-form-item label="商品名称" prop="name">
          <el-input style="width:300px" v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="商品照片" prop="pic">
          <el-upload
            class="upload"
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove">
            <i class="el-icon-upload"></i>
            <!-- <div class="el-upload__text">上传商品</div> -->
          </el-upload>
          <el-dialog v-model="dialogVisible" size="tiny">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
        </el-form-item>
        <el-form-item label="商品单价" prop="dj">
          <el-input style="width:150px" v-model="ruleForm.dj">
            <template slot="append">元</template>
          </el-input>
        </el-form-item>
        <el-form-item label="餐盒费" prop="chf">
          <el-input style="width:150px" v-model="ruleForm.chf">
            <template slot="append">元</template>
          </el-input>
        </el-form-item>
        <el-form-item label="商品库存" prop="kucun">
          <el-input style="width:100px" v-model="ruleForm.kucun"></el-input> / 
          <el-input style="width:100px" v-model="ruleForm.kucun"></el-input>
        </el-form-item>
        <el-form-item label="商品描述" prop="zh">
          <el-input style="width:300px" v-model="ruleForm.zh" type="textarea" :autosize="{ minRows: 2, maxRows: 4}"></el-input>
        </el-form-item>
        <div class="add_item">
          <el-button class="btn" type="primary" size="large">添加</el-button>
        </div>
    </el-form>
    <div class="item_panel">
      <div class="title">
        <span class="name">商品库</span>
        <span class="tip">至少添加10个商品</span>
        <el-button type="primary" size="small" >添批量加</el-button>
      </div>
      <div class="item_list">
        <div class="item">
          <div class="name">
            珍珠奶茶
          </div>
          <div class="price">
            ￥ 1.00
          </div>
          <div class="kucun">
            100/100
          </div>
          <div class="pic">
            <img class="img" src="https://fuss10.elemecdn.com/6/c5/aa2e9478d5db46d9592310c686715jpeg.jpeg" alt="">
          </div>
        </div>
        <div class="item">
          <div class="name">
            香草奶茶
          </div>
          <div class="price">
            ￥ 1.00
          </div>
          <div class="kucun">
            100/100
          </div>
          <div class="pic">
            <img class="img" src="https://fuss10.elemecdn.com/6/c5/aa2e9478d5db46d9592310c686715jpeg.jpeg" alt="">
          </div>
        </div>
        <div class="item">
          <div class="name">
            咖啡奶茶
          </div>
          <div class="price">
            ￥ 1.00
          </div>
          <div class="kucun">
            100/100
          </div>
          <div class="pic">
            <img class="img" src="https://fuss10.elemecdn.com/6/c5/aa2e9478d5db46d9592310c686715jpeg.jpeg" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false,
        radio: '1',
        ruleForm:{
          name: '',
          pic: '',
          dj: '',
          chf:'0',
          kucun:'100'
        },
        rules: {
          name: [
            { required: true, message: '请输入商品名称', trigger: 'blur' },
            { min: 0, max: 20, message: '长度在 0 到 20 个字符', trigger: 'blur' }
          ],
          pic: [
            { required: true, message: '请上传商品照片', trigger: 'blur' }
          ],
          dj: [
            { required: true, message: '请输入商品单价', trigger: 'blur' }
          ],
          chf: [
            { required: true, message: '请输入餐盒费', trigger: 'blur' }
          ],
          kucun: [
            { required: true, message: '请输入库存', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
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
  .card-box {
    width: 900px;
    // margin: 0px 0 10px 30px;
    border: 1px solid #e6e6e6;
    padding: 10px;
    position:relative;
    .title {
      color: #333;
      font-size: 25px;
      width: auto;
      margin: 10px 0px 20px 30px;
    }
    .add_item {
      margin: 10px 0px 20px 100px;
      .btn {
        width: 120px;
      }
    }
    .item_panel {
      position:absolute;
      top: 0px;
      right: 0px;
      width: 315px;
      height: calc(100%);
      // padding: 10px 0 0 20px;
      background-color: #f5f5f5;
      .title {
        .name {
          font-size: 16px;
          color: #666;
          margin-right: 5px;
        }
        .tip {
          font-size: 14px;
          color: #999;
          margin-right: 10px;
        }
      }
      .item_list{
        padding: 12px 12px 2px;
        .item{
          height:80px;
          position: relative;
          padding: 12px 12px 2px;
          background-color: #fff;
          margin-bottom: 10px;
          border-radius:5px;
          .name {
            width: 140px;
            font-size: 16px;
            font-weight: 700;
            color: #333;
          }
          .price {
            color: #f44336;
            font-weight: 700;
            margin-bottom: 5px;
          }
          .kucun {
            font-size: 12px;
            color: #999;
          }
          .pic {
            position:absolute;
            top: 12px;
            right:12px;
            width: 100px;
            height: 75px;
            .img {
            width: 100%;
            height: 100%;
            }
          }
        }
        .item:hover {
          box-shadow: 0 0 3px #0091ea;
        }
      }
    }
  }
</style>