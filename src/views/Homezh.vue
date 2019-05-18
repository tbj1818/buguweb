<template>
  <section>
    <section class="pcblock">
      <div class="logo_nav container">
        <div class="logo" name="a00">
          <a href="javascript:;"><img src="../assets/images/logo.png" /><span>Bugu</span></a>
        </div>
        <div class="nav_bg dropdown">
          <!-- nav 导航 -->
          <ul class="nav nav-pills dropdown-menu" id="navbar" aria-expanded="true">
            <li role="presentation" class="active load"><a id="a00" href="javascript:;">首页</a></li>
            <li role="presentation" class="load"><a id="a01" href="javascript:;">关于布谷</a></li>
            <li role="presentation" class="load"><a id="a02" href="javascript:;">生态介绍</a></li>
            <li role="presentation" class="load"><a id="a03" href="javascript:;">发展路线</a></li>
            <li role="presentation" class="load"><a id="a04" href="javascript:;">团队</a></li>
            <li role="presentation" class="load"><a id="a05" href="javascript:;">新闻</a></li>
            <li role="presentation">
              <router-link to="/app">APP下载</router-link>
            </li>
            <li role="presentation" class="dropdown">
              <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true"
                aria-expanded="false">
                EN <span class="caret"></span>
              </a>
              <ul class="dropdown-menu bluebg">
                <li><a href="/zh">中文简体</a></li>
                <li><a href="/">EN</a></li>
              </ul>
            </li>
          </ul>
          <div class="menu-icon" data-toggle="dropdown" href="#" role="button" aria-haspopup="true"
            aria-expanded="false">
            <span class="glyphicon glyphicon-menu-hamburger dropdown-toggle"></span>
          </div>
        </div>
      </div>
      <section class="container blockMarT" style="padding:0" name="a01">
        <div class="row animatedParent">
          <div class="col-md-6">
            <h4 class="media-heading a00 hh1">
              <div class="lineW"></div>
              打造开放、共享、<br>
              共生、共创、共赢<br>
              游戏新生态
            </h4>
            <p class="text">
              专注数字世界的娱乐与投资平台
            </p>

            <p class="pcenter">
              <a href="/buguwhitepaper.pdf" style="cursor: pointer;"
                class="atcontact ">下载白皮书</a><span class="glyphicon glyphicon-arrow-down"></span>
            </p>
          </div>
          <div class="col-md-6">
            <img width="100%" class="earthpic" src="../assets/images/earthpic.png" alt="img" />
          </div>
        </div>
      </section>

      <section class="container animatedParent blockMarT">
        <div class="row animatedParent">
          <div class="col-md-6 animated bounceInLeft a01">
            <ul class="fourlist">
              <li>
                <span class="badgepic"><img class="ypic" src="../assets/images/icon-one-def@2x.png">
                  <img class="wpic" src="../assets/images/icon-one-sel.png" />
                </span>
                去中心化数字交易平台
              </li>
              <li>
                <span class="badgepic"><img class="ypic" src="../assets/images/icon-two-def@2x.png">
                  <img class="wpic" src="../assets/images/icon-two-sel.png" />
                </span>
                游戏虚拟资产确权
              </li>
              <li>
                <span class="badgepic"><img class="ypic" src="../assets/images/icon-three-def@2x.png"><img class="wpic"
                    src="../assets/images/icon-three-sel.png" /></span>

                大数据分发平台
              </li>
              <li>
                <span class="badgepic"><img class="ypic" src="../assets/images/icon-four-def@2x.png"><img class="wpic"
                    src="../assets/images/icon-four-sel.png" /></span>

                IP共创、孵化
              </li>
            </ul>
          </div>
          <div class="col-md-6 animated bounceInRight">

            <h4 class="media-heading  animated bounceInDown">
              <div class="lineR"></div>关于布谷
            </h4>
            <p class="text">
              布谷生态系统是一个以游戏开发者提供游戏，社区节点审核分发，玩家体验推广为主要逻辑，针对中小型发行商、中小型CP、所有游戏玩家、IP
              生产者、渠道商、合作者等生态参与者共同打造的一个生态系统。布谷以用户体验为中心，以生态可持续发展为目标，让用户、开发商、发行商等生态参与者都能够根据其对生态做出贡献而得到奖励。布谷旨在构建一个开放、共享、共生、共创的游戏行业生态。
            </p>
          </div>
        </div>
      </section>

      <section class="container blockMarT">
        <div class="animatedParent">
          <div class="textstart animated bounceInDown a02">
            <div class="lineR"></div>
            <h4 class="media-heading ">生态介绍</h4>
          </div>
          <section class="shtjiaoshao animated bounceInLeft">
            <div class="row blockMarTop">
              <div class="col-lg-4">
                <img src="../assets/images/icon-canyu-one.png" alt="生态参与者" title="生态参与者">
                <h3>生态参与者</h3>
                <div class="lineB"></div>
                <p class="text">布谷生态系统中涉及到了诸多参与者，他们都是布谷成功运行的关键角色。在这个以区块链为底层技术的去中心化技术环境下，每个参与者都可以通过贡献价值来参与到布谷生态的建设中。</p>

              </div>
              <div class="col-lg-4">
                <img src="../assets/images/icon-jiagou-two.png" alt="生态架构与逻辑" title="生态架构与逻辑">
                <h3>生态架构与逻辑</h3>
                <div class="lineR"></div>
                <p class="text">
                  布谷生态以区域子公司、创业孵化器、创投基金为基石，生态内的核心平台包括：布谷社区、虚拟币结算中心、大数据分发平台、布谷游戏、推广者联盟、开发者联盟、IP孵化中心等，在此基础上开展了一系列的孵化业务。
                </p>
              </div>
              <div class="col-lg-4">
                <img src="../assets/images/icon-zhili-three.png" alt="生态治理架构" title="生态治理架构">
                <h3>生态治理架构</h3>
                <div class="lineG"></div>
                <p class="text">布谷生态基金会提供社区的初始启动资金，进行布谷生态的建设，对平台的开源、生 态建设审议等进行管理；同时致力于项目本身的财务、团队建设、对外关系等，使得项目更好的运行。</p>

              </div>
            </div>
          </section>
        </div>
      </section>
      <section class="container blockMarT animatedParent" style="padding:50px 0">
        <div class="textstart animated bounceInDown a03">
          <div class="lineG marauto"></div>
          <h4 class="media-heading ">发展路线</h4>
        </div>
        <div class="linepic"><img src="../assets/images/linepic.png" alt="line" />
          <div class="timeLine animated bounceInDown">
            <ul>
              <li>
                <section class="bottext">
                  <h1>2018-Q2</h1>
                  <p class="text">Bugu开始策划并立项</p>
                </section>
              </li>
              <li>
                <section class="bottext">
                  <h1>2018-Q4</h1>
                  <p class="text">游戏开发者平台发布</p>
                </section>
              </li>
              <li>
                <section class="bottext">
                  <h1>2019-Q2</h1>
                  <p class="text">获得两家知名投资机构战略投资</p>
                </section>
              </li>
              <li>
                <section class="bottext">
                  <h1>2019-Q4</h1>
                  <p class="text">第三方游戏开发者平台发布</p>
                </section>
              </li>
            </ul>
          </div>
          <div class="timeLine2 animated bounceInLeft">
            <ul>
              <li>
                <section class="bottext">
                  <h1>2018-Q3</h1>
                  <p class="text">布谷APP 1.0.0版本发布</p>
                </section>
              </li>
              <li>
                <section class="bottext">
                  <h1>2019-Q1</h1>
                  <p class="text">与皮皮玩达成战略合作</p>
                </section>
              </li>
              <li>
                <section class="bottext">
                  <h1>2019-Q3</h1>
                  <p class="text">去中心化游戏分发平台发布</p>
                </section>
              </li>
              <li>
                <section class="bottext">
                  <h1>2020</h1>
                  <p class="text">主链+侧链机制试运行</p>
                </section>
              </li>
            </ul>
          </div>
        </div>
      </section>


      <section class="container blockMarT animatedParent" style="padding:0">
        <div class="animated bounceInDown a04">
          <div class="textstart">
            <div class="lineR"></div>
            <h4 class="media-heading ">团队</h4>
          </div>
        </div>
        <!-- 套餐 -->
        <section class="animatedParent">
          <div class="row blockMarTop peoplethree">
            <!--begin col-md-4 -->
            <div class="col-md-4 animated bounceInLeft">
              <!--begin pricing-box -->
              <div class="pricing-box-green">
                <!--begin pricing-top -->
                <div class="pricing-top ">
                  <h3><img src="../assets/images/img-rob@2x.png" /></h3>
                  <h6>Rob Wilson</h6>
                  <img src="../assets/images/peopleline.png" />
                  <h2>创始人 首席执行官</h2>
                  <p class="price textgray">芝加哥大学应用数学及金融学硕士，金融工程师， 拥有多...</p>
                </div>
                <!--end pricing-top -->
                <div class="peopletext">
                  <h6>Rob Wilson</h6>
                  <h2>创始人 首席执行官</h2>
                  <p class="price textgray">芝加哥大学应用数学及金融学硕士，金融工程师， 拥有多年金融科技、IT 开发和产品管理、网络工程和信息安全建设等领域经验和成果。Rob
                    Wilson与2011年开始对云计算环境中的加密协议、 区块链及加密货币的相关技术，进行深入研究。</p>
                </div>
              </div>
              <!--end pricing-box -->
            </div>
            <!--end col-md-4 -->
            <!--begin col-md-4 -->
            <div class="col-md-4 animated bounceInLeft ">
              <!--begin pricing-box -->
              <div class="pricing-box-green">
                <!--begin pricing-top -->
                <div class="pricing-top">
                  <h3><img src="../assets/images/img-kevin@2x.png" /></h3>
                  <h6>Kevin  Wu</h6>
                  <img src="../assets/images/peopleline.png" />
                  <h2>联合创始人 首席运营官</h2>
                  <p class="price textgray">浙江大学法学学士，游戏领域连续创业者，比特币早期投...</p>
                </div>
                <!--end pricing-top -->
                <div class="peopletext">
                  <h6>Kevin  Wu</h6>
                  <h2>联合创始人 首席运营官</h2>
                  <p class="price textgray">
                    浙江大学法学学士，游戏领域连续创业者，比特币早期投资者，在区块链咨询和项目孵化方面有着丰富的经验，并专注于区块链技术与游戏融合方面的研究。2012年起开始专注于始全球区项目块战略投资。
                  </p>
                </div>
              </div>
              <!--end pricing-box -->
            </div>
            <!--end col-md-4 -->
            <!--begin col-md-4 -->
            <div class="col-md-4 animated bounceInLeft ">
              <!--begin pricing-box -->
              <div class="pricing-box-green ">
                <!--begin pricing-top -->
                <div class="pricing-top ">
                  <h3><img src="../assets/images/img-andy@2x.png" /></h3>
                  <h6>Andy  Du</h6>
                  <img src="../assets/images/peopleline.png" />
                  <h2>市场营销官</h2>
                  <p class="price textgray">西北大学哲学硕士，多年互联网产品营销推广经验，有...</p>
                </div>
                <!--end pricing-top -->
                <div class="peopletext">
                  <h6>Andy  Du</h6>
                  <h2>市场营销官</h2>
                  <p class="price textgray">
                    西北大学哲学硕士，资深媒体从业者，在品牌营销和市场推广方面有丰富的经验。曾任知名区块链基金合伙人，专注于对区块链技术和加密经济的研究，并投资过多个顶级区块链项目。
                    2014年进入区块链行业，一直致力于项目孵化、投资并购以及市场推广等相关工作。
                  </p>
                </div>
              </div>
              <!--end pricing-box -->
            </div>
            <!--end col-md-4 -->
          </div>
        </section>
      </section>
      <section class="container blockMarT animatedParent">
        <div class="animated bounceInDown a05">
          <div class="textstart">
            <div class="lineB"></div>
            <h4 class="media-heading">新闻</h4>
          </div>
        </div>
        <div class="row blockMarTop">
          <!--begin col-md-4 -->
          <div class="col-md-4  animated bounceInRight">
            <section class="newspic" data-toggle="modal" data-target=".bs-example-modal-lg">
              <!-- <router-link to="/news"> -->
              <img src="../assets/images/one.png" />
              <div class="bottomText">
                <h1>BUGUChain社区蓬勃发展</h1>
                <p>BUGUChain社区蓬勃发展，注册用户超...</p>
              </div>
              <div class="peopletext2 newspichover" to="/news">
                <h6>BUGUChain社区蓬勃发展</h6>
                <p class="price textgray">
                  UGUChain社区蓬勃发展，注册用户超20万 据BUGUChain（布谷链）COO Kevin Wu...
                </p>
                <p class="bottomtime">2019-05-09 17:01:07</p>
              </div>
              <!-- </router-link> -->
            </section>
          </div>
          <div class="col-md-4 animated bounceInRight">
            <section class="newspic" data-toggle="modal" data-target=".bs-example-modal-lg3">

              <img src="../assets/images/two.png" />
              <div class="bottomText">
                <h1>BGT上所前空投 布谷APP最强</h1>
                <p>BGT上线交易所前最后一次空投即将在...</p>
              </div>
              <div class="peopletext2 newspichover">
                <h6>BGT上所前空投 布谷APP最强福利</h6>
                <p class="price textgray">
                  BGT上线交易所前最后一次空投即将在今天下午启航，预计5月中旬上线知名交...
                </p>
                <p class="bottomtime">2019-05-09 17:01:07</p>
              </div>

            </section>
          </div>
          <div class="col-md-4 animated bounceInRight">
            <section class="newspic" data-toggle="modal" data-target=".bs-example-modal-lg2">

              <img src="../assets/images/three.png" />
              <div class="bottomText">
                <h1>日本游戏启示录：美术、游戏性</h1>
                <p>日本游戏启示录：美术、游戏性、题材......</p>
              </div>
              <div class="peopletext2 newspichover">
                <h6>日本游戏启示录：美术、游戏性、题材...</h6>
                <p class="price textgray">
                  如果你是游戏死忠粉，一定不会对“雅达利大崩溃”感到陌生...
                </p>
                <p class="bottomtime">2019-05-09 17:01:07</p>
              </div>

            </section>
          </div>

        </div>
      </section>

      <!-- 模态窗 -->
      <div class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <section class="animatedParent">
              <div class="newscontent">
                <!-- <img src="../assets/images/newsimg.png" /> -->
                <section class="cont">
                  <h1>BUGUChain社区蓬勃发展 注册用户超20万</h1>
                  <h6>发布于 2019-05-10 17:34</h6>
                  <div class="newstext">
                    <div class="newstitle">BUGUChain社区蓬勃发展 注册用户超20万</div>
                    BUGUChain社区蓬勃发展，注册用户超20万
                    据BUGUChain（布谷链）COO Kevin Wu透露，布谷APP累计注册用户规模超20万人。Kevin
                    Wu表示：“布谷社区用户的建设和活跃驱动了布谷链的快速迭代，社区用户、玩家及游戏开发者均能享受到生态发展带来的娱乐价值和经济价值，布谷生态目前正在蓬勃发展”。
                    <p style="width:100%; margin:30px auto">
                      <img src="../assets/images/newsbanner.png" />
                    </p>
                    <p>文章作者： 布谷星球</p>
                    <div class="newsgzhh">
                      <img src="../assets/images/qrcodegzhh.jpg" />
                      <h1>布谷公众号</h1>
                      <p>更多新闻！欢迎扫描左方二维码关注布谷公众号</p>
                    </div>
                  </div>
                </section>
              </div>
            </section>
          </div>
        </div>
      </div>
      <!-- 模态窗 -->
      <div class="modal fade bs-example-modal-lg2" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <section class="animatedParent">
              <div class="newscontent">
                <!-- <img src="../assets/images/newsimg.png" /> -->
                <section class="cont">
                  <h1>日本游戏启示录：美术、游戏性、题材...当下的链游缺什么？</h1>
                  <h6>发布于 2019-05-10 17:34</h6>
                  <div class="newstext">
                    <div class="newstitle">日本游戏启示录：美术、游戏性、题材...当下的链游缺什么？</div>
                    如果你是游戏死忠粉，一定不会对“雅达利大崩溃”感到陌生。<br>

                    1982年，由华纳斥巨资买下授权，当年家用机巨头雅达利亲自开发的电影改编游戏《E.T.外星人》本来会成为圣诞节的畅销货，但玩家们购买后却发现这只是用6个星期时间赶工出来的垃圾，于是纷纷退款。
                    <br>
                    大量同质化严重、粗制滥造的游戏已经让人们对家用机市场失去了信心，这个导火索无疑导致了雅达利的末日降临。
                    <br>
                    1983年，几百万盘滞销的《E.T.》游戏卡带被埋进了新墨西哥州的阿拉莫戈多垃圾镇，宣告一个时代的结束。<br>

                    之后几年，美国很少有人再谈家用机市场，一个行业濒临崩溃。
                    <p style="width:100%; margin:30px auto">
                      <img src="../assets/images/newsbanner3.png" />
                    </p>
                    <p>
                      同年，日本的任天堂抓住了机会，迅速推出了红白机占据市场，开启了电子游戏的新时代。<br>

                      在之后很长一段时间内，日本游戏厂商作为领头人，为行业带来众多标杆性质的作品。就算如今的日厂技术力渐渐落了下风，但游戏内容设计方面依然有着独到的魅力，这与日本国内整体游戏开发环境密不可分。
                      <br>
                      2017年，任天堂推出了两个重量级作品。《塞尔达传说 旷野之息》用淡雅的美术效果回避了Switch机能短板，并展示了他们对于“沙盒游戏”的极致理解，直接斩获当年TGA大奖。《超级马力欧
                      奥德赛》则打破了人们对于马力欧游戏的传统观念，将“箱庭类”马力欧推上了一个更高的地位。
                      <br>


                      <br>
                      玩家们一边赞许这个老牌大厂的强劲实力，一边也再次反思“日本游戏没落”是不是一个伪命题。

                      在区块链游戏领域也是如此。My Crypto Heroes（后文简称MCH）横空出世后，迅速打进DApp榜单前三，交易量一度超过《谜恋猫》排名第一，大火的同时不仅让链游圈的玩家们再一次感慨：

                      <br>
                      也许日本人更懂得怎么做一款“游戏”。

                      <br>
                      美术，永远的第一印象

                      <br>
                      很多人没有意识到的是，对于完全没接触过区块链游戏的传统玩家们来说，“游戏性”并不是第一个门槛，而美术才是。

                      人们在浏览Steam或者手机各种App商店，甚至游戏线下实体店时，没有办法一眼看出某个游戏的“核心玩法”以及“精髓”所在。

                      <br>
                      除了被人推荐这种可能，是否买一款游戏很大程度上取决于你和这款游戏有没有眼缘——游戏截图的重要性就凸显出来了。
                      <br>

                      所以，游戏美术的重要性不言而喻。
                      <br>

                      对于“好美术”的理解，也许每个人都不太一样。但对我而言，“好”并不是强大的技术引擎、炫酷光影效果的代名词。就像之前有人能用虚幻4引擎不到一个月做出个游戏，光影粒子效果什么都有，但杂乱无章又充满套路，看起来很无聊。

                      反过来说，回想以前玩超任上的《最终幻想6》亦或去年很火的《茶杯头》 ，就是像素和手绘2D美术，但细致的场景刻画和精致的美国复古动画风格却让人记忆深刻。

                      <br>

                      关键在于用心。
                      <br>

                      My Crypto Heroes游戏采用了像素风的整体设计，这对于老玩家是个产生亲近感的加分项。但就算玩家不喜欢像素美术，也无法否定开发组Double Jump在角色设计上的用心。
                      <br>

                      Double
                      Jump没有用粗像素敷衍了事，而是细致地设计了每一名角色的形象，使角色图在保证可爱或帅气的同时也包含了一些专属细节。比如格林兄弟的图中，两人之间鸡、猫、狗、驴子四只小动物的梗出自格林童话里的《不莱梅乐队》。

                      <br>

                      <br>
                      童话里这四只动物分别离开了各自糟糕的主人，并怀揣着“一同组建乐队”的梦想前往不莱梅。虽然最后没有实现这个愿望，但也愉快地生活在了一起。

                      <br>
                      这个故事在格林童话中属于比较温馨的一则，而将这些动物形象，设计成游戏中的Q版像素图，会让玩家们有更多亲近的感觉。
                    </p>
                    <p>文章作者： 布谷星球</p>
                    <div class="newsgzhh">
                      <img src="../assets/images/qrcodegzhh.jpg" />
                      <h1>布谷公众号</h1>
                      <p>更多新闻！欢迎扫描左方二维码关注布谷公众号</p>
                    </div>
                  </div>
                </section>
              </div>
            </section>
          </div>
        </div>
      </div>
      <!-- 模态窗 -->
      <div class="modal fade bs-example-modal-lg3" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <section class="animatedParent">
              <div class="newscontent">
                <!-- <img src="../assets/images/newsimg.png" /> -->
                <section class="cont">
                  <h1>BGT上所前空投 布谷APP最强福利 一起瓜分2000万BGT</h1>
                  <h6>发布于 2019-05-11 14:34</h6>
                  <div class="newstext">
                    <div class="newstitle">BUGUChain社区蓬勃发展 注册用户超20万</div>
                    <p style="width:100%; margin:30px auto">
                      <img src="../assets/images/img-one.png" />
                    </p>
                    BGT上线交易所前最后一次空投即将在今天下午启航，预计5月中旬上线知名交易所进行IEO，所有注册APP的用户均有一次开启宝箱机会，最高获得100BGT，每邀请一人可增加一次开宝箱机会，不设上限。
                    <p style="width:100%; margin:30px auto">
                      <img src="../assets/images/img-two.png" />
                    </p>
                    <p>
                      关于BGT<br>
                      布谷BGT是新一代游戏分发公链通证，由云图资本（牛顿协议、IOEX、亦来云早期投资机构）和NOC Ventures（硅谷区块链项目主要投资机构）领投<br>
                      对接千亿美元游戏市场<br>
                      让玩家重新掌握话语权<br>
                      重新定义游戏分发行业<br>
                      共同打造改变世界的顶级游戏生态
                    </p>

                    <p>文章作者： 布谷星球</p>
                    <div class="newsgzhh">
                      <img src="../assets/images/qrcodegzhh.jpg" />
                      <h1>布谷公众号</h1>
                      <p>更多新闻！欢迎扫描左方二维码关注布谷公众号</p>
                    </div>
                  </div>
                </section>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
  export default {
    name: 'home',
    data() {
      return {
        visible: false,
        transitionName: ''
      }
    },
    methods: {

    },
    mounted() {
         // 锚点平滑滚动
    $('#a01, #a001').click(function () {
        $(this).parent().addClass('active').siblings().removeClass('active');
        $('html,body').animate({
            scrollTop: $('.a01').offset().top + -300 + "px"
        }, 800);
        return false;
    });
    $('#a02, #a002').click(function () {
        $(this).parent().addClass('active').siblings().removeClass('active');
        $('html,body').animate({
            scrollTop: $('.a02').offset().top + -110 + "px"
        }, 800);
        return false;
    });
    $('#a03, #a003').click(function () {
        $(this).parent().addClass('active').siblings().removeClass('active');
        $('html,body').animate({
            scrollTop: $('.a03').offset().top + -110 + "px"
        }, 800);
        return false;
    });
    $('#a04, #a004').click(function () {
        $(this).parent().addClass('active').siblings().removeClass('active');
        $('html,body').animate({
            scrollTop: $('.a04').offset().top + -110 + "px"
        }, 800);
        return false;
    });
    $('#a05, #a005').click(function () {
        $(this).parent().addClass('active').siblings().removeClass('active');
        $('html,body').animate({
            scrollTop: $('.a05').offset().top + -110 + "px"
        }, 800);
        return false;
    });
    $('#a00, #a000').click(function () {
        $(this).parent().addClass('active').siblings().removeClass('active');
        $('html,body').animate({
            scrollTop: $('.a00').offset().top + -250 + "px"
        }, 800);
        return false;
    });
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
<style>
  .home {
    width: 90%;
    margin: 0 auto;
  }
</style>