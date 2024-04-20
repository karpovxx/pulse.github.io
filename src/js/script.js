$(document).ready(function(){
  $('.carousel__inner').slick({
		speed: 1200,
		arrows: true,
		prevArrow:
			'<button type="button" class="slick-prev"><img src="img/slider/left_solid.png"></button>',
		nextArrow:
			'<button type="button" class="slick-next"><img src="img/slider/right_solid.png"></button></button>',
		responsive: [
			{
			breakpoint: 991,
			settings: {
				 
				arrows: false,
			},
			 
			},
		],
	});
	$('ul.catalog__tags').on(
		'click',
		'li:not(.catalog__tab_active)',
		function () {
			$(this)
				.addClass('catalog__tab_active')
				.siblings()
				.removeClass('catalog__tab_active')
				.closest('div.container')
				.find('div.catalog__content')
				.removeClass('catalog__content_active')
				.eq($(this).index())
				.addClass('catalog__content_active')
		}
	)
	 
	function toggleClass(item) {
		$(item).each(function (i) {
			$(this).on('click', function (e) {
				e.preventDefault()
				$('.catalog-item__content')
					.eq(i)
					.toggleClass('catalog-item__content_active')
				$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active')
			})
		});

	};
	toggleClass('.catalog-item__link');
	toggleClass('.catalog-item__back');

 // modal 
 
	$('[data-modal=consultation]').on('click', function() {
		$('.overlay, #consultation').fadeIn('slow')
	});  

	$('.modal__close').on('click', function(){
		$('.overlay, #consultation, #thanks, #order').fadeOut('slow')
		}) 
 	
	$('.button_mini').each(function (i) {
		$(this).on('click', function () {
			$('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text())
			$('.overlay, #order').fadeIn('slow')
		})
	}); 	
	$('#consultation-form').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
			},
			phone: 'required',
			email: {
				email: true,
			},
		},
		messages: {
			name: {
				required: 'Пожалуйста, введите свое имя',
				minlength: jQuery.validator.format(
					'Минимальное количество символов {0}!'
				),
			},
			phone: 'Пожалуйста, введите свой номер телефона',
			email: {
				required: 'Пожалуйста, введите свою почту',
				email: 'Неправильно введен адрес почты',
			},
		},
	})
	$('#consultation form').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
			},
			phone: 'required',
			email: {
				email: true,
			},
		},
		messages: {
			name: {
				required: 'Пожалуйста, введите свое имя',
				minlength: jQuery.validator.format(
					'Минимальное количество символов {0}!'
				),
			},
			phone: 'Пожалуйста, введите свой номер телефона',
			email: {
				required: 'Пожалуйста, введите свою почту',
				email: 'Неправильно введен адрес почты',
			},
		},
	})
	$('#order form').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
			},
			phone: 'required',
			email: {
				email: true,
			},
		},
		messages: {
			name: {
				required: 'Пожалуйста, введите свое имя',
				minlength: jQuery.validator.format(
					'Минимальное количество символов {0}!'
				),
			},
			phone: 'Пожалуйста, введите свой номер телефона',
			email: {
				required: 'Пожалуйста, введите свою почту',
				email: 'Неправильно введен адрес почты',
			},
		},
	})
	
	function valideForms(form){
		$('form').validate({
			rules: {
				name: {
					required: true,
					minlength: 2,
				},
				phone: 'required', 
				email: {
					email: true,
					
				} 
			},
			messages: {
				name: {
					required: 'Пожалуйста, введите свое имя',
					minlength: jQuery.validator.format(
						'Минимальное количество символов {0}!'
					),
				},
				phone: 'Пожалуйста, введите свой номер телефона',
				email: {
					required: 'Пожалуйста, введите свою почту',
					email: 'Неправильно введен адрес почты',
				},
			},
		});
	};
	valideForms('#consultation-form');
	valideForms('#consultation form');
	valideForms('#order form');

	// $('input[name-phone]').mask("+7 (999) 999-99-99");

	$('form').submit(function(e) {
		e.preventDefault();
		if (!$(this).valid()) {
			return;
		}

		$.ajax({
			type: "POST",
			url: "mailer/smart.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			$('#consultation, #order').fadeOut();
			$('.overlay, #thanks').fadeIn('slow');
			
			$('form').trigger('reset');
		});
		return false;
	});

	//Smooth scroll and pageup 
	$(window).scroll(function() {
		if ($(this).scrollTop() > 1600) {
			$('.pageup').fadeIn();			
		}
		else {
			$('.pageup').fadeOut();
		}
	});
	$("a[href^='#up']").click(function(){
		var _href = $(this).attr("href");
		$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
		return false;
	});

	new WOW().init()
});

 


		
