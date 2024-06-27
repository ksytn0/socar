$(document).ready(function(){

    /*데스크탑 내비게이션*/
    $("nav > ul > li").mouseenter(function(){
        $(this).find(".sub").stop().show();
    })
    $("nav > ul > li").mouseleave(function(){
        $(".sub").stop().hide();
    })
    /*태블릿&모바일 내비게이션*/
    let gnb = $('header nav > ul > li > a');
    gnb.click(function(){
        $(this).next().toggle().parent().siblings().find('.sub').hide();
    });
    $('main').click(function(){
        $('.sub').hide();
    });
    /*토글버튼*/
    $('#toggle').click(function(){
        $('#toggle span:first-child').toggleClass('rotate1');
        $('#toggle span:nth-child(2').toggleClass('rotate2');
        $('nav').slideToggle();
    });


    /*키워드 탭메뉴*/
    $(".tabmenu > li").click(function(){
        //타이틀 영역
        $(".tabmenu > li").removeClass('clickbg clickborder');
        $(this).addClass('clickbg');
        $(".tabmenu > li").not(this).addClass('clickborder');
        //콘텐츠 영역
        var i = $(this).index();
        console.log(i);
        $(".tabcon").hide();
        $(".tabcon").eq(i).show();
        return false;
    })


    /*서비스 슬라이드*/
    const slide = $('.slide > ul');
    const prev_btn = $('.prev_btn');
    const next_btn = $('.next_btn');

    $('.slide > ul > li:last-child').insertBefore('.slide > ul > li:first-child');
    slide.css('margin-left','-100%');
    function movePrev(){//prev함수
        slide.stop().animate({'margin-left':'-200%'},1000,function(){
            $('.slide > ul > li:first-child').insertAfter('.slide > ul > li:last-child');
            slide.css('margin-left','-100%');
        });
    }let Timer = setInterval(movePrev,5000);
    function moveNext(){//next함수
        slide.stop().animate({'margin-left':'0px'},1000,function(){
            $('.slide > ul > li:last-child').insertBefore('.slide > ul > li:first-child');
            slide.css('margin-left','-100%');
        });
    }
    prev_btn.click(function(){//이전버튼
        clearInterval(Timer);
        movePrev();
    })
    next_btn.click(function(){//다음버튼
        clearInterval(Timer);
        moveNext();
    })
    //클릭후 마우스이탈시 자동슬라이드 실행
    $('.pos').mouseleave(function(){
        Timer = setInterval(movePrev,5000);
    })


    /*이벤트갤러리 탭메뉴*/
    const g_navi = $(".g_navi > ul > li");
    const gf_btn = $(".g_navi > ul > li:first-child");
    const gs_btn = $(".g_navi > ul > li:nth-child(2)");
    const gt_btn = $(".g_navi > ul > li:last-child");

    g_navi.click(function(){
    $(this).addClass("clickbg").siblings().removeClass("clickbg");
    })
    gf_btn.click(function(){
    $(".total").hide();
    $(".total").fadeIn(1000);
    })
    gs_btn.click(function(){
    $(".total").hide();
    $(".ing").fadeIn(1000);
    })
    gt_btn.click(function(){
    $(".total").hide();
    $(".end").fadeIn(1000);
    })


    /*패밀리사이트*/
    let familysite = true
    $('.family').on('click',function(e){
        e.preventDefault()
        if(familysite){
            $('.family_list').stop().slideDown();
            $(".family > a").css('border-radius','0px 0px 8px 8px');
            familysite = false
        }else{
            $('.family_list').stop().slideUp();
            $(".family > a").css('border-radius','8px');
            familysite = true
        }
    })


    /*모달레이어 팝업창*/
    let popup = `
    <div class="popup">
        <div class="popcon">
            <a href="javascript:void()" title="팝업바로가기">
                <img src="./images/popup01.png" alt="팝업창">
            </a>
            <div>
                <button type="button" id="reject_btn">24시간 보지 않기</button>
                <button type="button" id="close_btn">닫기</button>
            </div>
        </div>
    </div>
    `
    $('body').append(popup);

    if ($.cookie('popup')=='none'){//브라우저에 쿠키값이 있으면 팝업안보임
        $('.popup').hide();
    }
    $('#reject_btn').click(function() {
        $.cookie('popup','none',{ expires: 1, path: '/' });
        $('.popup').hide();
    });
    $('#close_btn').click(function() {
        $('.popup').hide();
    });


    /*탑버튼*/
    $(".top_btn").click(function(){
        $("html, body").animate({'scrollTop':'0px'},1000);
        return false;
    })
    /*탑버튼 발생서식*/
    $(window).scroll(function(){
        let s_pos = $(this).scrollTop();
        if(s_pos>=800){
            $(".top_btn").fadeIn();
        }else{
            $(".top_btn").fadeOut();
        }
    })

    /*키워드탭메뉴 높이조절*/
    $(window).resize(function(){
        if($(this).width() <= 440){ //mobile
            $('.keytab').height(700);
        }
    })
})