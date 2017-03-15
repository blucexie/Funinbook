$(function() {

    $(".about").click(function () {
        $("#con1").hide();
        $("#con").show();
        $(".about").addClass("on");
        $(".news_click").removeClass("on");
    })
    $(".news_click").click(function () {
        $("#con1").show();
        $("#con").hide();
        $(".about").removeClass("on");
        $(".news_click").addClass("on");
    });
    $(".caidan").click(function () {
        $(".menu").show();
    });
    $(".quxiao").click(function () {
        $(".wangji-m").hide();
        $(".fankui").hide();
        $(".xiabu").hide();
        $(".deng-z").hide();
    });
    $(".yonghu").click(function(){
        $(".deng-z").show();
    })
    $(".link_list").click(function () {
        $(".deng-z").show();
    });
    $(".w1").click(function () {
        $(".wangji-m").show();
        $(".fankui").hide();
        $(".xiabu").hide();
        $(".deng-z").hide();
    });
    $("#xia").click(function () {
        $(".xiabu").show();
        $(".wangji-m").hide();
        $(".fankui").hide();
        $(".deng-z").hide();
    });
    $(".yj").click(function () {
        $(".fankui").show();
        $(".xiabu").hide();
        $(".wangji-m").hide();
        $(".deng-z").hide();
    });
    var wait = 10;
    function time(o) {
        if (wait == 0) {
            o.removeAttribute("disabled");
            o.value = "免费获取验证码";
            wait = 60;
        } else {
            o.setAttribute("disabled", true);
            o.value = "" + wait + "s后重新发送";
            wait--;
            setTimeout(function () {
                    time(o)
                },
                1000)
        }
    }
    $("#btn").click(function(){
        time(this);
    })
});