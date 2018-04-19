$(document).ready(function(){
      var $content__inner = $(".content__inner");

     $(window).scroll(function(){
         if ( $(this).scrollTop() > 30 ){
             $content__inner.addClass("fixed");
         } else if($(this).scrollTop() <= 30) {
             $content__inner.removeClass("fixed");
         }
     });

    var left = $(".content__inner");
    left.click(function(){
        $(".content").toggleClass("shift-l");
        $(".content").toggleClass("shift-r");
    });

  });

