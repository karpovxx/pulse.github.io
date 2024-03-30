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
			breakpoint: 992,
			settings: {
				dots: true,
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
   
});
		
