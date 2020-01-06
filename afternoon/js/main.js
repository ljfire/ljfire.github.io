

$(document).ready(function () {

    // 单击链接后隐藏移动菜单

    $('.navbar-collapse a').click(function () {
        $(".navbar-collapse").collapse('hide');
    });


    /*  滚动
    ----------------------------------------------*/
    $(function () {
        $('#home a, .navbar-default a').bind('click', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 49
            }, 1000);
            event.preventDefault();
        });
    });

 

    /* wow
    -------------------------------*/
    new WOW({
        mobile: false
    }).init();

});