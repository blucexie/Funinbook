$(function() {    $("#QQ_s").hover(function() {            $(".QQ_y").hide();            $(".QQ_x").show()        },        function() {            $(".QQ_y").show();            $(".QQ_x").hide()        });    $(document).bind("contextmenu",        function(b) {            return ! 1        });    var c = $(window),        a = c.width(),        d = c.height();    $(".footer_inner").height();    var n = new Date,        p = d - 75;    $(".client_list").height(p);    $(".spot").height(d - 80);    $(".loading").css({        height: d    });    var l = [0, -500, -1E3, -1500, -2E3, -2500, -3E3, -3500, -4E3, -4500, -5E3, -5500],        q = [ - 2732, -3232, -3732, -4232, -4732, -5232, -5732, -6232, -6732, -7232, -7732, -8232];    $("#client_ul li").each(function(b) {        var a = {            "margin-left": l[b]        };        $(this).children("#cli").css({            "margin-left": l[b]        });        var d = {                "margin-left": q[b]            },            c = {                easing: "linear",                duration: 6E4,                complete: function() {                    $("#client_ul li").eq(b).children(".cli").css(a).animate(d, c)                }            };        c.complete()    });    $(window).resize(function() {        var b = $(window).width();        $(".nav").height(d);        1200 < b ? $(".nav").css({            width: "auto",            height: "0"        }) : $(".nav").css({            width: "0"        })    });    var f = 0,        r = 20 / (new Date - n),        e = 0,        t = setInterval(function() {                100 <= Number(e) && (clearInterval(t), e = 100, setTimeout(function() {                        $(".wrap_all").css("opacity", "1");                        $(".loading").fadeOut()                    },                    100));                $(".loading_num").text(Math.floor(e) + "%");                e += r;                f += 1;                40 > e ? $(".loading_img").stop().animate({                        left: 2 * f + "%"                    },                    100 * f) : $(".loading_img").stop().animate({                        left: "99%"                    },                    1E3)            },            100);    $from_li = $(".from_list ul li").width();    $(".txt").width($from_li - 63 - 54);    $(".case_list li");    $(window).resize(function() {        var b = $(window).width();        $from_li = $(".from_list ul li").width();        $(".txt").width($from_li - 63 - 54);        960 > b && 645 < b && $(".txt").width($from_li)    });    $(".arr_down a").hover(function() {            $(this).css("background-color", "#cf1717");            $(this).find(".ori_arr").animate({                    top: 40                },                325);            $(this).find(".hover_arr").animate({                    top: 0                },                325)        },        function() {            $(this).css("background-color", "#1d1d1d");            $(this).find(".ori_arr").animate({                    top: 0                },                325);            $(this).find(".hover_arr").animate({                    top: -40                },                325)        });    $(".compute").stop().animate({            right: 0,            opacity: 1        },        {            duration: 1E3,            easing: "linear",            complete: callback        });    $(".b_txt").stop().animate({            right: 480,            opacity: 1        },        {            duration: 1E3,            easing: "linear"        });    $(".news_list ul li").hover(function() {        $(this).find(".sort_num").addClass("current");        $(this).siblings().find(".sort_num").removeClass("current")    });    $(".news_list ul li").on("mouseleave",        function() {            $(this).find(".sort_num").removeClass("current")        });    $(".news_wrap ul li .news_main").hover(function() {        $(this).addClass("current");        $(this).siblings().removeClass("current")    });    $(".news_wrap ul li .news_main").on("mouseleave",        function() {            $(this).removeClass("current")        });    $(".link ul li .icon_l").hover(function() {        $(this).find(".icon1").stop().animate({                top: -25,                opacity: 0            },            425);        $(this).find(".icon2").stop().animate({                top: -25,                opacity: 1            },            425);        $(this).parent().siblings().children(".icon_l").find(".icon1").stop().animate({                top: 0,                opacity: 1            },            425);        $(this).parent().siblings().children(".icon_l").find(".icon2").stop().animate({                top: 0,                opacity: 0            },            425);        $(this).siblings(".frame").fadeIn();        $(this).parent().siblings().children(".frame").fadeOut()    });    $(".link ul li .icon_l").on("mouseleave",        function() {            $(this).find(".icon1").stop().animate({                    top: 0,                    opacity: 1                },                425);            $(this).find(".icon2").stop().animate({                    top: 0,                    opacity: 0                },                425);            $(this).siblings(".frame").fadeOut()        });    var h = !1;    $(".btn-navbar").click(function() { (h = !h) ? ($(".nav").stop().animate({            width: 240        },        {            duration: 425,            easing: "linear"        }), $(".p_menu").stop().animate({            height: 230        },        {            duration: 425,            easing: "linear"        })) : ($(".nav").stop().animate({            width: 0        },        {            duration: 425,            easing: "linear"        }), $(".p_menu").stop().animate({            height: 0        },        {            duration: 325,            easing: "linear"        }))    });    645 > a && $(".nav ul li").click(function() {        h = !1;        $(".nav").stop().animate({                width: 0            },            {                duration: 425,                easing: "linear"            })    });    $(".wap ul li").hover(function() {        $(this).find(".shade_case").stop().animate({                opacity: .8            },            325);        $(this).find(".goto").stop(!1, !0).animate({                "margin-top": "-35%",                opacity: "1"            },            {                duration: 525,                easing: "easeOutBounce"            });        $(this).siblings().find(".shade_case").stop().animate({                opacity: 0            },            325);        $(this).siblings().find(".goto").stop(!1, !0).animate({                "margin-top": "-200%",                opacity: "0"            },            {                duration: 525            })    });    $(".wap ul li").on("mouseleave",        function() {            $(this).find(".shade_case").stop().animate({                    opacity: 0                },                325);            $(this).find(".goto").stop(!1, !0).animate({                    "margin-top": "-200%",                    opacity: "0"                },                {                    duration: 525                })        });    $(".menu_inner ul li").hover(function() {        $(this).find(".orig").stop().animate({                top: -75            },            425);        $(this).find(".now").stop().animate({                top: -75            },            425);        $(this).siblings().find(".orig").stop().animate({                top: 0            },            425);        $(this).siblings().find(".now").stop().animate({                top: 0            },            425)    });    $(".controlArrow").click(function() {        $(this).css("background-color", "#cf1717");        $(this).siblings(".controlArrow").css("background-color", "#414141")    });    $(".case_list ul li").hover(function() {        $(this).find(".bk").stop().animate({                bottom: 0,                opacity: "1"            },            {                duration: 325,                easing: "linear"            });        $(this).find(".case_info,.case_tit").css({            color: "#ffffff"        });        $(this).find(".case_tit").css({            color: "#ffffff"        })    });    $(".case_list ul li").on("mouseleave",        function() {            $(this).find(".bk").stop().animate({                    bottom: 99,                    opacity: "1"                },                {                    duration: 325,                    easing: "linear"                });            $(this).find(".case_info").css({                color: "#737373"            });            $(this).find(".case_tit").css({                color: "#ea1414"            })        });    645 < a && ($(".what_list ul li").hover(function() {        $(this).find(".what_con_list").stop().animate({                bottom: 0,                opacity: 1            },            {                duration: 325,                easing: "linear"            });        $(this).find(".a3,.a4").stop().delay(225).animate({                height: "100%"            },            225);        $(this).find(".a1,.a2").stop().delay(225).animate({                width: "50%"            },            175);        $(this).find(".first").removeClass("current");        $(this).find(".second").addClass("current");        $(this).siblings().find(".first").addClass("current");        $(this).siblings().find(".second").removeClass("current");        $(this).siblings().find(".what_con_list").stop().animate({                bottom: 0,                opacity: 0            },            {                duration: 225,                easing: "linear"            });        $(this).siblings().find(".a3,.a4").stop().animate({                height: "0%"            },            225);        $(this).siblings().find(".a1,.a2").stop().animate({                width: "0%"            },            175)    }), $(".what_list ul li").on("mouseleave",        function() {            $(this).find(".what_con_list").stop().animate({                    bottom: 0,                    opacity: 0                },                {                    duration: 225,                    easing: "linear"                });            $(this).find(".a3,.a4").stop().animate({                    height: "0%"                },                225);            $(this).find(".a1,.a2").stop().animate({                    width: "0%"                },                225);            $(this).find(".first").addClass("current");            $(this).find(".second").removeClass("current")        }), $(".about,.design").click(function() {        $(".left_zz,.right_zz").addClass("out");        $(".news_wrap").stop().delay(1E3).animate({                opacity: 0            },            {                duration: 500,                easing: "linear"            })    }), $(".about,.news_click").click(function() {        $(".team_list ul li").removeClass("current")    }), $(".news_click").click(function() {        $(".left_zz,.right_zz").removeClass("out");        $(".zz").fadeIn(100,            function() {                $(".left_zz,.right_zz").addClass("current")            });        $(".news_wrap").stop().delay(1E3).animate({                opacity: 1            },            {                duration: 500,                easing: "linear"            })    }), $(".design").click(function() {        $(".team_list ul li").addClass("current")    }), $(".team_list ul li").hover(function() {        $(this).find(".deg_name").css("color", "#b8120e");        $(this).siblings().find(".deg_name").css("color", "#5c5c5c");        $(this).find(".c2,.c4").stop().animate({                height: "27px"            },            425);        $(this).find(".c1,.c3").stop().animate({                width: "101%"            },            425);        $(this).siblings().find(".c2,.c4").stop().animate({                height: "0"            },            0);        $(this).siblings().find(".c1,.c3").stop().animate({                width: "0"            },            0)    }));    $(".from_list ul li").hover(function() {        $(this).children(".from_img").find(".shade").show();        $(this).children(".from_txt_w").find(".txt_shade").stop().animate({                height: "100%"            },            325);        $(this).children(".from_txt_w").css("color", "#ffffff");        $(this).children(".from_img").find(".more_f").stop(!1, !0).animate({                "margin-top": "-17px"            },            {                duration: 425,                easing: "easeOutBounce"            });        $(this).siblings().children(".from_img").find(".shade").hide();        $(this).siblings().children(".from_txt_w").find(".txt_shade").stop().animate({                height: "0%"            },            325);        $(this).siblings().children(".from_txt_w").css("color", "#797979");        $(this).siblings().children(".from_img").find(".more_f").stop(!1, !0).animate({                "margin-top": "-200px"            },            {                duration: 300            })    });    $(".from_list ul li").on("mouseleave",        function() {            $(this).children(".from_img").find(".shade").hide();            $(this).children(".from_txt_w").find(".txt_shade").stop().animate({                    height: "0%"                },                325);            $(this).children(".from_txt_w").css("color", "#797979");            $(this).children(".from_img").find(".more_f").stop(!1, !0).animate({                    "margin-top": "-200px"                },                {                    duration: 300                })        });    //遮罩层    $(".about_menu li").hover(function() {        $(this).children(".cus_shade_l,.cus_shade_r").stop().animate({                width: "0%"            },            325);        $(this).siblings().children(".cus_shade_l,.cus_shade_r").stop().animate({                width: "0%"            },            325)    });    $(".search_but").hover(function() {        $(".sea_txt").stop().animate({                width: 260,                opacity: 1            },            {                duration: 425,                easing: "easeOutQuad"            })    });    $(".search_inner").on("mouseleave",        function() {            $(".sea_txt").stop().animate({                    width: 0,                    opacity: 1                },                {                    duration: 425,                    easing: "easeOutQuad"                })        });    $(".sub_but").hover(function() {        $(".search").css({            border: "1px solid #696969"        });        $(".search").css({            "border-right": "none"        });        $(".search").stop().animate({                width: 135,                opacity: 1            },            {                duration: 325,                easing: "easeOutQuad"            })    });    var g = $(".case_list2 li"),        k = 0;    g.each(function() {        15 > k && $(this).delay(150 * k).fadeIn().animate({                "margin-top": 0            },            {                duration: 450,                easing: "easeOutQuart"            });        k++    });    var m = 2;    c.scroll(function() {        var b = $(document.body).height() - c.height();        posScroll = c.scrollTop();        posScroll >= b - 5 && g.is(":animated");        var a = 0;        delay = 0;        g.each(function() {            "60px" == $(this).css("margin-top") && (15 > a && ($(this).delay(50 * delay).fadeIn().animate({                    "margin-top": 0                },                {                    duration: 50,                    easing: "easeOutQuart"                }), delay++), a++)        });        m++;        0 == $(document).height() - $(window).height() - $(window).scrollTop() && (delay = a = 0, g.each(function() {            "60px" == $(this).css("margin-top") && (15 > a && ($(this).delay(50 * delay).fadeIn().animate({                    "margin-top": 0                },                {                    duration: 50,                    easing: "easeOutQuart"                }), delay++), a++)        }), m++)    });    $(".send").click(function() {        "" == $("input[name='name']").val() || "\u60a8\u7684\u79f0\u547c" == $("input[name='name']").val() ? ($(".span1").fadeIn(), $(".span2").fadeOut(), $(".span3").fadeOut()) : "\u6240\u4ee3\u8868\u7684\u516c\u53f8" == $("input[name='company']").val() || "" == $("input[name='company']").val() ? ($(".span2").fadeIn(), $(".span1").fadeOut(), $(".span3").fadeOut()) : "\u60a8\u7684\u8054\u7cfb\u7535\u8bdd" == $("input[name='phone']").val() || "" == $("input[name='phone']").val() ? ($(".span3").fadeIn(), $(".span1").fadeOut(), $(".span2").fadeOut()) : $.ajax({            url: "ajax.php",            data: $("#form1").serialize(),            type: "post",            error: function() {                alert("\u63d0\u4ea4\u53d1\u751f\u9519\u8bef\uff0c\u8bf7\u91cd\u65b0\u63d0\u4ea4\u3002");                return ! 1            },            success: function(a) {                "1" == a ? (alert("\u5df2\u6210\u529f\u63d0\u4ea4\uff0c\u6211\u4eec\u5c06\u572824\u5c0f\u65f6\u5185\u7ed9\u51fa\u7b54\u590d\u3002"), $(".short_txt,.long_txt").val("")) : alert("\u4fdd\u5b58\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u518d\u63d0\u4ea4\u3002")            }        })    })});function callback() {    $(".img_c").fadeIn(3E3)}function SetFont(c) {    var a = document.getElementById("detail");    if (a) {        a.style.fontSize = c + "px";        for (var a = a.childNodes,                 d = 0; d < a.length; d++) 1 == a[d].nodeType && (a[d].style.fontSize = c + "px")    }};