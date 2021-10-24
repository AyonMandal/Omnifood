$(() => {
	/* sticky navigation*/
	$('.js--section-features').waypoint((direction) => {
		if (direction == 'down') {
			$('nav').addClass('sticky')
		} else {
			$('nav').removeClass('sticky')
		}
	}, {
		offset: '50px'
	})
	/* on click scroll*/
	$(".js--sign-up").click(function () {
		$('html, body').animate({
			scrollTop: $(".js--section-plans").offset().top
		}, 1000);
	});
	$(".js--know-more").click(function () {
		$('html, body').animate({
			scrollTop: $(".js--section-features").offset().top
		}, 1000);
	});
	/* navigation scroll */
	$(".link-1").click(function () {
		$('html, body').animate({
			scrollTop: $("#features").offset().top
		}, 1000);
	});
	$(".link-2").click(function () {
		$('html, body').animate({
			scrollTop: $("#works").offset().top
		}, 1000);
	});
	$(".link-3").click(function () {
		$('html, body').animate({
			scrollTop: $("#cities").offset().top
		}, 1000);
	});
	$(".link-4").click(function () {
		$('html, body').animate({
			scrollTop: $("#sign-up").offset().top
		}, 1000);
	});
	/* click on the menu icon */
	$(".mobile-nav-icon").click(function () {
		var className = $(".mobile-nav-icon").attr("name")
		if (className === 'reorder-three-outline') {
			$(".mobile-nav-icon").attr("name", "close-circle-outline")
			$(".main-nav").css("display", "block")
		} else {
			$(".mobile-nav-icon").attr("name", "reorder-three-outline")
			$(".main-nav").css("display", "none")
		}
	})
	/* hide the mobile nav*/
	$(".main-nav li").click(function(){
		if($(window).innerWidth() < 769){
			$(".mobile-nav-icon").attr("name", "reorder-three-outline")
			$(".main-nav").css("display", "none")	
		}
	})
})