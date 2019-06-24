function Cart(){
    this.products = [];
    this.count = 0;
    this.totalPrice = 0;
}
Cart.prototype = {
    //获取购物车中商品个数
    getProCount : function(){
        this.count = this.products.length;
        return this.count;
    },
    //获取购物车中商品总价
    getTotalPrice : function(){
        var tp = 0;
        for(var i =0; i < this.products.length; i++){
            tp += this.products[i].discountPrice;
        }
        this.totalPrice = tp;
        return this.totalPrice;
    },
    //绑定购物车信息
    bindCart : function(){
        $(".cartsum").html(this.getProCount());
        $$.$("#cartprice").innerHTML = this.getTotalPrice();
    },
    //绑定购物车列表
    bindList : function(){
        var html = '';
        var proName = '';
        for(var i = 0; i < this.products.length; i++){
            html += '<div class="cart_box">';
            html += '<div class="message">';
            html += '<div class="alert-close"> </div>';
            html += '<div class="list_img"><img src="' + this.products[i].images[0].thumb + '" class="img-responsive" alt=""/></div>';
            proName = this.products[i].name.length > 13 ? this.products[i].name.substr(0,10) + '...' :this.products[i].name.substr(0,12);
            html += '<div class="list_desc"><h4><a href="#">' + proName + '</a></h4>1 x<span class="actual">￥' + this.products[i].discountPrice + '</span></div>';
            html += '<div class="clearfix"></div>';
            html += '</div>';
            html += '</div>';
        }
        $$.$(".shopping_cart")[0].innerHTML = html;
    },
    //注册 购物车列表中 删除按钮 点击事件
    bindEvents : function(){   
        $('.alert-close').on('click', function(){
            var $box = $(this).parent().parent();
            $box.fadeOut("normal", function(){
                $box.remove();
                $(".cartsum").html($('.alert-close').length);
                $$.$("#cartprice").innerHTML =$('.alert-close').length*259;
            });
        });
    },
    //初始化
    init : function(){
        this.bindCart();
        this.bindList();
        this.bindEvents();
    }
}