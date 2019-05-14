$(function () {
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

    //移动端iOS click有延迟  添加折叠的touchstart事件支持
    // $(document).off('click.bs.collapse.data-api', '[data-toggle="collapse"]');

    // $(document).on('touchstart.bs.collapse.data-api', '[data-toggle="collapse"]', function(e) {
    //     var $this = $(this),
    //         href
    //     var target = $this.attr('data-target') ||
    //         e.preventDefault() ||
    //         (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') //strip for ie7
    //     var $target = $(target)
    //     var data = $target.data('bs.collapse')
    //     var option = data ? 'toggle' : $this.data()
    //     var parent = $this.attr('data-parent')
    //     var $parent = parent && $(parent)

    //     if (!data || !data.transitioning) {
    //         if ($parent) $parent.find('[data-toggle=collapse][data-parent="' + parent + '"]').not($this).addClass('collapsed')
    //         $this[$target.hasClass('in') ? 'addClass' : 'removeClass']('collapsed')
    //     }

    //     $target.collapse(option)
    // });


    // // 禁止缩放  iOS10+会忽略meta的user-scalable=no
    // document.documentElement.addEventListener('touchstart', function(event) {
    //     if (event.touches.length > 1) {
    //         event.preventDefault();
    //     }
    // }, false);
    // //    判断是pc还是手机端
    // var addStyleLink = function(href) {
    //     var head = document.getElementsByTagName('head')[0];
    //     var styleLink = document.createElement('link');
    //     styleLink.setAttribute('rel', 'stylesheet');
    //     styleLink.setAttribute('href', href);
    //     head.appendChild(styleLink);

    // }
    // if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {

    // } else {
    //     addStyleLink('css/animations.css');
    // }


    //首先将#indexToTop隐藏
    $(".w-button-backToTop").hide();
    //当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失

    $(window).scroll(function () {
        if ($(window).scrollTop() > 150) {
            $(".w-button-backToTop").fadeIn(500);
            $(".nrefresh").css("bottom", "125px");
            $('.logo_nav').addClass("scrolltopbg");
        } else {
            $(".w-button-backToTop").fadeOut(500);
            $(".nrefresh").css("bottom", "65px");
            $('.logo_nav').removeClass("scrolltopbg");
        }
    });
    //当点击跳转链接后，回到页面顶部位置
    $(".w-button-backToTop").click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });
});