 $(document).ready(function(){
	$('.header__burger').click(function(event){
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
 });

 $(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		speed:800,
		touchThreshold:10,
		// waitForAnimate:false,
		responsive:[
			{
				breakpoint:1200,
				settings: {
				
				}
			}
		]
	});
 });