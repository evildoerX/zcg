<template>
  <div>
    <div class="add_active">
      <el-button type="primary" icon="plus">新建满减活动</el-button>
    </div>
    <div class="active_list">
      <active />
    </div>
  </div>
</template>
<script>
import active from './active/active.vue'
  export default {
    components: {
      active
    },
    data() {
      return {
      };
    },
    methods: {
      
    }
  }
</script>

<style scoped lang="scss">
  .add_active {
    padding-bottom: 20px;
    border-bottom: 1px solid #e6e6e6;
  }
  .active_list {
    margin-top: 20px;
  }
</style>