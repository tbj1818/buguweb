<template>
    <section>
        <div class="weixin-tip" v-if="chromeopen">
            <p><img src="../assets/images/wechatpic.png" width="100%" alt="微信浏览器打开"></p>
        </div>
        <div class="logo_nav container">
            <div class="logo">
                <a href="javascript:;"><img src="../assets/images/logo.png" /><span>Bugu</span></a>
            </div>
            <div class="nav_bg dropdown">
                <!-- nav 导航 -->
                <ul class="nav nav-pills dropdown-menu" id="navbar" aria-expanded="true">
                    <li role="presentation">
                        <router-link to="/">Home</router-link>
                    </li>
                    <li role="presentation">
                        <router-link to="/">About Bugu</router-link>
                    </li>
                    <li role="presentation">
                        <router-link to="/">Ecology</router-link>
                    </li>
                    <li role="presentation">
                        <router-link to="/">Route</router-link>
                    </li>
                    <li role="presentation">
                        <router-link to="/">Team</router-link>
                    </li>
                    <li role="presentation" class="load">
                        <router-link to="/">News</router-link>
                    </li>
                    <li role="presentation" class="active load">
                        <router-link to="/app">APP Download</router-link>
                    </li>
                    <li role="presentation" class="dropdown">
                        <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true"
                            aria-expanded="false">
                            简体中文 <span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu bluebg">
                            <li><a href="/app">简体中文</a></li>
                            <li><a href="/appen">EN</a></li>
                        </ul>
                    </li>
                </ul>
                <div class="menu-icon" data-toggle="dropdown" href="#" role="button" aria-haspopup="true"
                    aria-expanded="false">
                    <span class="glyphicon glyphicon-menu-hamburger dropdown-toggle"></span>
                </div>
            </div>
        </div>
        <section class="container blockMarT" style="margin-top:50px">
            <div class="row animatedParent">
                <div class="col-md-6">

                    <h4 class="media-heading  a00" style="font-size:30px">
                        <div class="lineW"></div>
                        Entertainment and investment platform<br> focusing on the digital world
                    </h4>
                    <section class="pcqrcode">
                        <p class="appload" style="margin-top:100px">
                            <img src="../assets/images/qrcodeweb.png" />
                        </p>
                        <p>
                            <a href="javascript:;" class="atcontact ">Scan</a><span
                                class="glyphicon glyphicon-arrow-down"></span>
                        </p>
                    </section>
                </div>
                <div class="col-md-6">
                    <img width="100%" class="earthpic" src="../assets/images/phoneimg.png" alt="img" />
                </div>
            </div>
        </section>
        <section class="col-md-12 appBtn">
            <button type="button" class="btn btn-primary"><a
                    href="itms-services://?action=download-manifest&url=https://bb.eqka.com/app/ios/manifest.plist"
                    target="_blank">ios Download</a></button>
            <button type="button" class="btn btn-android"><a
                    href="http://imgcdn.bb.eqka.com/bugu-pro.apk">Android Download</a></button>
            <p style="margin:20px 0 0 2.6%;color:#A1EFB7" @click="opentip()">ios download and installation tips<span
                    class="glyphicon glyphicon-chevron-right"></span></p>
        </section>

        <div class="opentip">
            <div class="clseico" @click="closebtn()"><img src="../assets/images/icon-guanbi@2x.png" alt="closebtn">
            </div>
            <div class="bluttext">Due to the limitation of IOS system, the first opening after installation will prompt "untrusted enterprises and developers". For normal use, please follow the following steps to set up trust.</div>
            <h1 style="margin:0 auto">After downloading and installing，Find "Shaa..." in "Universal" Equipment Management.Click Trust "Shaa..."</h1><img
                src="../assets/images/img-xinren@2x.png" alt="iphone提示">
            <h1 style="text-align:center">布谷公众号：布谷精灵</h1><a
                href="itms-services://?action=download-manifest&amp;url=https://bb.eqka.com/app/ios/manifest.plist"
                target="_blank" class="downloadBtn">Download and install</a>
        </div>
    </section>
</template>
<script>
    $(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 100);
        return false;
    })
    export default {
        name: 'home',
        data() {
            return {
                chromeopen: false
            }
        },
        methods: {
            opentip: function () {
                $('.opentip').show();
            },
            closebtn: function () {
                $('.opentip').hide();
            }
        },
        mounted() {
            if (navigator.userAgent.indexOf("MicroMessenger") >= 0) {
                this.chromeopen = true
            } else {
                this.chromeopen = false
            };
            //当点击跳转链接后，回到页面顶部位置
        $(".w-button-backToTop").click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 1000);
            return false;
        });
        },
        components: {
            // HelloWorld
        }
    }
</script>
<style scoped>
    .appBtn {
        display: none
    }

    @media (max-width:768px) {
        .appBtn {
            display: block
        }
        .appBtn .btn{font-size:16px}
        .animatedParent h4.media-heading {
            font-size: 38px;
            text-align: left;
            line-height: 50px;
            margin: 0
        }

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
            margin-bottom: 20px
        }
        .logo_nav {
            margin: 0 10px;
            left: 0
        }

        .lineW {
            margin-bottom: 10px
        }

        .col-md-6 {
            text-align: center
        }

        .blockMarT {
            margin: 10px auto 0 !important;
            padding: 0;
            height: auto
        }

        .lineG,
        .lineB,
        .lineR,
        .lineW {
            margin: 0
        }
    }
</style>