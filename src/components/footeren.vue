<template>
  <!-- 联系我们 -->
  <section class="blockMarT" style="padding:0; height:auto">
    <section class="contactUsBg">
      <section class="container">
        <div class="col-md-3">
          <p class="blogo"><a href="#a00"><img src="../assets/images/logo.png" />Bugu</a></p>
          <p class="textleft">Entertainment and investment platform focusing on the digital world</p>
        </div>
        <div class="col-md-4">
          <ul class="list-group nonestyle col-md-6">
            <li class="list-group-item" style="font-size:20px; opacity: 1;"><strong>MENU</strong></li>
            <li class="list-group-item"><a href="javascript:;" id="a000">Home</a></li>
            <li class="list-group-item"><a href="javascript:;" id="a001">About Bugu</a></li>
            <li class="list-group-item"><a href="javascript:;" id="a002">Ecology</a></li>
            <li class="list-group-item"><a href="javascript:;" id="a003">Route</a></li>
            <li class="list-group-item"><a href="javascript:;" id="a004">Team</a></li>
            <li class="list-group-item"><a href="javascript:;" id="a005">News</a></li>
            <li class="list-group-item">
              <router-link to="/app">APPdownload</router-link>
            </li>
          </ul>
          <ul class="list-group nonestyle col-md-6">
            <li class="list-group-item" style="font-size:20px; opacity: 1;"><strong>Partners</strong></li>
            <li class="list-group-item"><a href="https://www.jinse.com/member/254145" target="_blank">Jinse Finance</a></li>
            <li class="list-group-item"><a href="http://www.pipiwan.com/" target="_blank">Pippiwan</a></li>
            <li class="list-group-item"><a href="http://www.bitcv.com/" target="_blank">BCV Wallet</a></li>
            <li class="list-group-item"><a href="https://www.bishijie.com/kuaixun/" target="_blank">Bishijie</a></li>
            <li class="list-group-item"><a href="javascript:;" target="_blank">GIFT.ONE</a></li>
            <li class="list-group-item"><a href="javascript:;" target="_blank">NOC Ventures</a></li>
          </ul>
        </div>
        <div class="col-md-5">
          <ul class="list-group nonestyle">
            <li class="list-group-item" style="font-size:20px; opacity: 1;"><strong>联系方式</strong></li>
            <li class="list-group-item">
              <div class="footer-weixin">
                <section class="hicon">
                  <a href="https://t.me/Bugu_oneCN" target="_blank">
                    <figure class="qq-logo-icon"><img src="../assets/images/icon-telegram-sel@2x.png" /></figure>
                  </a>
                </section>
              </div>
              <div class="footer-weixin">
                <section class="hicon">
                  <a href="https://www.facebook.com/buguone" target="_blank">
                   <figure class="qq-logo-icon"><img src="../assets/images/icon-fb-sel@2x.png" /></figure>
                  </a>
                </section>
              </div>
              <div class="footer-weixin">
                <section class="hicon">
                  <a href="https://twitter.com/Buguofficial" target="_blank">
                    <figure class="qq-logo-icon"><img src="../assets/images/icon-t-sel@2x.png" /></figure>
                  </a>
                </section>
              </div>
              <div class="footer-weixin">
                <section class="hicon">
                  <a href="https://medium.com/@Buguofficial" target="_blank">
                    <figure class="qq-logo-icon"><img src="../assets/images/icon-medium-sel@2x.png" /></figure>
                  </a>
                </section>
              </div>
              <div class="footer-weixin">
                <section class="hicon">
                  <a href="https://www.jinse.com/member/254145" target="_blank">
                    <figure class="qq-logo-icon"><img src="../assets/images/icon-jinse-sel@2x.png" /></figure>
                  </a>
                </section>
              </div>
              <div class="footer-weixin">
                <section class="hicon">
                  <a href="https://weibo.com/u/7095183069" target="_blank">
                     <figure class="qq-logo-icon"><img src="../assets/images/icon-wb-sel@2x.png" /></figure>
                  </a>
                </section>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </section>
    <button class="w-button w-button-round w-button-backToTop" id="backToTop" style="display: block;">返回顶部</button>
  </section>
</template>
<script>
  export default {
    data() {
      return {
        active: 0
      }
    },
    methods: {

    }
  }
</script>
<style scoped>
.textleft{line-height:28px !important}
</style>