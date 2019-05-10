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
                            <img src="../assets/images/qcode.jpg" />
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
            <p style="margin-left:2.6%">ios下载安装提示<span class="glyphicon glyphicon-chevron-right"></span></p>
            <button type="button" class="btn btn-primary">ios下载</button>
            <button type="button" class="btn btn-android">Android下载</button>
        </section>
    </section>
</template>
<script>
$(function(){
      $('body,html').animate({ scrollTop: 0 }, 100);
        return false;
})
</script>
<style>
.appBtn{display:none}
    @media (max-width:768px) {
        .appBtn{display:block}
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
            margin-top: 60px;
        }
    }
</style>