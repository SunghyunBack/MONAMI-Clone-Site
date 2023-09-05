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

            $(this).find("span:nth-of-type(2)").css("display", "block");

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
const list = document.querySelector('.slide-ul');
const listScrollWidth = list.scrollWidth;
const listClientWidth = list.clientWidth;
let startX=0;
let nowX=0;
let endX =0;
let listX =0;





// 유틸함수
const getClientX = (e) =>{
    const isTouches = e.touches ? true:false;
    return isTouches ? e.touches[0].clientX : e.clientX;
};
const getTranslateX = () => {
    return parseInt(getComputedStyle(list).transform.split(/[^\-0-9]+/g)[5]);
};
const setTranslateX= (x) =>{
    list.style.transform = 'translateX(${x}px)';
};

const bindEvents =() =>{
    list.addEventListener('mousedown', onScrollStart);
    list.addEventListener('touchstart', onScrollStart);
    list.addEventListener('click', onClick);
};


const onScrollStart = (e) => {
    startX = getClientX(e);
    window.addEventListener('mouseover', onScrollMove);
    window.addEventListener('touchmove', onScrollMove);
    window.addEventListener('mouseup', onScrollEnd);
    window.addEventListener('touchend', onScrollEnd);
};
const onScrollMove = (e) => {
    nowX = getClientX(e);
    setTranslateX(listX + nowX - startX);
};
const onScrollEnd = (e) => {
    endX = getClientX(e);
    listX= getTranslateX();
    if(listX >0){
        setTranslateX(0);
        list.style.transition = `all 0.3s ease`;
        listX = 0;
    }else if(listX<listClientWidth - listScrollWidth){
        setTranslateX(listClientWidth - listScrollWidth);
        list.style.transition = `all 0.3s ease`;
        listX = listClientWidth - listScrollWidth;
    }
    window.removeEventListener('mousedown', onScrollStart);
    window.removeEventListener('touchstart', onScrollStart);
    window.removeEventListener('mousemove', onScrollMove);
    window.removeEventListener('touchmove', onScrollMove);
    window.removeEventListener('mouseup', onScrollEnd);
    window.removeEventListener('touchend', onScrollEnd);
    window.removeEventListener('click', onClick);

    setTimeout(() => {
        bindEvents();
        list.style.transition = '';
    }, 300);
};
const onClick = (e) => {
    if(startX-endX !==0){
        e.preventDefault();
    }
};



bindEvents();






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

