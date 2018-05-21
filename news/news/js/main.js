jQuery(function($) {'use strict',

    //#main-slider
    $(function(){
        $('#main-slider.carousel').carousel({
            interval: 8000
        });
    });


    // accordian
    $('.accordion-toggle').on('click', function(){
        $(this).closest('.panel-group').children().each(function(){
        $(this).find('>.panel-heading').removeClass('active');
         });

        $(this).closest('.panel-heading').toggleClass('active');
    });

    //Initiat WOW JS
    new WOW().init();

    // portfolio filter
    $(window).load(function(){'use strict';
        var $portfolio_selectors = $('.portfolio-filter >li>a');
        var $portfolio = $('.portfolio-items');
        $portfolio.isotope({
            itemSelector : '.portfolio-item',
            layoutMode : 'fitRows'
        });

        $portfolio_selectors.on('click', function(){
            $portfolio_selectors.removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $portfolio.isotope({ filter: selector });
            return false;
        });
    });

    // Contact form
    var form = $('#main-contact-form');
    form.submit(function(event){
        event.preventDefault();
        var form_status = $('<div class="form_status"></div>');
        $.ajax({
            url: $(this).attr('action'),

            beforeSend: function(){
                form.prepend( form_status.html('<p><i class="fa fa-spinner fa-spin"></i> Email is sending...</p>').fadeIn() );
            }
        }).done(function(data){
            form_status.html('<p class="text-success">' + data.message + '</p>').delay(3000).fadeOut();
        });
    });


    //goto top
    $('.gototop').click(function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $("body").offset().top
        }, 500);
    });

    //Pretty Photo
    $("a[rel^='prettyPhoto']").prettyPhoto({
        social_tools: false
    });
});

$('.dropdown').on('click','.hidden-lg.hidden-md.hidden-sm',function(){
    $(this).parents('.dropdown').toggleClass('open');
    $(this).parents('.dropdown').siblings('.dropdown').removeClass('open');
    return false;
});

$(function(){
	/*top微信二维码*/

	var wean=$('ul.social-share li.position_re a');
	var wex=$('ul.social-share li.position_re img.position_ab');
	wex.hide();
	wean.click(function() {

		wex.fadeToggle();
	});

	//获取导航和banner高度
    var daoh=$('.navbar');
    var congla=$('.navbar').parents('#header').next().height();

    //获取侧栏距离顶部值
    var xxv=$('.widget.blog_gallery');
    if(xxv.length>0){
    	var wwwe=xxv.offset().top-115;
    }

    $(window).scroll(function(){
    	//获取 当前滚动条值
    	var gunt = $(this).scrollTop();
    	if(wwwe){
    		if(gunt >= congla &&  gunt <= wwwe){
    			daoh.addClass('bianbai');
    			xxv.removeClass('congai');
    		}
    		else if(gunt <= congla){
    			daoh.removeClass('bianbai');
    			xxv.removeClass('congai');
    		}else{

    			xxv.addClass('congai');
    		}
    	}
    	else
    	{
    		if(gunt>=congla){
	    		daoh.addClass('bianbai');
	    	}else{
	    		daoh.removeClass('bianbai');
	    	}
    	}

    });

    //搜索栏提示文字
    // var head_search=$('#header').find('.search-form');
    //聚焦文字 APP开发多少钱
    // head_search.focus(function() {
    //     $(this).val('APP开发多少钱');
    // });
    //失焦文字
    // head_search.blur(function() {
    //     $(this).val('');
    // });

    //搜索栏提示文字
    //var search_all=$('#header').find('.search');
    //search_all.hover(function(){
    //    $(this).find(':text').val('在 estronger.cn 中搜索');
    //},function(){
    //    $(this).find(':text').val('');
    //});


    //响应式导航二级菜单
    // var header_a=$('#header').find('.dropdown-toggle');
    // var win_w=$(window).width();
    // //初始化 判断
    // if(win_w<=767){
    //     header_a.removeAttr('href');
    //     header_a.click(function() {
    //         header_a.attr('data-toggle','dropdown');
    //     });
    // }
    //监听window，每变化一次，执行一下
    // $(window).resize(function(){
    //     var win_w=$(window).width();
    //     if(win_w<=767){
    //         header_a.removeAttr('href');
    //         header_a.attr('data-toggle','dropdown');
    //     }else{
    //         header_a.removeAttr('data-toggle');
    //         header_a.eq(0).attr('href','/Page/service.html');
    //         header_a.eq(1).attr('href','/fangan');
    //         header_a.eq(2).attr('href','/Page/app1.html');
    //         header_a.eq(3).attr('href','/Page/about.html');
    //         header_a.eq(4).attr('href','/library');
    //     }
    // });

});
