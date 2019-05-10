<template>
    <section>
        <div class="logo_nav container">
            <div class="logo">
                <a href="#a00"><img src="../assets/images/logo.png" />Bugu</a>
            </div>
            <div class="nav_bg dropdown">
                <!-- nav 导航 -->
                <ul class="nav nav-pills dropdown-menu" id="navbar" aria-expanded="true">
                    <li role="presentation" class="load">
                        <router-link to="/">首页</router-link>
                    </li>
                    <li role="presentation"  class="load">
                        <router-link to="/">关于布谷</router-link>
                    </li>
                    <li role="presentation"  class="load">
                        <router-link to="/">生态介绍</router-link>
                    </li>
                    <li role="presentation"  class="load">
                        <router-link to="/">发展路线</router-link>
                    </li>
                    <li role="presentation"  class="load">
                        <router-link to="/">创始团队</router-link>
                    </li>
                    <li role="presentation" class="active load">
                        <router-link to="/">新闻报道</router-link>
                    </li>
                    <li role="presentation">
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
        <section class="container animatedParent">
            <div class="newscontent">
                <img src="../assets/images/newsimg.png" />
                <section class="cont">
                    <h1>布谷生态系统是一个以游戏开发者提供游戏</h1>
                    <h6>2019年5月10日 14:01:34</h6>
                    <div class="newstext">

                        布谷生态系统是一个以游戏开发者提供游戏，社区节点审核分发，玩家体验推广为主要逻辑，立足于游戏产业的去中心化的共享生态，主要针对中小型发行商、中小型 CP、所有游戏玩家、IP
                        生产者、渠道商、合作者等所共同打造的一个生态系统。布谷以用户体验为中心，以生态可持续发展为目标，让用户、开放商、发行商等生态参与者都能够根据其对生态做出贡献而得到奖励。
                        <p style="width:80%; margin:30px auto">
                            <img src="http://img5.imgtn.bdimg.com/it/u=2225506839,3530858928&fm=26&gp=0.jpg" />
                        </p>
                        布谷生态系统是一个以游戏开发者提供游戏，社区节点审核分发，玩家体验推广为主要逻辑，立足于游戏产业的去中心化的共享生态，主要针对中小型发行商、中小型 CP、所有游戏玩家、IP
                        生产者、渠道商、合作者等所共同打造的一个生态系统。布谷以用户体验为中心，以生态可持续发展为目标，让用户、开放商、发行商等生态参与者都能够根据其对生态做出贡献而得到奖励。
                        布谷生态系统是一个以游戏开发者提供游戏，社区节点审核分发，玩家体验推广为主要逻辑，立足于游戏产业的去中心化的共享生态，主要针对中小型发行商、中小型 CP、所有游戏玩家、IP
                        生产者、渠道商、合作者等所共同打造的一个生态系统。布谷以用户体验为中心，以生态可持续发展为目标，让用户、开放商、发行商等生态参与者都能够根据其对生态做出贡献而得到奖励。
                        布谷生态系统是一个以游戏开发者提供游戏，社区节点审核分发，玩家体验推广为主要逻辑，立足于游戏产业的去中心化的共享生态，主要针对中小型发行商、中小型 CP、所有游戏玩家、IP 生产者、渠道商。

                    </div>
                </section>
            </div>

        </section>
    </section>
</template>
<script>
$(function(){
      $('body,html').animate({ scrollTop: 0 }, 100);
        return false;
})
</script>