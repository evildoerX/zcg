<template>
	<div class="store">
		<div class="zongping">
			<img src="../../assets/store/1.jpg" alt="">
		</div>
		<div class="data">
			<img src="../../assets/store/3.jpg" alt="">
		</div>
		<div class="info">
			<img src="../../assets/store/2.jpg" alt="">
		</div>
	</div>
</template>

<script>
	export default {
    data() {
      return {
        form: {
          radio3: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }

</script>

<style scoped lang="scss">
.store{
	// width: 1000px;
	// margin: 0 auto;
	.zongping{
	  border-bottom: 20px solid #f1f2f7;
	}
	.data{
	border-bottom: 20px solid #f1f2f7;
	}
	.info{
	}
}

</style>