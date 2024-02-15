//скрываются пункты меню при сужении экрана
function responseMenu(){
	if (window.innerWidth < 768) return; 
	$('ul.dropdown-menu li.item').appendTo('ul.menu');
	var items = $('ul.menu li.item');
	var max_width = $('ul.menu').width() - $('ul.menu li.dd_menu').outerWidth();
	var width = 0;
	var hide_from = 0;

	items.css({'width':'auto'});

	items.each(function(index){
		if (width + $(this).outerWidth() > max_width)
		{
			return false;
		}
		else
		{
			hide_from = index;
			width += $(this).outerWidth();
		}
	});
	if (hide_from < items.length - 1) {
		items.eq(hide_from).nextAll('li.item').appendTo('ul.dropdown-menu');
		
        items.css({'width':'fit-content'});
		$('ul.menu li.dd_menu').show();
	}
	else
	{
		$('ul.menu li.dd_menu').hide();
	}
}



	$('.top_menu').on('click', '.dropdown-toggle', function () {
		$('.dropdown-menu').toggle();
	});

	$(window).on('resize', function(){
		responseMenu();
	}).trigger('resize');

//показ модального окна
$('.consult').on('click', function(){
	$('.overlay, .modal').fadeIn();
	
	document.body.style.top = `-${window.scrollY}px`;
	document.body.style.position = 'fixed';
	document.body.style.width = '100%';
	if (document.documentElement.clientWidth > 767) {
		document.body.style.paddingRight = '17px';
		let header = document.querySelector('header');
		header.style.paddingRight = '17px';
	}
	
	
});
$('.modal__close, .overlay').on('click', function(){
	$('.overlay, .modal, .thanks').fadeOut(0);
	
	const scrollY = document.body.style.top;
	document.body.style.position = '';
	document.body.style.top = '';
	window.scrollTo(0, parseInt(scrollY || '0') * -1);
	document.body.style.paddingRight = '';
	let header = document.querySelector('header');
	header.style.paddingRight = '';
	document.body.style.width = '';
});

//плавный скролл к ссылкам
$(".scrollto a").on("click", function () {
    let href = $(this).attr("href");

    $("html, body").animate({
        scrollTop: $(href).offset().top
    }, {
        duration: 370,   // по умолчанию «400»
        easing: "linear" // по умолчанию «swing»
    });

    return false;
});

//маска для телефона

let element = document.querySelectorAll('.phone');
let maskOptions = {
    mask: '+7(000)000-00-00'
};
for (let i = 0; i < element.length; i++) {
    let mask = IMask(element[i], maskOptions);
}
//form
$('form').submit(function(e) {
	e.preventDefault();
	$.ajax({
		type: "POST",
		url: "/send.php",
		data: $(this).serialize()
	}).done(function() {
		$(this).find("input").val("");
		
		$('.modal').fadeOut();
		$('.thanks').fadeIn();
		$('.overlay').fadeIn();
	
		$('form').trigger('reset');
		console.log('ok');
	});
	return false;
	});   
//анимация
if (document.documentElement.clientWidth > 767) {
	function animation() {
		gsap.registerPlugin(ScrollTrigger);
	  
		
		 gsap.from('.about__item', {
		  opacity: 0,
		  yPercent: 100,
		  stagger: 0.2,
		  scrollTrigger: {
			trigger: '.about__wrapper',
			start: '30% bottom', 
		   
			toggleActions: 'play none none reverse',
		  }
		});
		gsap.from('.progr__row', {
			opacity: 0,
			yPercent: 100,
			stagger: 0.2,
			scrollTrigger: {
			  trigger: '.progr__table',
			  start: 'bottom bottom', 
			 
			  toggleActions: 'play none none reverse',
			}
		  });
		// gsap.from('.konf__wrapper__overlay', {
	   
		//  'width': '105%',
		//  'right': '-2%',
		//   scrollTrigger: {
		// 	trigger: '.konf__wrapper',
		// 	start: 'top 70%', 
			
		// 	toggleActions: 'play none none reverse',
		//   }
		// });
		gsap.from('.org__logos__item', {
		  opacity: 0,
		  yPercent: 30,
		  'transform': 'scale(1.7)',
	  
		  stagger: 0.4,
		  scrollTrigger: {
			trigger: '.progr',
			start: 'bottom 30%', 
		   
			toggleActions: 'play none none reverse',
		  }
		});
	
		
	  }
	  animation();
}
