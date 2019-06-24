/*@author:zhy
*first-time:2018/12/16
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
 $(".c-h-area-list li").click(function(){
     $(".c-h-area-header #city").text($(this).text());
 })
 //点击新人秒杀专区以后字体颜色变化
 var aS = $("#myTab>a");
 aS[0].style.color = "#fa2a83";
  for(var i=0;i<aS.length;i++){
      aS[i].onclick = function(){
        for(var i=0;i<aS.length;i++){
            aS[i].style.color = "";
        }
        this.style.color ="#fa2a83";
        
      }
  }

//底部延迟加载
$(".footer-inner").lazyload();
});
window.onload = function(){
    // if(document.documentElement&&document.documentElement.scrollTop)
    // {
    //     scrollTop=document.documentElement.scrollTop;
    // }
    // else if(document.body)
    // {
    //     scrollTop=document.body.scrollTop;
    // }
    // if(scrollTop>=1700)
    // {
    //   document.getElementsByClassName("index-nav-sort").className= "index-nav-sort-sort" ;
   
}