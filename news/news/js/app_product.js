// 亦强软件 APP产品 by 一代聪师
$(function(){
    // 底部栏隐藏
    // $('#bottom').hide();

    // 选项框明细
    var huik=$('.huik');
    var duan=$('.duan');

    // iphone_swiper banner
    var mySwiper = $('#iphone_swiper').swiper({
        // 鼠标hover产生手形
        grabCursor: true,
        // 环绕播放 否
        loop:false,
        //滑动触发函数
        onSlideChangeStart: function(swiper){
            //获取当前序号
            var xuhao=swiper.activeIndex;
            huik.eq(xuhao).addClass('zhong').parent().siblings().children().removeClass('zhong');
            if(xuhao>2){
                duan.eq(1).addClass('blue').siblings().removeClass('blue');
            }else{
                duan.eq(0).addClass('blue').siblings().removeClass('blue');
            }
        }
    });

    //左键
    $('.arrow-left').on('click', function(e){
        e.preventDefault();
        mySwiper.swipePrev();
    });

    //右键
    $('.arrow-right').on('click', function(e){
        e.preventDefault();
        mySwiper.swipeNext();
    });

    huik.on('click',function(){
        $(this).addClass('zhong').parent().siblings().children().removeClass('zhong');
        var xuhao=$(this).parent().index();
        mySwiper.swipeTo(xuhao);

        if(xuhao>2){
            duan.eq(1).addClass('blue').siblings().removeClass('blue');
        }else{
            duan.eq(0).addClass('blue').siblings().removeClass('blue');
        }
    });

    duan.on('click',function(){
        $(this).addClass('blue').siblings().removeClass('blue');
        var xuhao=$(this).index();

        if(xuhao==0){
            huik.eq(0).addClass('zhong').parent().siblings().children().removeClass('zhong');
            mySwiper.swipeTo(0);
        }else{
            huik.eq(3).addClass('zhong').parent().siblings().children().removeClass('zhong');
            mySwiper.swipeTo(3);
        }

    });

    // 六角形选项卡
    var texi_tab_info=$('.texi_tab_info');
    var hexagon=$('.hexagon');
    //var xinxi='<p class="t2">PRODUCT</p>';
    //hexagon.append(xinxi);
    hexagon.eq(0).find('.t2').hide();

    // 默认显示第一个
    texi_tab_info.eq(0).show().siblings('.texi_tab_info').hide();

    // 六角形选项卡 按钮
    hexagon.on('click',function(){
        $(this).find('.t2').hide();
        $(this).parent().siblings('.liu_all').find('.t2').show();
        $(this).addClass('zhong').parent().siblings('.liu_all').children().removeClass('zhong');

        //获取当前序号
        var xuhao=$(this).parent().index();
        texi_tab_info.eq(xuhao).show().siblings('.texi_tab_info').hide();

        if(xuhao!=0){
            $('.hei_bg').hide();
        }else{
            $('.hei_bg').show();
        }
    });

});