$(function () {
    // 탭 메뉴
    $('.tab_box>ul>li').on('click', function (e) {
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

        // history tab 메뉴

    });

    $('.eventMenu li').on('click', function (event) {
        event.preventDefault();
        let idx = $(this).index();
        console.log(idx)
        $('.eventContent li').eq(idx).addClass('on').siblings().removeClass('on');
    });
})