<template>
  <div>
    <div class="card-box">
      <div class="card">
        <div class="pic">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAiCAYAAABBY8kOAAAABGdBTUEAALGPC/xhBQAAA0BJREFUSA3tVztrVEEU/s7cx26y2ZiXMRIVRYmQCBEhpSAELbSwUEypiCgiFoJ/QRvrPLAxnWARLETQCCm0UxGLgAETQywi2Tw0z7v3MeOZ2exuIDe72bWxyLD3zsyZc75vzpkzd2YJ/1C85XsdiKL7gLoARYdB8JRS30hgJLHPGiIaWM3Dk248e7fWA8GKFZTeE/1X9qcn+6CUFW9Gv2zQNadp8L0ep+HR9ScS8mG8cry0u/0VOtvGzKBtp2HxQ8JhxxSkzCIMfpuaCL6lrF6naeCDUFB34+Hipa3p7wUSN9kK220GMSLPmX8CQthwk22wnXrN64aIniv1oMZmolTrPoGka6IYj75FeurAqOk5TiOD1rIXAVbmRlDbcA5RsIDAm0aq5SITNUJGWe3ZoeySd9PWVscP2mipF1vg4puk1pGSkzxIsJx0QclJHoW38omB15Cs696Uk/HKz2ZYXV0uj16AAwTmuafYE5frnKmSPhQTyGiV5TUI/bmChaCEaSugoyIikCyAFBuClybFPjpcuxBWTXHIrB13OTMrIpJoNiCSvdCemUIWxGbWEXskrGJIc3pGa7oiIoU0JB0xJFGY24vaC7euk8kaYCfa4aRO5ibA7yhYNm0meV0Rkbby6bwxDvwlKBmYtn4lmMxOtBX6UbiMSG7opP/j2vbTiolCOgP9ABJZbxYakBkhHN5PVoqXI0Dgz/OzaEhJ0G2q718w6V2Yxi4bnriOhLTgqI8GMMAib1oNxbtSRTkCoiynyR23YfCFFlRFpM2y4gZC9MCVY7DUBBOEhoAZFwj0kmP2mEmmcsKqiXLmEbqwIbrwM+NjcnZh5urpRz2oG8zwJ2kzJfM0+V1X7FfVUrCw6jVFlB6aiyPRoBUnQ1Uz2SOqNmzabm+Nqo7eXuj+/9CZr/f4TADX3t11K84lz9/2Dd2mZoiW17Xizsr6jsGXwZKFj4aS42XPo7Odrrn3ff0R4MtU8eguiRozWDa9j7XxVZ1dOnag7Jxi4IsiPm2p5DQ/f/exuCLZG33FKlGILwslis1n4VsO/6WddMZnQuinbCF6U0rHtlpr+6LMxi3+w1HR/6M8qFBCSaEmjora4bwsrv4Le7AN7lQQRxgAAAAASUVORK5CYII=" alt="">
        </div>
        <div class="title">
          基础服务
        </div>
        <div class="content">
          <div class="itemon">
            <div class="line-text">
              <i class="el-icon-check"></i>顾客在线支付
            </div>
            <div class="line-text">
              <i class="el-icon-check"></i>在线结算
            </div>
          </div>
          <div class="itemoff">
            <div class="line-text">
              <i class="el-icon-close"></i>排名提升3颗星
            </div>
            <div class="line-text">
              <i class="el-icon-close"></i>专享活动
            </div>
            <div class="line-text">
              <i class="el-icon-close"></i>配送托管服务
            </div>
          </div>
        </div>
        <div class="choose-btn">
          <el-button >选 择</el-button>
        </div>
        <el-button type="text">免费</el-button>
      </div>
      <div class="card">
        <div class="pic">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAiCAYAAABBY8kOAAAABGdBTUEAALGPC/xhBQAAA0BJREFUSA3tVztrVEEU/s7cx26y2ZiXMRIVRYmQCBEhpSAELbSwUEypiCgiFoJ/QRvrPLAxnWARLETQCCm0UxGLgAETQywi2Tw0z7v3MeOZ2exuIDe72bWxyLD3zsyZc75vzpkzd2YJ/1C85XsdiKL7gLoARYdB8JRS30hgJLHPGiIaWM3Dk248e7fWA8GKFZTeE/1X9qcn+6CUFW9Gv2zQNadp8L0ep+HR9ScS8mG8cry0u/0VOtvGzKBtp2HxQ8JhxxSkzCIMfpuaCL6lrF6naeCDUFB34+Hipa3p7wUSN9kK220GMSLPmX8CQthwk22wnXrN64aIniv1oMZmolTrPoGka6IYj75FeurAqOk5TiOD1rIXAVbmRlDbcA5RsIDAm0aq5SITNUJGWe3ZoeySd9PWVscP2mipF1vg4puk1pGSkzxIsJx0QclJHoW38omB15Cs696Uk/HKz2ZYXV0uj16AAwTmuafYE5frnKmSPhQTyGiV5TUI/bmChaCEaSugoyIikCyAFBuClybFPjpcuxBWTXHIrB13OTMrIpJoNiCSvdCemUIWxGbWEXskrGJIc3pGa7oiIoU0JB0xJFGY24vaC7euk8kaYCfa4aRO5ibA7yhYNm0meV0Rkbby6bwxDvwlKBmYtn4lmMxOtBX6UbiMSG7opP/j2vbTiolCOgP9ABJZbxYakBkhHN5PVoqXI0Dgz/OzaEhJ0G2q718w6V2Yxi4bnriOhLTgqI8GMMAib1oNxbtSRTkCoiynyR23YfCFFlRFpM2y4gZC9MCVY7DUBBOEhoAZFwj0kmP2mEmmcsKqiXLmEbqwIbrwM+NjcnZh5urpRz2oG8zwJ2kzJfM0+V1X7FfVUrCw6jVFlB6aiyPRoBUnQ1Uz2SOqNmzabm+Nqo7eXuj+/9CZr/f4TADX3t11K84lz9/2Dd2mZoiW17Xizsr6jsGXwZKFj4aS42XPo7Odrrn3ff0R4MtU8eguiRozWDa9j7XxVZ1dOnag7Jxi4IsiPm2p5DQ/f/exuCLZG33FKlGILwslis1n4VsO/6WddMZnQuinbCF6U0rHtlpr+6LMxi3+w1HR/6M8qFBCSaEmjora4bwsrv4Le7AN7lQQRxgAAAAASUVORK5CYII=" alt="">
        </div>
        <div class="title">
          众包服务
        </div>
        <div class="content">
          <div class="itemon">
            <div class="line-text">
              <i class="el-icon-check"></i>顾客在线支付
            </div>
            <div class="line-text">
              <i class="el-icon-check"></i>在线结算
            </div>
            <div class="line-text">
              <i class="el-icon-check"></i>排名提升3颗星
            </div>
          </div>
          <div class="itemoff">
            <div class="line-text">
              <i class="el-icon-close"></i>专享活动
            </div>
            <div class="line-text">
              <i class="el-icon-close"></i>配送托管服务
            </div>
          </div>
        </div>
        <div class="choose-btn">
          <el-button >选 择</el-button>
        </div>
        <el-button type="text">收费明细</el-button>
      </div>
      <div class="card">
        <div class="pic">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAiCAYAAABBY8kOAAAABGdBTUEAALGPC/xhBQAAA0BJREFUSA3tVztrVEEU/s7cx26y2ZiXMRIVRYmQCBEhpSAELbSwUEypiCgiFoJ/QRvrPLAxnWARLETQCCm0UxGLgAETQywi2Tw0z7v3MeOZ2exuIDe72bWxyLD3zsyZc75vzpkzd2YJ/1C85XsdiKL7gLoARYdB8JRS30hgJLHPGiIaWM3Dk248e7fWA8GKFZTeE/1X9qcn+6CUFW9Gv2zQNadp8L0ep+HR9ScS8mG8cry0u/0VOtvGzKBtp2HxQ8JhxxSkzCIMfpuaCL6lrF6naeCDUFB34+Hipa3p7wUSN9kK220GMSLPmX8CQthwk22wnXrN64aIniv1oMZmolTrPoGka6IYj75FeurAqOk5TiOD1rIXAVbmRlDbcA5RsIDAm0aq5SITNUJGWe3ZoeySd9PWVscP2mipF1vg4puk1pGSkzxIsJx0QclJHoW38omB15Cs696Uk/HKz2ZYXV0uj16AAwTmuafYE5frnKmSPhQTyGiV5TUI/bmChaCEaSugoyIikCyAFBuClybFPjpcuxBWTXHIrB13OTMrIpJoNiCSvdCemUIWxGbWEXskrGJIc3pGa7oiIoU0JB0xJFGY24vaC7euk8kaYCfa4aRO5ibA7yhYNm0meV0Rkbby6bwxDvwlKBmYtn4lmMxOtBX6UbiMSG7opP/j2vbTiolCOgP9ABJZbxYakBkhHN5PVoqXI0Dgz/OzaEhJ0G2q718w6V2Yxi4bnriOhLTgqI8GMMAib1oNxbtSRTkCoiynyR23YfCFFlRFpM2y4gZC9MCVY7DUBBOEhoAZFwj0kmP2mEmmcsKqiXLmEbqwIbrwM+NjcnZh5urpRz2oG8zwJ2kzJfM0+V1X7FfVUrCw6jVFlB6aiyPRoBUnQ1Uz2SOqNmzabm+Nqo7eXuj+/9CZr/f4TADX3t11K84lz9/2Dd2mZoiW17Xizsr6jsGXwZKFj4aS42XPo7Odrrn3ff0R4MtU8eguiRozWDa9j7XxVZ1dOnag7Jxi4IsiPm2p5DQ/f/exuCLZG33FKlGILwslis1n4VsO/6WddMZnQuinbCF6U0rHtlpr+6LMxi3+w1HR/6M8qFBCSaEmjora4bwsrv4Le7AN7lQQRxgAAAAASUVORK5CYII=" alt="">
        </div>
        <div class="title">
          星火计划
        </div>
        <div class="content">
          <div class="itemon">
            <div class="line-text">
              <i class="el-icon-check"></i>顾客在线支付
            </div>
            <div class="line-text">
              <i class="el-icon-check"></i>在线结算
            </div>
            <div class="line-text">
              <i class="el-icon-check"></i>排名提升3颗星
            </div>
            <div class="line-text">
              <i class="el-icon-check"></i>专享活动
            </div>
          </div>
          <div class="itemoff">
            <div class="line-text">
              <i class="el-icon-close"></i>配送托管服务
            </div>
          </div>
        </div>
        <div class="choose-btn">
          <el-button >选 择</el-button>
        </div>
        <el-button type="text">收费明细</el-button>
      </div>
      <div class="card">
        <div class="pic">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAiCAYAAABBY8kOAAAABGdBTUEAALGPC/xhBQAAA0BJREFUSA3tVztrVEEU/s7cx26y2ZiXMRIVRYmQCBEhpSAELbSwUEypiCgiFoJ/QRvrPLAxnWARLETQCCm0UxGLgAETQywi2Tw0z7v3MeOZ2exuIDe72bWxyLD3zsyZc75vzpkzd2YJ/1C85XsdiKL7gLoARYdB8JRS30hgJLHPGiIaWM3Dk248e7fWA8GKFZTeE/1X9qcn+6CUFW9Gv2zQNadp8L0ep+HR9ScS8mG8cry0u/0VOtvGzKBtp2HxQ8JhxxSkzCIMfpuaCL6lrF6naeCDUFB34+Hipa3p7wUSN9kK220GMSLPmX8CQthwk22wnXrN64aIniv1oMZmolTrPoGka6IYj75FeurAqOk5TiOD1rIXAVbmRlDbcA5RsIDAm0aq5SITNUJGWe3ZoeySd9PWVscP2mipF1vg4puk1pGSkzxIsJx0QclJHoW38omB15Cs696Uk/HKz2ZYXV0uj16AAwTmuafYE5frnKmSPhQTyGiV5TUI/bmChaCEaSugoyIikCyAFBuClybFPjpcuxBWTXHIrB13OTMrIpJoNiCSvdCemUIWxGbWEXskrGJIc3pGa7oiIoU0JB0xJFGY24vaC7euk8kaYCfa4aRO5ibA7yhYNm0meV0Rkbby6bwxDvwlKBmYtn4lmMxOtBX6UbiMSG7opP/j2vbTiolCOgP9ABJZbxYakBkhHN5PVoqXI0Dgz/OzaEhJ0G2q718w6V2Yxi4bnriOhLTgqI8GMMAib1oNxbtSRTkCoiynyR23YfCFFlRFpM2y4gZC9MCVY7DUBBOEhoAZFwj0kmP2mEmmcsKqiXLmEbqwIbrwM+NjcnZh5urpRz2oG8zwJ2kzJfM0+V1X7FfVUrCw6jVFlB6aiyPRoBUnQ1Uz2SOqNmzabm+Nqo7eXuj+/9CZr/f4TADX3t11K84lz9/2Dd2mZoiW17Xizsr6jsGXwZKFj4aS42XPo7Odrrn3ff0R4MtU8eguiRozWDa9j7XxVZ1dOnag7Jxi4IsiPm2p5DQ/f/exuCLZG33FKlGILwslis1n4VsO/6WddMZnQuinbCF6U0rHtlpr+6LMxi3+w1HR/6M8qFBCSaEmjora4bwsrv4Le7AN7lQQRxgAAAAASUVORK5CYII=" alt="">
        </div>
        <div class="title">
          专送服务
        </div>
        <div class="content">
          <div class="itemon">
            <div class="line-text">
              <i class="el-icon-check"></i>顾客在线支付
            </div>
            <div class="line-text">
              <i class="el-icon-check"></i>在线结算
            </div>
            <div class="line-text">
              <i class="el-icon-check"></i>排名提升3颗星
            </div>
            <div class="line-text">
              <i class="el-icon-check"></i>专享活动
            </div>
            <div class="line-text">
              <i class="el-icon-check"></i>配送托管服务
            </div>
          </div>
          <div class="itemoff">
            
          </div>
        </div>
        <div class="choose-btn">
          <el-button >选 择</el-button>
        </div>
        <el-button type="text">收费明细</el-button>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        
      };
    },
    methods: {
      
    }
  }
