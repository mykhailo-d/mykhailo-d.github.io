$(document).ready(function() {
	var carousel = $("#projects_carousel");
	$("#projects_carousel").owlCarousel({
	  autoPlay : 3000,
	  navigation : true,
	  slideSpeed : 500,
	  rewindSpeed : 500,
	  pagination : false,
	  navigationText : ["Prev","Next"],
	  autoHeight : true,
	  mouseDrag : false,
	  itemsCustom : [
        [0, 1],
        [450, 1],
        [600, 1],
        [700, 2],
        [1000, 3]
      ]
	});
    
    $(".item").click(function(){
       if ($(this).parent().parent().next().css("display") == "none"){
           $(".projects__detailed").hide(500);
           $(this).parent().parent().next().show(500);
       }else{
           $(".projects__detailed").hide(500);
       }
    });
    
    $(".modal_call").on("click", function(){
        $(this).next(".modal_wrapper").children().eq(0).arcticmodal();
	});
    
    $(".box-modal_next").on("click", function(){
        $(this).parent().arcticmodal("close");
        var bmn = $(this);
        setTimeout(function(){bmn.parent().parent().next().next().children().eq(0).arcticmodal();}, 500);
    });
    $(".box-modal_prev").on("click", function(){
        var bmp = $(this);
        $(this).parent().arcticmodal("close");
        setTimeout(function(){bmp.parent().parent().prev().prev().children().eq(0).arcticmodal();}, 500);
    });
    
});