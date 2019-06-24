//页面特效
//删除购物车中商品 
$(document).ready(function() {
    $('.alert-close').on('click', function(){
        $(this).parent().parent().fadeOut("normal");
    });
});

/*导航的关闭按钮*/
$(document).ready(function () {
    $('#activator').click(function(){
        $('#box').animate({'left':'0px'},500);
    });
    $('#boxclose').click(function(){
        $('#box').animate({'left':'-2300px'},500);
    });
});

    