</script>

<style scoped lang="scss">
.card-box {
  display: inline-block;
  .card {
    float:left;
    height: 452px;
    width: 200px;
    margin: 0 5px;
    border: 1px solid #e6e6e6;
    text-align: center;
    background: #fff;
    padding: 2px 10px;
    .pic {
      margin: 0 auto;
      height: 70px;
      line-height: 100px;
      text-align: center;
    }
    .title {
      display: inline-block;
      margin: 10px 0 30px;
      font-size: 16px;
      font-weight: 300;
      color: #333;
    }
    .content {
      width: 182px;
      margin: 0 auto;
      .itemon {
        .line-text {
          margin: 0 auto;
          width: 151px;
          height: 40px;
          line-height: 40px;
          text-align: left;
          color:#999;
          border-bottom: 1px dashed #ccc;
        }
        .line-text i {
          color: #3ed08c;
          margin-right: 5px;
        }
      }
      .itemoff {
        .line-text {
          margin: 0 auto;
          width: 151px;
          height: 40px;
          line-height: 40px;
          text-align: left;
          color:#ccc;
          border-bottom: 1px dashed #ccc;
        }
        .line-text i {
          color:#ccc;
          margin-right: 10px;
        }
      }
    }
    .choose-btn {
      margin: 0 auto;
      margin-top: 10px;
      line-height: 31px;
    }
  }
  .card:hover {
    box-shadow: 0 0 3px #0091ea;
  }
  .card:active {
    box-shadow: 0 0 3px #0091ea;
  }
}
  
</style>