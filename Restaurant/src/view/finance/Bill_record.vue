<template>
	<div>
		<div class="zongping">
			<img src="../../assets/Bell/3.jpg" alt="">
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
.zongping{
  border-bottom: 20px solid #f1f2f7;
}
.data{
border-bottom: 20px solid #f1f2f7;
}
.info{
}
</style>