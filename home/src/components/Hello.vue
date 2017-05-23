<template>
  <div class="hello">
    <div class="modal fade modal-opacity single in" id="preview-group-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: block; padding-left: 0px;">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-body clearfix">
                    <div class="phone-box phone-320 phone-preview">
                      <div class="phone-header"></div>
                      <div class="phone-topbar"><a class="topbar-back">返回</a></div>
                      <div class="phone-body">
                        <div class="phone-wrapper-scroll">
                          <img id="pre-loading" class="preload-img" src="app/images/preloader.gif" style="display: none;">
                          <iframe frameborder="0" id="phone-preview-iframe2" name="phone-preview-iframe2" src="http://oneitfarm.com/utemplate/main.php?action=tpl_view.html&amp;appkey=rjtwfgeqm2ankhx91wcp3hkeycujiutl&amp;channel=1&amp;id=4175" style="width: 100%; display: block;" height="517">
                          </iframe>
                        </div>
                      </div>
                      <div class="phone-footer"></div>
                    </div>
                    <div class="info-box">
                        <div class="qrcode-box">
                            <img id="preview-group-qurl" src="qrcode.php?content=http%3A%2F%2Foneitfarm.com%2Futemplate%2Fmain.php%3Faction%3Dtpl_view.html%26appkey%3Drjtwfgeqm2ankhx91wcp3hkeycujiutl%26channel%3D1%26id%3D4175" alt="二维码" class="qrcode">
                            <p>您可以在线预览，或扫描二维码访问站点</p>
                            <button class="btn" id="preview-enter-btn">立即进入</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

</script>

<style scoped >
.phone-box {
    margin: 0 auto;
    width: 403px;
    border: 1px solid #e3e8eb;
    border-radius: 30px;
    -webkit-box-shadow: 0 1px 10px rgba(0,0,0,.2);
    -moz-box-shadow: 0 1px 10px rgba(0,0,0,.2);
    box-shadow: 0 1px 10px rgba(0,0,0,.2);
    background-color: #fff;
    overflow: hidden;
}
.phone-box .phone-header {
    width: 100%;
    height: 42px;
    border-bottom: #e2e2e2 2px solid;
    text-align: center;
    padding-top: 8px;
}
.phone-box .phone-topbar {
    width: 100%;
    height: 44px;
    line-height: 44px;
    background: #1a191f;
    padding: 0 12px;
}
.modal-content .phone-box.phone-320 .phone-wrapper-scroll {
    width: 320px;
    min-height: 517px;
    height: 517px;
    /*background: url(../images/img/blank.4d4de209.png) no-repeat;*/
}
.phone-box .phone-footer {
    width: 100%;
    height: 67px;
    border-top: #e2e2e2 2px solid;
    text-align: center;
    padding-top: 11px;
}
.modal-content .info-box {
    position: relative;
    float: left;
    width: 425px;
    height: 517px;
    margin: 108px 0 0 70px;
    background-color: #fff;
    border-radius: 8px;
    padding: 0 29px;
}
</style>
