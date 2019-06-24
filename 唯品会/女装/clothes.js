/*@author
*
*
*/
$(function(){
    //点击安阳市出现城市候选下拉列表
 $(".c-h-area-header").click(function(){
     $(".c-h-area-body").css({'display':'block'});
     $(this).css({'border':'1px solid gainsboro','backgroundColor':'white'});

 });
 //点击叉号关闭候选列表
 $(".c-h-area-body a").click(function(){
    $(".c-h-area-body").css('display','none');
    $(".c-h-area-header").css({'border':'none','backgroundColor':'#f5f5f5'})
  }); 
//点击候选列表中的城市，头部的地区也发生变化
 var lis = $(".c-h-area-list li");
 $(".c-h-area-list li").click(function(){
     $(".c-h-area-header #city").text($(this).text());
 })
 });
//tab栏
$('.tab .menus li').each(function(){
    $('.tab .menus li').mouseover(function(){
        $('.tab .menus li').removeClass('bg');
        $(this).addClass('bg');
        var index = $(this).index();
        var arr = [
                'assets/bg1.png',
                'assets/bg2.png',
                'assets/bg3.png',
                'assets/bg4.png',
                'assets/bg5.png',
                'assets/bg6.png',
            ] 
        $('.tab .scroll').css('margin-top',-index*450+'px');
    })
})



function $(id){
  return document.getElementById(id);
}
window.onload=function(){

   //旅游攻略左面动画
   var timer;
   $("Raiders_left").onmouseover=function(){
      var num=0;
      if(timer){
         clearInterval(timer);
      }
      timer=setInterval(function(){
         if(num>=-285){
            num--;
            if(num>=-50){
                $("left_botm").style.top=335+num+"px";
            }
            else{
               num=-50;
               $("left_botm").style.top=335+num+"px";
            }
         }
      },20);
   }
   $("Raiders_left").onmouseleave=function(){
      var num=-50;
      if(timer){
         clearInterval(timer);
      }
      timer=setInterval(function(){
         if(num<0){
            num++;
            if(num<=50){
                $("left_botm").style.top=335+num+"px";
                console.log(num);
            }
            else{
               num=50;
               $("left_botm").style.top=335+num+"px";
            }
         }
      },20);
   }

}



