// header의 언어 변경 관련
$(document).ready(function () {
    $(".down").click(function () {
        $(".down").hide();
        $(".up").show();
        $(".language .english").show();
        $(".language").css("max-height", "3rem");
    });
    $(".up").click(function() {
        $(".up").hide();
        $(".down").show();
        $(".language .english").hide();
        $(".language").css("max-height", "1.5rem");
    });
})

// nav의 아코디언 메뉴
$(document).ready(function(){
    $(".main-ul>li").mouseover(function(){
        $(this).children(".sub-ul").stop().slideDown();
    });
    $(".main-ul>li").mouseleave(function(){
        $(this).children(".sub-ul").stop().slideUp();
    });
})


// $(document).ready(function(){
//     $(".menu-trigger").click(function(){
//         $(".all-menu").toggle(function (){
//         $(".all-menu > span").addClass("active");
//         });
//     })
// })

$(document).ready(function() {
    $(".menu-trigger").click(function() {
        $(this).toggleClass("active");
        $(".all-menu").toggleClass("active");
        // $(".all-menu").slideToggle(500);

        if ($(this).hasClass("active")) {
            $(this).find("span:nth-of-type(1)").css({
                "-webkit-transform": "translateY(8px) rotate(45deg)",
                "transform": "translateY(8px) rotate(45deg)"
            });

            $(this).find("span:nth-of-type(2)").css("opacity", "0");

            $(this).find("span:nth-of-type(3)").css({
                "-webkit-transform": "translateY(-8px) rotate(-45deg)",
                "transform": "translateY(-8px) rotate(-45deg)"
            });
        } else {
            $(this).find("span").removeAttr("style");
        }
    });
});