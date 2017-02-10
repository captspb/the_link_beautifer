
$(document).ready(function(){



//订单查看切换
$(".order-nav span").click(function(){
  $(this).addClass("order-nav-actived");
  $(this).siblings().removeClass("order-nav-actived");

})




//选择支付方式
 $(".pay-type-label").click(function(){
    if ($(this).attr("status")=='uncheck') 
      {
         $(this).attr("status","check");
         $(this).addClass("label-checked");
         $(this).css("border","none");

         $(this).parent().siblings().find("label").attr("status","uncheck");
         $(this).parent().siblings().find("label").removeClass("label-checked");
         $(this).parent().siblings().find("label").css("border","1px solid gray");

      }
 })
 
//选择交易方式
  $(".delivery-cirlce").click(function(){

    $(this).hide();
    $(this).next().show();
    $(this).next().next().css("color","#fe5b78");
    $(this).parent().siblings().find(".delivery-cirlce-red").hide();
    $(this).parent().siblings().find(".delivery-cirlce").show();
    $(this).parent().siblings().find(".delivery-cirlce-text").css("color","#9f9f9f");

  })

  $("#deli-e-ticket-label").click(function(){
    $("#input-item-user").show();
    $("#input-item-cellphone").show();
    $("#input-item-verify").show();
    $("#input-item-add").hide();
    $("#input-item-detail-add").hide();

    $("#tip-e-ticket").show();
    $("#tip-kuaidi").hide();
    $("#tip-shangmen").hide();

    $("#et-total").show();
     $("#kuaidi-total").hide();
  })
  $("#deli-kuaidi-label").click(function(){

    $("#input-item-user").show();
    $("#input-item-cellphone").show();
    $("#input-item-verify").show();
    $("#input-item-add").show();
    $("#input-item-detail-add").show();

    $("#tip-e-ticket").hide();
    $("#tip-kuaidi").show();
    $("#tip-shangmen").hide();

    $("#et-total").hide();
     $("#kuaidi-total").show();
     var city_Text;//地址城市
    var current_city = $("#current_city").val(); //定位城市
    var et_total_num = parseFloat($("#et-total-num").text()); //不含快递价格
    city_Text=$(this).find("option:selected").text(); 

    if( current_city == city_Text ){

      kuaidi_total_num = et_total_num+10;
      
      
    } 
    else{
         kuaidi_total_num = et_total_num+20;
      
    }
    
      $("#kuaidi-total-num").text(kuaidi_total_num);



  })
   $("#deli-shangmen-label").click(function(){
    $("#input-item-user").show();
    $("#input-item-cellphone").show();
    $("#input-item-verify").show();
    $("#input-item-add").hide();
    $("#input-item-detail-add").hide();

    $("#tip-e-ticket").hide();
    $("#tip-kuaidi").hide();
    $("#tip-shangmen").show();
  })

   //触发支付label

   $(".pay-icon").click(function(){
   
    $(this).prev().prev().trigger("click");
   })




});