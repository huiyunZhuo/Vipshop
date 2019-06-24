window.onload = function(){
    //创建一个衣服对象，内容是当前网页要显示出的裙子
    //在真实项目中，该裙子的数据 是来自于后台服务器
    var clothes = new Clothes();
    clothes.name = "茵曼2018新款圆领小碎花宽松收腰中腰连衣裙女";
    clothes.buyCount = 256;
    clothes.description = "茵曼2018新款圆领小碎花宽松收腰中腰连衣裙【1882104056】，清雅碎花，源于西班牙国花石榴花；精致牙签皱，巧妙显瘦丰富层次感";
    clothes.orgPrice = 299;
    clothes.discountPrice = 259;
    clothes.sizes = ['XS','S','M','L','XL'];
    clothes.colors = ['米白','浅粉'];
    clothes.images = [
        { thumb : "images/ym1_th.jpg", "source" : "images/ym1_s.jpg" },
        { thumb : "images/ym2_th.jpg", "source" : "images/ym2_s.jpg" },
        { thumb : "images/ym3_th.jpg", "source" : "images/ym3_s.jpg" }
    ];
    clothes.bindDOMImage();
    clothes.bindDOMDetail(); 
    
    /* 购物车部分 */
    //创建一个购物车对象
    var cart = new Cart();
    //模拟2个已放入购物车的商品
    cart.products.push(clothes);
    cart.init();
    // cart.bindEvents();

    //点击添加到购物车按钮
        $$.$("#btnaddcart").onclick = function(){
            //把商品添加到购物车
            $(".cartsum").html(0);
            cart.products.push(clothes);
            //重新绑定数据
            cart.init();
        }
}