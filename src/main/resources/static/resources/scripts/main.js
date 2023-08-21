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