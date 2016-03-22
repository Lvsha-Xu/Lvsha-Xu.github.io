$(function(){
	$('.show-2').click(function(){
		// console.log(1)
		$('.logo-top-margin').css('display','none');
		$('.about-section').css('display','block');
		$('.gallery-section').css('display','none');
		$('.contact-section').css('display','none');
	})
	$('.show-3').click(function(){
		$('.logo-top-margin').css('display','none');
		$('.about-section').css('display','none');
		$('.gallery-section').css('display','block');
		$('.contact-section').css('display','none');
	})
	$('.show-5').click(function(){
		$('.logo-top-margin').css('display','none');
		$('.about-section').css('display','none');
		$('.gallery-section').css('display','none');
		$('.contact-section').css('display','block');
	})
	$('.visible-xs').hover(function(){
			$('.show-menu').show();
		},function(){
			$('.show-menu').hide();
		}
	)
	$('.project-pages ul li').click(function(){
		var index=$(this).index();
		$('.box-content .row').css('display','none');
		$('.box-content .row').eq(index).css('display','block');
	})

})