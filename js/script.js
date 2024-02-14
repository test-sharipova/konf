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
		// items.css({'width':(max_width / (hide_from)) + 'px'});
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

//маска для телефона

let element = document.querySelectorAll('.phone');
let maskOptions = {
    mask: '+7(000)000-00-00'
};
for (let i = 0; i < element.length; i++) {
    let mask = IMask(element[i], maskOptions);
}

//анимация
function animation() {
	gsap.registerPlugin(ScrollTrigger);
  
	//  gsap.to('.promo__slide1', {
	//    'background-position': '0% 0%',
	//    scrollTrigger: {
	// 	 start: 'top top',
	// 	 end: '500px',
	// 	 // markers: true,
	// 	 scrub: true,
	//    }
	//  });
  
	  
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
	gsap.from('.konf__wrapper__overlay', {
   
	 'width': '105%',
	 'right': '-2%',
	  scrollTrigger: {
		trigger: '.konf__wrapper',
		start: 'top 70%', 
		
		toggleActions: 'play none none reverse',
	  }
	});
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
	// gsap.from('.process__item', {
	//   opacity: 0,
	//   yPercent: 100,
	//   stagger: 0.2,
	//   scrollTrigger: {
	// 	trigger: '.process__wrapper',
	// 	start: '50% bottom', 
	   
	// 	toggleActions: 'play none none reverse',
	//   }
	// });
	
	
  }
  animation();