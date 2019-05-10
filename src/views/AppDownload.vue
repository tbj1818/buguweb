<template>
    <section>
        <div class="logo_nav container">
            <div class="logo">
                <a href="#a00"><img src="../assets/images/logo.png" />Bugu</a>
            </div>
            <div class="nav_bg dropdown">
                <!-- nav 导航 -->
                <ul class="nav nav-pills dropdown-menu" id="navbar" aria-expanded="true">
                    <li role="presentation">
                        <router-link to="/">首页</router-link>
                    </li>
                    <li role="presentation">
                        <router-link to="/">关于布谷</router-link>
                    </li>
                    <li role="presentation">
                        <router-link to="/">生态介绍</router-link>
                    </li>
                    <li role="presentation">
                        <router-link to="/">发展路线</router-link>
                    </li>
                    <li role="presentation">
                        <router-link to="/">创始团队</router-link>
                    </li>
                    <li role="presentation" class="load">
                        <router-link to="/">新闻报道</router-link>
                    </li>
                    <li role="presentation" class="active load">
                        <router-link to="/appdownload">APP下载</router-link>
                    </li>
                    <li role="presentation" class="dropdown">
                        <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true"
                            aria-expanded="false">
                            CH-CN <span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu bluebg">
                            <li><a href="#">CH-CN</a></li>
                            <li><a href="#">EN</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        <section class="container blockMarT">
            <div class="row animatedParent">
                <div class="col-md-6">

                    <h4 class="media-heading  a00">
                        <div class="lineW"></div>专注数字世界<br>
                        的娱乐与投资平台
                    </h4>
                    <section class="pcqrcode">
                        <p class="appload" style="margin-top:100px">
                            <img src="../assets/images/qrcodeweb.jpg" />
                        </p>
                        <p>
                            <a href="javascript:;" class="atcontact ">扫码下载</a><span
                                class="glyphicon glyphicon-arrow-down"></span>
                        </p>
                    </section>
                </div>
                <div class="col-md-6">
                    <img width="100%" class="earthpic" src="../assets/images/earthpic.png" alt="img" />
                </div>
            </div>
        </section>
        <section class="col-md-12 appBtn">
            <p style="margin-left:2.6%"  @click="opentip()">ios下载安装提示<span class="glyphicon glyphicon-chevron-right"></span></p>
            <button type="button" class="btn btn-primary"><a href="itms-services://?action=download-manifest&url=https://bb.eqka.com/app/ios/manifest.plist" target="_blank">ios下载</a></button>
            <button type="button" class="btn btn-android"><a href="http://imgcdn.bb.eqka.com/bugu-pro.apk">Android下载</a></button>
        </section>

        <div class="opentip"><div class="clseico" @click="closebtn()"><img src="../assets/images/icon-guanbi@2x.png" alt="closebtn"></div><div class="bluttext">因ios系统限制，安装后首次打开会提示“不受信任的企业和开发者”，为了能正常使用，请按下面步骤设置信任。</div><h1 style="margin:0 auto">下载安装后，在 ＞＞通用＞＞设备管理中找到“Shaa...”＞＞点击信任 “ Shaa... ”</h1><img src="../assets/images/img-xinren@2x.png" alt="iphone提示"><h1 style="text-align:center">布谷公众号：布谷精灵</h1><a href="itms-services://?action=download-manifest&amp;url=https://bb.eqka.com/app/ios/manifest.plist" target="_blank" class="downloadBtn">下载安装</a></div>
    </section>
</template>
<script>
$(function(){
      $('body,html').animate({ scrollTop: 0 }, 100);
        return false;
})
export default {
    name: 'home',
    data() {
      return {
      }
    },
    methods: {
            opentip:function(){
                $('.opentip').show();
            },
            closebtn:function(){
                 $('.opentip').hide();
            }
    },
    mounted() {
      $('#navbar li.load').click(function () {
        window.location.reload();
      })
    },
    components: {
      // HelloWorld
    }
  }
</script>
<style>
.appBtn{display:none}
    @media (max-width:768px) {
        .appBtn{display:block}
        .animatedParent h4.media-heading{font-size:42px; text-align:left}
        .nav_bg,
        .pcqrcode,
        .contactUsBg {
            display: none
        }

        .earthpic {
            animation: none;
            width: 80%;
            margin: 0 auto;
        }

        .logo {
            width: 80%
        }

        .logo img {
            width: 30%;
            margin: 0 20px 0 0;
        }

        .logo_nav {
            margin: 0;
            left: 0
        }

        .col-md-6 {
            text-align: center
        }

        .blockMarT {
               margin: 50px auto 0 !important;padding:0;height:auto
        }
    }
</style>