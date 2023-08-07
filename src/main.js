$(document).ready(function () {
    $('.hamburger').click(function(){
        $('.hamburger').toggleClass('active')
        $('.header').toggleClass('nav-active')
    })
    $('.dropdown-link').click(function(){
        if($(window).width()<768){    
            $(this).find('.dropdown-menu').slideToggle();
        }
    })

    $('.tile-link').click(function(){
        var text = $(this).parent('.tile').clone();
        $('.tile-field').append(`<div class="detail-field"></div>`);
        $(this).parent('.tile').clone().appendTo(".detail-field");
        $(".detail-field .tile").addClass('detail-tile');
        $(".detail-field .tile-link").addClass('detail-link').removeClass('grey-image');
        $(".detail-field .tile-img-div").addClass('detail-img-div');
        $(".detail-field .tile-img-div").addClass('detail-img');
        $(".detail-field *").removeClass('hidden');
        $(".detail-field .tile-label").addClass('detail-label');
        $(".detail-field .img-div:first-child").addClass('active');
        $(".detail-field").prepend(`<p class="btn close-btn"><i class="fas fa-angle-left"></i>ZURÜCK</p>`);
        
    })
    $(document).on('click','.img-div', function(){
        $(this).addClass('active').siblings().removeClass('active');
        $(this).parents('.tile-remaining-imgs').siblings('.tile-img-div').find('.tile-img').attr('src',$(this).find('img').attr('src'));
    })
    $(document).on('click','.next-img-btn', function(){
        if($(this).parents('.tile-img-div').siblings('.tile-remaining-imgs').find('.img-div.active').index() == $(this).parents('.tile-img-div').siblings('.tile-remaining-imgs').find('.img-div').last().index()){
            $(this).parents('.tile-img-div').siblings('.tile-remaining-imgs').find('.img-div:first-child').click();
        }else{
            $(this).parents('.tile-img-div').siblings('.tile-remaining-imgs').find('.img-div.active').next().click();
        }
    });
    $(document).on('click','.prev-img-btn', function(){
        if($(this).parents('.tile-img-div').siblings('.tile-remaining-imgs').find('.img-div.active').index() == $(this).parents('.tile-img-div').siblings('.tile-remaining-imgs').find('.img-div').first().index()){
            $(this).parents('.tile-img-div').siblings('.tile-remaining-imgs').find('.img-div:last-child').click();
        }else{
            $(this).parents('.tile-img-div').siblings('.tile-remaining-imgs').find('.img-div.active').prev().click();
        }
    });
    $(document).on('click','.close-btn', function(){
        $(this).parents('.detail-field').remove()
    });

    
});