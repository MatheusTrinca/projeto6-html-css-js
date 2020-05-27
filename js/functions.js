$(function(){

    $('.btn').click(function(){
        $(this).css('background-color', 'red');
        return false;
    });

    $('.box-planos-wraper').mouseenter(function(){
        $(this).find('h2:first').css('background-color', '#2692FF');
    });

    $('.box-planos-wraper').mouseleave(function(){
        $(this).find('h2:first').css('background-color', 'rgb(96, 145, 194)');
    });

    /* NAV MOBILE */

    $('nav.mobile').click(function(){
        var el = $(this).parent().find('ul');
        if(!el.is(':visible')){
            el.fadeIn();
        }else{
            el.fadeOut();
        }
    })

    $('nav.mobile ul li').mouseenter(function(){
        $(this).css('background-color', 'rgba(255, 255, 255, 0.8)');
    });

    $('nav.mobile ul li').mouseleave(function(){
        $(this).css('background-color', 'rgba(0, 0, 0, 0.4)');
    });

})