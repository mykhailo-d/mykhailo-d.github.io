$(document).ready(function() {

//Main page carousel call
  var carousel = $("#projects_carousel");
	$("#projects_carousel").owlCarousel({
	  autoPlay : 3000,
	  navigation : false,
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

//Projects accordeon
  var acc = $(".projects__item__bottom");
  for (i=0; i<acc.length; i++) {
    acc[i].onclick = function(){
      $(this).toggleClass("active")
      $(this).parent().next().stop().slideToggle(400);
    }
  }

//Projects gallery call
$('.gallery_wrap').each(function() {
$(this).magnificPopup({
    delegate: 'a',
    type: 'image',
    closeOnContentClick: false,
    closeBtnInside: false,
    mainClass: 'mfp-with-zoom mfp-img-mobile',
    image: {
      verticalFit: false
    },
    gallery: {
      enabled: true
    },
    zoom: {
      enabled: true,
      duration: 300, // don't foget to change the duration also in CSS
      opener: function(element) {
        return element.find('img');
      }
    }

  });
});

});

$(window).load(function() {

//Preloader call
  $(".loader_inner").fadeOut();
  $(".loader").delay(400).fadeOut("slow");

});