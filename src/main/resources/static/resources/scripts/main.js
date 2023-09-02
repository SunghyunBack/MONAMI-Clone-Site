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

// NEW ARRIVALS에서 마우스 효과들
$(document).ready(function(){
    $(".item").mouseover(function(){
        $(this).find(".panner").css("opacity","1");
        $(this).find(".bar:nth-of-type(1)").css("transform", "rotate(-180deg");
        $(this).find(".bar:nth-of-type(2)").css("transform", "rotate(-270deg");
    });
    $(".item").mouseleave(function(){
        $(this).find(".panner").css("opacity","0");
        $(this).find(".bar:nth-of-type(1)").css("transform", "rotate(180deg");
        $(this).find(".bar:nth-of-type(2)").css("transform", "rotate(270deg");
    });
})

// family site 아코디언 메뉴바
$(document).ready(function() {
    // a태그를 클릭할 때 이벤트 처리
    $(".family-site").click(function(event) {
        // 클릭된 a태그의 부모 요소인 ul 태그를 찾습니다.
        var ulElement = $(this).next("ul");

        // 다른 ul 요소는 숨기고 클릭된 a태그의 부모 ul 요소를 슬라이드 업/다운합니다.
        $(".right ul").not(ulElement).slideUp();
        ulElement.slideToggle();

        // 기본 링크 동작을 중지합니다.
        event.preventDefault();
    });
});

