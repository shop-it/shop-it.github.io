$(document).ready(function () {
	$(".navbar-nav li a").click(function(event) {
		$(".navbar-collapse").collapse('hide');
	});

	$("#scroll").on('click', function(e) {
	   e.preventDefault();
	   var hash = this.hash;
	   $('html, body').animate({
		   scrollTop: $(this.hash).offset().top
		}, 500, function(){
		   window.location.hash = hash;
		});
	});

	$("a[href^='#']").on('click', function(e) {
		e.preventDefault();
		var hash = this.hash;
		$('html, body').animate({
			scrollTop: $(this.hash).offset().top
		}, 500, function(){
			window.location.hash = hash;
		});
	});

	$('.carousel').carousel(
		interval: 7000
	});
});
