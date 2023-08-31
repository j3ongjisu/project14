$(function () {

    //모바일 탭 버튼
    $('.mobile_btn').on('click', function () {
        $(this).toggleClass('on');
        $('.gnb').toggleClass('on');
    });

    $('.gnb>ul>li>a').on('click', function (e) {
        if ($('.gnb').hasClass('on')) {
            e.preventDefault();
        }

        $(this).next().stop().slideDown();
        $(this).parent().siblings().find('.sub').stop().slideUp();
    });

    // 탭 메뉴
    $('.tab_box>ul>li').on('mouseenter', function (e) {
        e.preventDefault();
        let idx = $(this).index();
        $('.tab_bg .itm_box .itm').eq(idx).addClass('on').siblings().removeClass('on')
    });

    $('.main_product .itm').on('click', function () {
        $(this).addClass('on').siblings().removeClass('on');
    });

    $('.news_link li').on('click', function (event) {
        event.preventDefault();
        let idx = $(this).index(); //0,1,2

        $(this).addClass('on')
            .siblings().removeClass('on');

        //방법 1
        //$('.news_content .con').removeClass('on');
        // $('.news_content .con').eq(idx).addClass('on')

        // 방법 2
        $('.news_content .con').eq(idx).addClass('on')
            .siblings().removeClass('on');


        //console.log(event, event.target, event.currentTarget, $(this), $(this).index());
    });


    $('.issue_slider').slick({
        fade: true,
        arrows: false,
    });

    $('.main_issue').on('init afterChange', function (e, s, c) {
        const current = $('.main_slide .slick-current');
        current.addClass('on').siblings().removeClass('on');

        //슬라이드 숫자 표시(1/3)
        $('.main_issue .slide_num span').text(c ? (c + 1) : 1);
        $('.main_issue .slide_num strong').text(s.slideCount);

        console.log(s.slideCount);

    });

    $('.main_issue .issue_btn .left').on('click', function () {
        $('.issue_slider').slick('slickPrev');
        // console.log('000')
    });
    $('.main_issue .issue_btn .right').on('click', function () {
        $('.issue_slider').slick('slickNext')
    });


    // history tab 메뉴
    $('.eventMenu li').on('click', function (event) {
        event.preventDefault();
        let idx = $(this).index();
        console.log(idx)
        $('.eventContent li').eq(idx).addClass('on').siblings().removeClass('on');
    });

    $('.family_link span').on('click', function () {
        $(this).toggleClass('on');
        $(this).next().toggleClass('on');
    });


    //to_top
    //to_top 스크롤 위로 올리기
    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 600)
    });

    // to_top 스크롤 숨겼다가 나타내기
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        // sct > 1000 ? $('.to_top').fadeIn(1000) : $('.to_top').fadeOut();
        sct > 400 ? $('.to_top').addClass('on') : $('.to_top').removeClass('on');
    });
});