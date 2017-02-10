
$(document).ready(function(){


//最新资讯tab

$("#latest-tab li").click(function(){

  $(this).addClass("li-selected-red");
  $(this).siblings().removeClass("li-selected-red");

})


//项目资讯tab

$("#program-tab li").click(function(){

  $(this).addClass("li-selected-blue");
  $(this).siblings().removeClass("li-selected-blue");

})



//主导航

  $(".first-a").mouseover(function(){
    $(this).addClass('first-a-selected');
    $(this).next().show();
    $(this).find('span').addClass("arrow-up");
    $(this).find('span').removeClass("arrow-down");

 });

  $(".first-a").mouseout(function(){
  $(this).removeClass('first-a-selected');
  $(this).next().hide();
   $(this).find('span').addClass("arrow-down");
    $(this).find('span').removeClass("arrow-up");
 });


  $(".sub-nav").mouseover(function(){
    $(this).show();
     $(this).prev().addClass('first-a-selected');
    $(this).parent().find('span').addClass("arrow-up");
    $(this).parent().find('span').removeClass("arrow-down");
 });

$(".sub-nav").mouseout(function(){
  $(this).hide();
   $(this).prev().removeClass('first-a-selected');
    $(this).parent().find('span').addClass("arrow-down");
    $(this).parent().find('span').removeClass("arrow-up");
 });
  


  // $("#contact-box-qq").mousemove(function(){
  //   $(this).hide();
  //   $(this).next().children().show();
  // })

  //  $("#contact-box-qq-extend").mouseleave(function(){
  //   $(this).hide();
  //   $(this).parent().prev().show();
  // })

 
  $(".search-classify li").click(function(){
    $(this).css("color","red");
    $(this).siblings().css("color","rgb(75, 73, 70)");

  })


//登录切换
  $(".login-switch li").click(function(){
    if(!$(this).hasClass("li-actived"))
    {
      $(this).addClass("li-actived");
      $(this).siblings().removeClass("li-actived");
    }
  })


 $("#login-switch-li-1").click(function(){
 
   $("#normal-login-password").show();
    $("#quick-login-verify").hide();

  })

  $("#login-switch-li-2").click(function(){
    
   $("#normal-login-password").hide();
    $("#quick-login-verify").show();

})




  //下单场次切换
  var selecteDate = $(".changci-selected").find(".changci-date").text();
  var selecteDayTime = $(".changci-selected").find(".changci-day-time").text();
  $(".changci").click(function(){

    if($("#selected-box").children().length > 0) {
      
      if(!$(this).hasClass("changci-selected")){
        show_tips_changci('只能选择一个场次，是否删除原场次', $(this));
       
      }
    }

    else {
       var $chooseType = $(this);
        var changciId = $chooseType.attr("id");

        $(this).siblings().removeClass("changci-selected");
        $(this).addClass("changci-selected");

        $("#"+changciId+"-piaojiabox").show();
        $("#"+changciId+"-piaojiabox").siblings().hide();

        $("#"+changciId+"-taopiaobox").show();
        $("#"+changciId+"-taopiaobox").siblings().hide();
    }

   
  });

//计数器函数
 var counter = function(){
       $('.counter-jian').unbind("click");
       $(".counter-jian").click(function(){

        if ($(this).next().find("input").val() > 1) {
           var $countInput = $("#" + $(this).attr("tag"));
           var num = parseInt($countInput.val()) ;
           num = num - 1;
           $countInput.val(num);
           // num =num;
        } 


      });

      $('.counter-jia').unbind("click");
      $(" .counter-jia").click(function(){
        var $countInput = $("#" + $(this).attr("tag"));
          var num = parseInt($countInput.val()) ;
          num = num + 1;
          $countInput.val(num); 
      });
  }

//缺票登记
$(".piaojia-lack").click(function(){

         var srollPos = $(window).scrollTop()+50;
        $(".lack-register").css("top", srollPos+'px');

        var $chooseType = $(this);
        var title = $chooseType.attr("title");
        var priceId = $chooseType.attr("id");
        var status = $chooseType.attr("status");
        var price =  $chooseType.find(".ticket-price").text();
        selecteDate = $(".changci-selected").find(".changci-date").text();
        selecteDayTime = $(".changci-selected").find(".changci-day-time").text();
       
        // alert(selecteDate);
        // alert(selecteDayTime);

        $("#lack-info-date").text(selecteDate);
        $("#lack-info-time").text(selecteDayTime);
        $("#lack-info-price").text(price);
        show_cover();
        $(".lack-register").show();


        $(".cover").click(function(){
          $(".cover").remove();
          $(".lack-register").hide();
        })

})
  




//下单选择票价
$(".piaojia").click(function() {
      
        var $chooseType = $(this);
        var title = $chooseType.attr("title");
        var priceId = $chooseType.attr("id");
        var status = $chooseType.attr("status");
        var price =  $chooseType.find(".ticket-price").text();
        var X = $(this).offset().left;
        var Y = $(this).offset().top;
        var show_case_x = $(".show-chose").offset().left;
        var show_case_y = $(".show-chose").offset().top;
        var x_ami = X - show_case_x;
        var y_ami = Y - show_case_y + 60;

        var selected_x;
        var selected_y;
        var x_ami_to;
        var y_ami_to;


        selecteDate = $(".changci-selected").find(".changci-date").text();
        selecteDayTime = $(".changci-selected").find(".changci-day-time").text();

        if(status == 'uncheck') {

            if (($("#selected-box").children().length) == 0 ){
              // alert('ok');
               var choose_div = '<div  class="selected-div clearfix"  id="'+ priceId+'-selected-div">'+
                                   '<div class="changci" style="margin-right:0;border:none;width:35%">'+
                                      '<span style="line-height:40px">'+ selecteDate + ' </span>'+
                                      '&nbsp'+
                                      '<span > '+ selecteDayTime + '</span>'+
                                   '</div>'+
                                    '<div class="piaojia" style="width:23%;font-size:16px;margin:0;border:none;line-height:50px">'+ price + '</div>'+
                                    '<div class="counter">'+
                                      '<table border="1" >'+
                                           '<tr>'+
                                              '<td class="counter-jian" tag="priceType'+ priceId+'">-</td>'+
                                              '<td class="li-num"> <input type="text" id="priceType'+ priceId+'" value="1" name="priceCount" readonly="readonly"> </td>'+
                                              '<td class="counter-jia" tag="priceType'+ priceId+'" >+ </td> '+
                                           '</tr>'+
                                      '</table>'+
                                     '</div>'+
                                 '<div class="dele" id="dele'+ priceId +'"></div>'+
                               '</div>';

               $("#selected-box").append(choose_div);
               $("#selected-text").show();

               $('#'+priceId+'-selected-div').hide();
               $('#'+priceId+'-selected-div').fadeIn(500);
               selected_x =  $('#'+priceId+'-selected-div').offset().left;
               selected_y =  $('#'+priceId+'-selected-div').offset().left;

               x_ami_to = X - selected_x;
               y_ami_to = Y - selected_y ;


              $(this).addClass("piaojia-selected");
              $chooseType.attr("status","check");

              if($(this).hasClass('taopiao')){
               
                var taopiao_div_ami = '<div style="position:absolute" class="taopiao-ami" status="uncheck" id="'+ priceId+'-ami">'+
                                        '<span class="ticket-price">羅海</span>'+
                                        '<span>羅海</span>'+
                                      '</div>'

                     $(".show-chose").append(taopiao_div_ami);  
                     $('#'+priceId+'-ami').css("top",y_ami+'px');
                     $('#'+priceId+'-ami').css("left",x_ami+'px');  
                   
                          
              }



            }else {
              var which_day_div = $("#selected-box>:first").attr("id"); 
              var which_day= (which_day_div.substr(0 , 4 ));
              // alert(which_day);
              var this_day = $(this).attr("id").substr(0 , 4 );
              // alert(this_day);

              if (this_day == which_day ) {
                 // alert('ok');
               var choose_div = '<div class="selected-div clearfix"  id="'+ priceId+'-selected-div">'+
                                   '<div class="changci" style="margin-right:0;border:none;width:35%">'+
                                       '<span style="line-height:40px">'+ selecteDate + ' </span>'+
                                         '&nbsp'+
                                      '<span > '+ selecteDayTime + '</span>'+
                                   '</div>'+
                                    '<div class="piaojia" style="width:23%;font-size:16px;margin:0;border:none">'+ price + '</div>'+
                                    '<div class="counter">'+
                                      '<table border="1" >'+
                                           '<tr>'+
                                              '<td class="counter-jian" tag="priceType'+ priceId+'">-</td>'+
                                              '<td class="li-num"> <input type="text" id="priceType'+ priceId+'" value="1" name="priceCount" readonly="readonly"> </td>'+
                                              '<td class="counter-jia" tag="priceType'+ priceId+'" >+ </td> '+
                                           '</tr>'+
                                      '</table>'+
                                     '</div>'+
                                 '<div class="dele" id="dele'+ priceId +'"></div>'+
                               '</div>';
              $("#selected-box").append(choose_div);
               $("#selected-box").find('#'+priceId+'-selected-div').hide();
               $("#selected-box").find('#'+priceId+'-selected-div').fadeIn(500);
              $(this).addClass("piaojia-selected");
              $chooseType.attr("status","check");
              };
             
              

            }
             
        } 

        else {
          if (($("#selected-box").children().length) == 1 ){
            $("#selected-text").hide();
          }
          $(this).removeClass("piaojia-selected");
          $chooseType.attr("status","uncheck");
          $("#dele" + priceId).parent().remove();

        }
        counter();
        //删除已选类型车票,先解除监听，再绑定。不然代码重复运行会绑定多个监听，事件重复。
        $('.dele').unbind("click");
        $(".dele").click(function(){
              var id = $(this).attr("id");
              id = id.replace("dele","");
              $("#"+id).trigger("click");
      
          });
  })

  


$(".local-shows .show").mousemove(function(event) {

    var X = $(this).offset().left;
    var Y = $(this).offset().top;
    var pageX = event.pageX;
    var pageY = event.pageY;
    var p_x = pageX - X ;
    var p_y = pageY - Y ;

     if(pageX==undefined)
    {
          pageX=event.clientX+document.body.scrollLeft||document.documentElement.scrollLeft;
    }
     if(pageY==undefined)
     {
         pageY = event.clientY+document.body.scrollTop||document.documentElement.scrollTop;
     }

  var show_index = ($(this).index()+1)%5;

  if (show_index==1 || show_index==2 || show_index==3 ) 
    {
       
          if (p_x > 0 && p_x < 218 && p_y > 0 && p_y < 360) 
       {
       
          $(this).find(".show-info").show();
          $(this).find(".show-info").css("left",p_x+"px");
          $(this).find(".show-info").css("top",p_y+"px");

       }
    }
    else 
    {
       
      if (p_x > 0 && p_x < 218 && p_y > 0 && p_y < 360) 
       {
       
          $(this).find(".show-info").show();
          $(this).find(".show-info").css("left",p_x-420+"px");
          $(this).find(".show-info").css("top",p_y+"px");

       }
    }
 
})
 
$(".local-shows .show").mouseleave(function(){
  $(this).find(".show-info").hide();
  
})


// 分页
var left_page=1;
var mid_page=2;
var right_page=3;
 var four_page=4;
var five_page=5;


$("#first-page").click(function(){

   left_page = 1;
   mid_page = 2;
   right_page = 3;
    four_page=4;
   five_page=5;
    $("#left-page").text(left_page);
     $("#left-page").addClass("current-page");
     $("#left-page").siblings().removeClass("current-page");
    $("#mid-page").text(mid_page);
    $("#right-page").text(right_page);
     $("#four-page").text(four_page);
    $("#five-page").text(five_page);
})

$(".page-index").click(function(){
  $(this).addClass("current-page");
   $(this).siblings().removeClass("current-page");
})

$("#next-page").click(function(){

if($("#five-page").hasClass("current-page")){
   left_page += 1;
    mid_page += 1;
    right_page += 1;
     four_page += 1;
    five_page += 1;
    $("#left-page").text(left_page);
    $("#mid-page").text(mid_page);
    $("#right-page").text(right_page);
      $("#four-page").text(four_page);
    $("#five-page").text(five_page);
  }else {
     $current = $(".current-page");
     $current.removeClass("current-page");
     $current.prev().addClass("current-page");
  }
   

 
})


$(".shows-header a").click(function(){
  $(this).addClass("home-nav-a-actived");
   $(this).parent().siblings().find("a").removeClass("home-nav-a-actived");
})



$("#city_input").click(function(){
  $(".city-selector").show();
})

$(".close").click(function(){
  $(".city-selector").hide();

})



//详情页导航


$(".content-main-contain .detail-nav li").click(function(){
   $(this).addClass("detail-nav-actived");
   $(this).siblings().removeClass("detail-nav-actived");

   if($(this).is('#detail-nav-show-info')){
      $("#content-main-show-info").show();
       $("#content-main-buy-declare").hide();
        $("#content-main-seat-map").hide();
         $("#content-main-trans").hide();
          $("#content-main-mark").hide();
    
   }
    if($(this).is('#detail-nav-buy-declare')){
      $("#content-main-show-info").hide();
       $("#content-main-buy-declare").show();
        $("#content-main-seat-map").hide();
         $("#content-main-trans").hide();
          $("#content-main-mark").hide();
    
   }
    if($(this).is('#detail-nav-seat-map')){
      $("#content-main-show-info").hide();
       $("#content-main-buy-declare").hide();
        $("#content-main-seat-map").show();
         $("#content-main-trans").hide();
          $("#content-main-mark").hide();
    
   }
    if($(this).is('#detail-nav-trans')){
      $("#content-main-show-info").hide();
       $("#content-main-buy-declare").hide();
        $("#content-main-seat-map").hide();
         $("#content-main-trans").show();
          $("#content-main-mark").hide();

    var map = new BMap.Map("allmap");          
  map.centerAndZoom(new BMap.Point(108.400085,22.766397), 15);
  map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
  var local = new BMap.LocalSearch(map, {
    renderOptions:{map: map}
  });
  local.search("广西体育中心");
    
   }
    if($(this).is('#detail-nav-mark')){
      $("#content-main-show-info").hide();
       $("#content-main-buy-declare").hide();
        $("#content-main-seat-map").hide();
         $("#content-main-trans").hide();
          $("#content-main-mark").show();
    
   }


})

 var counter_one = function(){
      
       $(".counter-jian-one").click(function(){
       
        if ($(this).next().find("input").val() > 1) {
           var $countInput = $(this).next().find("input");
           var num = parseInt($countInput.val()) ;
            
           num = num - 1;
           $countInput.val(num);
           // num =num;
        } 


      });

     
      $(" .counter-jia-one").click(function(){
          var $countInput = $(this).prev().find("input");
          var num = parseInt($countInput.val()) ;
       if( num < 10)
       {
        
          num = num + 1;
          $countInput.val(num); 
       }
        
      });
  }

counter_one();

$(".lack-register-close").click(function(){
  $(".lack-register").hide();
  $(".cover").remove();


})



//修改收货地址

$(".change-add").click(function(){
   show_cover();
   var ordername = $(this).parent().parent().find(".ordername").text();
   var orderphone = $(this).parent().parent().find(".orderphone").text();
   var orderadd = $(this).parent().parent().find(".orderadd").text();
  

   $("#add_edit-add").val(orderadd);
   $("#add_edit-name").val(ordername);
   $("#add_edit-phone").val(orderphone);
  $("#add-edit-box-id").show();
 
 $(".cover").click(function(){
    $(this).remove();
    $("#add-edit-box-id").hide();
    $(".switch-add").hide();
  })

})






//设置默认地址
$(".set-add").click(function(){
  $(this).addClass("set-add-actived");
  $(this).next().addClass("change-add-actived");
  $(this).parent().parent().siblings().find(".set-add").removeClass("set-add-actived");
  $(this).parent().parent().siblings().find(".change-add").removeClass("change-add-actived");
})

$(".dele-add").click(function(){
  $(this).parent().parent().remove();
  
})



//更换地址
$("#address-switch").click(function(){
  show_cover();
  $(".switch-add").show();

   $(".cover").click(function(){
    $(this).remove();
    $(".switch-add").hide();
  })


})


$("#switch-add-close").click(function(){
  $(".cover").remove();
  $(".switch-add").hide();
})

$("#switch-add-save").click(function(){
  var $chose_add_radio = $('.switch-add input[name="add-switch-radio"]:checked ');

 
   var add_name = $chose_add_radio.parent().parent().find(".add-switch-name").text();
   var add_phone = $chose_add_radio.parent().parent().find(".add-switch-phone").text();
   var add_detail = $chose_add_radio.parent().parent().find(".add-switch-detail").text();

  $("#add-name").val(add_name);
  $("#add-phone").val(add_phone);
  $("#add-detail").val(add_detail);

  $(".cover").remove();
  $(".switch-add").hide();

})


$("#switch-add-cancel").click(function(){
  
  $("#add-detail").val(add_detail);
  $(".cover").remove();
  $(".switch-add").hide();

})

//重发电子票

$(".btn-resend-et").click(function(){
  show_cover();
  $(".resend-pop").show();

  $(".cover").click(function(){
    $(this).remove();
    $(".resend-pop").hide();
  })

})







});