// header의 언어 변경 관련
$(document).ready(function () {
    $(".down").click(function () {
        $(".down").hide();
        $(".up").show();
        $(".language").css("max-height", "3rem");
        // $(".language .english").show();
        // $(".language").css("transition", "max-height 0.5s ease");
    });
    $(".up").click(function() {
        $(".up").hide();
        $(".down").show();
        // $(".language .english").hide();
        $(".language").css("max-height", "1.5rem");
        // $(".language").css("transition", "max-height 0.5s ease");
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

        if ($(this).hasClass("active")) {
            $(this).find("span:nth-of-type(1)").css({
                "-webkit-transform": "translateY(8px) rotate(45deg)",
                "transform": "translateY(8px) rotate(45deg)"
            });

            $(this).find("span:nth-of-type(2)").css("display", "none");

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

// 드래크 & 스크롤 이벤트
let isDown = false;
let startX;
let scrollLeft;
const slider = document.querySelector('.slide-ul');

// 클릭 이벤트를 무시하기 위한 상태 변수 추가
let isDragging = false;

const end = () => {
    isDown = false;
    // 슬라이드 이동이 끝나면 클릭 이벤트를 다시 활성화
    isDragging = false;
}

const start = (e) => {
    isDown = true;
    startX = e.pageX || e.touches[0].pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    // 드래그 시작 시 isDragging을 true로 설정
    isDragging = true;
}

const move = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX || e.touches[0].pageX - slider.offsetLeft;
    const dist = x - startX;
    slider.scrollLeft = scrollLeft - dist;
}

(() => {
    slider.addEventListener('mousedown', start);
    slider.addEventListener('touchstart', start);

    slider.addEventListener('mousemove', move);
    slider.addEventListener('touchmove', move);

    slider.addEventListener('mouseleave', end);
    slider.addEventListener('mouseup', end);
    slider.addEventListener('touchend', end);

    // 클릭 이벤트 핸들러 추가
    const clickHandler = (e) => {
        if (isDragging) {
            e.stopPropagation();
        } else {
            // 클릭 이벤트 처리를 여기에 추가
            // 예: slider 요소 내부의 <a> 태그 클릭 시 무시
            if (e.target.closest('a')) {
                e.preventDefault();
            }
        }
    };

    slider.addEventListener('click', clickHandler);
})();


// let isDown = false;
// let startX;
// let scrollLeft;
// const slider = document.querySelector('.slide-ul');
//
//
// const end = () => {
//     isDown = false;
//
// }
//
// const start = (e) => {
//     isDown = true;
//     startX = e.pageX || e.touches[0].pageX - slider.offsetLeft;
//     scrollLeft = slider.scrollLeft;
//     }
// const move = (e) => {
//     if(!isDown) return;
//     e.preventDefault();
//     const x = e.pageX || e.touches[0].pageX - slider.offsetLeft;
//     const dist = (x - startX);
//     slider.scrollLeft = scrollLeft - dist;
// }
//
//
// (() => {
//     slider.addEventListener('mousedown', start);
//     slider.addEventListener('touchstart', start);
//
//     slider.addEventListener('mousemove', move);
//     slider.addEventListener('touchmove', move);
//
//     slider.addEventListener('mouseleave', end);
//     slider.addEventListener('mouseup', end);
//     slider.addEventListener('touchend', end);
//
// })();



// family site 아코디언 메뉴바
$(document).ready(function() {
    // a태그를 클릭할 때 이벤트 처리
    $(".family-site").click(function(event) {
        // 클릭된 a태그의 부모 요소인 ul 태그를 찾습니다.
        var ulElement = $(this).closest("span.right").find("ul");

        // 다른 ul 요소는 숨기고 클릭된 a태그의 부모 ul 요소를 슬라이드 업/다운합니다.
        $(".right ul").not(ulElement).slideUp();
        ulElement.slideToggle("slow");

        // 기본 링크 동작을 중지합니다.
        event.preventDefault();
    });
});


