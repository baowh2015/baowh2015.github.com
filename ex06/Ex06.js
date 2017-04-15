/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-04-14 08:13:33
 * @version $Id$
 */
$(document).ready(function(){
	  //第一题
	  $(".ui-up").hide();
	  $(".ui-main1-square").click(function(){
      $(".ui-up").show();
      var i =$(this).index() +1;
      $(".ui-up-square").css("background-image","url("+ i +".jpg)");
	  });
	  $(".ui-up").click(function(){
            $(".ui-up").hide();
	  });

    //第二题
    $(".ui-main2-top:eq(0)").css("background","#C0C0C0").siblings().css("background","white");
    $(".ui-main2-bottom-box:eq(0)").show().siblings().hide();
    $(".ui-main2-top").click(function(){
      $(".ui-main2-top:eq("+ $(this).index() +")").css("background","#C0C0C0").siblings().css("background","white");
      $(".ui-main2-bottom-box:eq("+ $(this).index() +")").show().siblings().hide();
    });
    
	  //第三题
    $(".ui-main3-delete-button").click(function(){
      $(this).parent().remove();
      var totalnum = $(".ui-main3-delete").length;
      for (var i = 1;i <= totalnum;i++)
            $(".ui-main3-delete-num").eq(i-1).text(i);
    });
    $(".ui-main3 .ui-main3-add").click(function(){
      $(".ui-main3-delete-contain:last").append("<div class='ui-main3-delete'><div class='ui-main3-delete-num'></div><div class='ui-main3-delete-button'>Detele</div></div>");
      var totalnum = $(".ui-main3-delete").length;
      $(".ui-main3-delete-num").eq(totalnum-1).text(totalnum);
      $(".ui-main3-delete-button").click(function(){
      $(this).parent().remove();
        var num = $(".ui-main3-delete").length;
        for (var i = 1;i <= num;i++)
            $(".ui-main3-delete-num").eq(i-1).text(i);
      });
    });
});
