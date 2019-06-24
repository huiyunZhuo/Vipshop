function Clothes() {
    //商品名称
    this.name = "";
    //累计购买人数
    this.buyCount = 0;
    //商品描述
    this.description = "";
    //原价
    this.orgPrice = 100;
    //折扣价
    this.discountPrice = 90;
    //尺码
    this.sizes = [];
    //颜色
    this.colors = [];
    //图片
    this.images = [
        { thumb : "images/ym1_th.jpg", "source" : "images/ym1_s.jpg" },
        { thumb : "images/ym2_th.jpg", "source" : "images/ym2_s.jpg" },
        { thumb : "images/ym3_th.jpg", "source" : "images/ym3_s.jpg" }
    ];
}

Clothes.prototype = {
    /* 购买 */
    buy : function(){},

    /* 添加到购物车 */
    addToCart : function(){

    },

    /* 绑定商品图片(etalage幻灯片) */
    bindDOMImage : function(){
        var html = "";
        for(var i = 0, len = this.images.length; i < len ; i++){
            html += '<li>';
            html += '<img class="etalage_thumb_image" src="' + this.images[i].thumb + '" class="img-responsive" />';
            html += '<img class="etalage_source_image" src="' + this.images[i].source + '" class="img-responsive" />';
            html += '</li>';
        }
        document.getElementById("etalage").innerHTML = html;

        /*jquery.etalage插件实现的幻灯片特效*/
        $('#etalage').etalage({
            //中等图的尺寸
            thumb_image_width: 300,
            thumb_image_height: 400,
            // 设置缩略图的数量
            small_thumbs: 3,
            // 设置没有被选择的缩略图的透明度
            smallthumb_inactive_opacity: 0.5,
            // 缩略图的位置   “下”
            smallthumbs_position: 'bottom',
            // 不自动轮播
            autoplay: true,
            // 淡入淡出效果
            zoom_easing: true
        });
    },

    /* 绑定商品描述信息 */
    bindDOMDetail : function () {
        // document.getElementById("pname").innerHTML = this.name;
        $$.$("#pname").innerHTML = this.name;
        $$.$("#buyCount").innerHTML = this.buyCount;
        $$.$("#orgPrice").innerHTML = '￥' + this.orgPrice;
        $$.$("#discountPrice").innerHTML = '￥' + this.discountPrice;
        $$.$("#description").innerHTML = '￥' + this.description;
        /* 绑定尺码部分 */
        var sizeStr = "<h3>尺码：</h3>";
        for(var i = 0; i < this.sizes.length; i++){
            sizeStr += "<li>";
            sizeStr += "<a href='#'>" + this.sizes[i] + "</a>";
            sizeStr += "</li>";
        }
        $$.$("#sizes").innerHTML = sizeStr;
        /* 绑定颜色部分 */
        var colorStr = "<h3>颜色：</h3>";
        for(var i = 0; i < this.colors.length; i++){
            colorStr += "<li>";
            colorStr += "<a href='#'>" + this.colors[i] + "</a>";
            colorStr += "</li>";
        }
        $$.$("#colors").innerHTML = colorStr;
    }
}