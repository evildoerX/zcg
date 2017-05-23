<template>
  <div>
    <div class="card">
      <div class="item">
          <img src="../../../assets/item/1.jpg" height="123" width="278" alt="">
          <div class="kucun">
            {{n1}}/10000
          </div>
          <div class="btn-box">
            <el-button-group class="btn1">
              <el-button type="success" size="small" @click="man1">置满</el-button>
              <el-button size="small" @click="qing1">沽清</el-button>
            </el-button-group>
            <el-button class="btn2" type="primary" size="small" @click="edititem">编辑</el-button>
          </div>
      </div>
    </div>
    <div class="card">
      <div class="item">
          <img src="../../../assets/item/2.jpg" height="123" width="278" alt="">
          <div class="kucun">
            {{n2}}/10000
          </div>
          <div class="btn-box">
            <el-button-group class="btn1">
              <el-button type="success" size="small" @click="man2">置满</el-button>
              <el-button size="small" @click="qing2">沽清</el-button>
            </el-button-group>
            <el-button class="btn2" type="primary" size="small" @click="edititem">编辑</el-button>
          </div>
      </div>
    </div>
    <div class="card">
      <div class="item">
          <img src="../../../assets/item/3.jpg" height="123" width="278" alt="">
          <div class="kucun">
            {{n3}}/10000
          </div>
          <div class="btn-box">
            <el-button-group class="btn1">
              <el-button type="success" size="small" @click="man3">置满</el-button>
              <el-button size="small" @click="qing3">沽清</el-button>
            </el-button-group>
            <el-button class="btn2" type="primary" size="small" @click="edititem">编辑</el-button>
          </div>
      </div>
    </div>
    <div class="card">
      <div class="item">
          <img src="../../../assets/item/7.jpg" height="123" width="278" alt="">
          <div class="kucun">
            {{n4}}/10000
          </div>
          <div class="btn-box">
            <el-button-group class="btn1">
              <el-button type="success" size="small" @click="man4">置满</el-button>
              <el-button size="small" @click="qing4">沽清</el-button>
            </el-button-group>
            <el-button class="btn2" type="primary" size="small" @click="edititem">编辑</el-button>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    components: {

    },
    data() {
      return {
        n1:'500',
        n2:'0',
        n3:'100',
        n4:'1000'
      };
    },
    methods: {
      edititem(){
        this.$router.push('/itemedit');
      },
      man1() {
        this.n1=10000;
      },
      qing1(){
        this.n1=0;
      },
      man2() {
        this.n2=10000;
      },
      qing2(){
        this.n2=0;
      },
      man3() {
        this.n3=10000;
      },
      qing3(){
        this.n3=0;
      },
      man4() {
        this.n4=10000;
      },
      qing4(){
        this.n4=0;
      }
    }
  };
</script>

<style scoped lang="scss">
  .card {
    float: left;
    width: 290px;
    height:180px;
    border: 1px solid #dfe6ec;
    border-radius: 5px;
    margin:10px;
    .kucun {
      padding: 10px;
      margin-top:-40px;
    }
    .btn1 {
      padding: 10px;
    }
    .btn2 {
      margin-left: 110px;
    }
  }
  .card:hover {
    box-shadow: 0 0 3px #0091ea;
  }
</style>