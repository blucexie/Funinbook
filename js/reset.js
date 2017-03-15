$(function() {
    $(".link-back2").click(function(){
            $(".xieyi_z").hide();
            $(".zhuce").show();
    });
    $(".ty").click(function(){
        $(".xieyi_z").hide();
        $(".zhuce").show();
    });
    $(".xiyi_show").click(function(){
        $(".xieyi_z").show();
        $(".zhuce").hide();
    })
    $("#fankui").click(function(){
        alert("感谢您的反馈");
        $(".fankui").hide();
    });
    $(".quxiao").click(function () {
        $(".wangji-m").hide();
        $(".fankui").hide();
        $(".xiabu").hide();
        $(".deng-z").hide();
        $(".zhuce").hide();
    });
$("#zhuce").click(function () {
    $(".zhuce").show();
});
$(".xj").click(function(){
    $(".deng-z").hide();
    $(".zhuce").show();
})
    $(".jiejue-hover").mouseover(function () {
        $(".jiejue").show();
    });
    $(".jiejue-hover").mouseleave(function () {
        $(".jiejue").hide();
    });
    $(".jiejue").mouseover(function () {
        $(".jiejue").show();
    });
    $(".jiejue").mouseleave(function () {
        $(".jiejue").hide();
    });
    $(".gun-hover").mouseover(function () {
        $(".guanyu").show();
    });
    $(".gun-hover").mouseleave(function () {
        $(".guanyu").hide();
    });
    $(".guanyu").mouseleave(function () {
        $(".guanyu").hide();
    });
    $(".guanyu").mouseover(function () {
        $(".guanyu").show();
    });
    $(".hoveh").mouseover(function () {
        $(".none").show();
    });
    $(".none").mouseover(function () {
        $(".none").show();
    });
    $(".none").mouseleave(function () {
        $(".none").hide();
    });
    $(".hoveh").mouseleave(function () {
        $(".none").hide();
    });
    $(".denglu").click(function () {
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
    document.getElementById("btn").onclick=function(){
        time(this);
    }
});