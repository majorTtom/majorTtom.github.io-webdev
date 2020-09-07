$('.menu-btn').on('click', function(e) {
  e.preventDefault;
  $(this).toggleClass('menu-btn_active');
  $('.menu-nav').toggleClass('menu-nav_active')
});


$('nav li a').on('click', function(e){
	e.preventDefault;
	$('.menu-btn').toggleClass('menu-btn_active')
	$('.menu-nav').toggleClass('menu-nav_active');
	// $('.menu-btn').on('click', function(e) {
	// 	e.preventDefault;
	// 	$(this).toggleClass('menu-btn_active');
	// 	$('.menu-nav').toggleClass('menu-nav_active')
	// });
})






























// // $('.services__item').mouseenter(function(){
// // 	$('#iicon').attr('src', 'img/smartphone.png');
// // });


// // $('.services__item').mouseleave(function(){
// // 	$('#iicon').attr('src', 'img/smartphoneblack.png');
// // });



// $('.s1').mouseenter(function(){
// 	$('#i1').attr('src', 'img/smartphone.png');
// });

// $('.s1').mouseleave(function(){
// 	$('#i1').attr('src', 'img/smartphoneblack.png');
// });


// $('.s2').mouseenter(function(){
// 	$('#i2').attr('src', 'img/portfolio-white.png');
// });

// $('.s2').mouseleave(function(){
// 	$('#i2').attr('src', 'img/portfolio-black.png');
// });



// $('.s3').mouseenter(function(){
// 	$('#i3').attr('src', 'img/support-white.png');
// });

// $('.s3').mouseleave(function(){
// 	$('#i3').attr('src', 'img/support-black.png');
// });



// $('.s4').mouseenter(function(){
// 	$('#i4').attr('src', 'img/document-white.png');
// });

// $('.s4').mouseleave(function(){
// 	$('#i4').attr('src', 'img/document-black.png');
// });



// $('.s5').mouseenter(function(){
// 	$('#i5').attr('src', 'img/progress-white.png');
// 	$('#a5').css('color', '#fff');
// 	$('#a5').css('border', '2.5px solid #fff');
// });

// $('.s5').mouseleave(function(){
// 	$('#i5').attr('src', 'img/progress-black.png');
// 	$('#a5').css('color', '#222');
// 	$('#a5').css('border', '2.5px solid #222');
// });



// $('.s6').mouseenter(function(){
// 	$('#i6').attr('src', 'img/designe-white.png');
// });

// $('.s6').mouseleave(function(){
// 	$('#i6').attr('src', 'img/designe-black.png');
// });









// $('.vkk').mouseenter(function(){
// 	$('#i7').attr('src', 'img/vk-b.png');
// });

// $('.vkk').mouseleave(function(){
// 	$('#i7').attr('src', 'img/vk-w.png');
// });


// $('.inst').mouseenter(function(){
// 	$('#i8').attr('src', 'img/inst-p.png');
// });

// $('.inst').mouseleave(function(){
// 	$('#i8').attr('src', 'img/inst-w.png');
// });






$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});