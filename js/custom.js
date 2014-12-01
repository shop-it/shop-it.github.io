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

	$(document).on('scroll', function(){
		if($(document).scrollTop()>450){
			$("#logo-description").addClass("scrolled");
		} else{
			$("#logo-description").removeClass("scrolled");
		}
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

	$("#beta-submit").click(function(event){
		event.preventDefault();
		$("#alert-box").removeClass("hidden");
		setTimeout(function(){
			$('#alert-box').addClass("hidden");
		}, 2000);
	});
});
