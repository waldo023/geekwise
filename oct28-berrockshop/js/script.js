
$(function(){
	$('.fadein img:gt(0)').hide();
	setInterval(function(){$('.fadein :first-child').fadeOut().next('img').fadeIn().end().appendTo('.fadein');}, 3000);
});

// $('.fadein img:gt(0)').hide();
//
// setInterval(function() {
//   $('#slideshow > div:first')
//     $('.fadein :first-child').fadeOut()
//     .next('img').fadeIn()
//     .fadeIn(1000)
//     .end().appendTo('.fadein')
// },  3000);
