$(function() {

	// ombre nav responsive

	$('#pull').click(function(){

		if(!$('.mobile-menu-wrapper').hasClass('ombre')) {

			$('.mobile-menu-wrapper').addClass('ombre');
		}
		else {

			function sansOmbres(){

				$('.mobile-menu-wrapper').removeClass('ombre');
			}

			setTimeout(sansOmbres, 450); 
		}

	});

	var width = $(window).width();


	// button inscription

	$('tr td:last-child a').text('Inscription');

	// button booking event
	$('.em-booking-form-details .em-booking-submit').attr('value', 'Réserver');

	// insertion de l'attribut alt sur le logo du site 

	$('#logo img').attr('alt', 'Logo OT Strasbourg');

	// insertion div et logo bis au bas du slider 

	$("#slider-div").append('<div id="div_logo_bis" style="z-index:3;"><img src="https://skergoat.com/wordpress/wp-content/uploads/2019/09/Logo2.jpg" alt="logo bis" id="logo_bis" /></div>');

});