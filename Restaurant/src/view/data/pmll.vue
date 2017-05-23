<template>
    <div class="store">
        <div class="zongping">
            <img src="../../assets/chats/pmll/1.jpg" alt="">
        </div>
        <div class="info">
            <img src="../../assets/chats/pmll/2.jpg" alt="">
        </div>
        <div class="info">
            <!-- <div id="chartLine" style="width:100%; height:400px;"></div> -->
            <img src="../../assets/chats/pmll/3.jpg" alt="">
        </div>
        <div class="info">
            <img src="../../assets/chats/pmll/4.jpg" alt="">
        </div>
    </div>
</template>

<script>
    import echarts from 'echarts'

    export default {
        data() {
            return {
                chartLine: null
            }
        },
        mounted: function () {
            var _this = this;
            //基于准备好的dom，初始化echarts实例
            this.chartLine = echarts.init(document.getElementById('chartLine'));

            this.chartLine.setOption({
                title: {
                    text: ''
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['营业额', '支出', '净收入', '有效订单', '无效订单', '客单价']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['2017.05.01', '2017.05.02', '2017.05.03', '2017.05.04', '2017.05.05', '2017.05.06', '2017.05.07']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name: '营业额',
                        type: 'line',
                        stack: '总量',
                        data: [120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name: '支出',
                        type: 'line',
                        stack: '总量',
                        data: [220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name: '净收入',
                        type: 'line',
                        stack: '总量',
                        data: [820, 932, 901, 934, 1290, 1330, 1320]
                    },
                     {
                        name: '有效订单',
                        type: 'line',
                        stack: '总量',
                        data: [820, 932, 901, 934, 1290, 1330, 1320]
                    },
                     {
                        name: '无效订单',
                        type: 'line',
                        stack: '总量',
                        data: [820, 932, 901, 934, 1290, 1330, 1320]
                    },
                     {
                        name: '客单价',
                        type: 'line',
                        stack: '总量',
                        data: [820, 932, 901, 934, 1290, 1330, 1320]
                    }
                ]
            });
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
        border-bottom: 20px solid #f1f2f7;
    }
}
</style>