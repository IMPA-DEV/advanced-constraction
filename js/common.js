$(function() {

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
            $('#thank-you').fadeIn();
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Слайдер галереи
    $('.gallery').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: false
    });
    $('.prev-arrow').click(function(){
        $('.gallery').slick('slickPrev');
    });
    $('.next-arrow').click(function(){
        $('.gallery').slick('slickNext');
    });

    $('a[href="#kitch"]').click(function(){
        $('#works .buttons a').removeClass('active');
        $(this).addClass('active');
        $('#kitchen-gallery-works').slideDown('slow');
        $('#bathroom-gallery-works').slideUp('slow')
    });
    var call=false;
    $('a[href="#bath"]').click(function(){
        $('#works .buttons a').removeClass('active');
        $(this).addClass('active');
        $('#kitchen-gallery-works').slideUp('slow');
        $('#bathroom-gallery-works').slideDown('slow');
        if($( window ).width()<481&&!call) {
            $('#bathroom-gallery-works .gallery-row').slick({
                arrows: false,
                dots: true,
                slidesToShow: 1
            });
            call=true;
        }
    });

    //Закрытие попапа
    $('.close').click(function(){
        $('#thank-you').fadeOut();
    });

    //Открытие меню
    $('.nav-btn').click(function(){
        $('#nav').slideDown();
    });


    //Закрытие меню
    $('.close-btn').click(function(){
        $('#nav').slideUp();
    });

    //Закрытие меню при нажатии на пункт
    if($( window ).width()<769) {
        $('.main-nav a').click(function(){
            $('#nav').slideUp();
        });
    }
    /* мягкий скролл до якоря */
    /*
    $('a[href]').click( function(){ // ловим клик по ссылке
        var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top+30 }, 1000); // анимируем скроолинг к элементу scroll_el
        }
        return false; // выключаем стандартное действие
    });
    */

    //pagescroll2id
    $(".main-nav a,.button a").mPageScroll2id({
        scrollSpeed: 1000,
        offset:30
    });


    // слайдер отзывов
    $('.reviews-container').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '10px',
        arrows: true,
        dots: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows:false,
                    dots: true,
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    centerPadding: '0',
                    arrows:false,
                    dots: true,
                    slidesToShow: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    // слайдер галерея работы
    $(window).load(function(){
        if($( window ).width()<481) {
            $('#kitchen-gallery-works .gallery-row').slick({
                arrows: false,
                dots: true,
                slidesToShow: 1
            });
        }
    });

    // попап галлереи
    if($( window ).width()>480) {
        $(document).ready(function () {
            $('.gallery-row').magnificPopup({
                delegate: 'a',
                type: 'image',
                tLoading: 'Loading image #%curr%...',
                mainClass: 'mfp-img-mobile',
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
                },
                image: {
                    tError: '<a href="#">The image #%curr%</a> could not be loaded.',
                    titleSrc: function (item) {
                        // return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
                    }
                }
            });
        });
    }

    // скролл меню
    if($( window ).width()>768) {
        (function () {  // анонимная функция (function(){ })(), чтобы переменные "a" и "b" не стали глобальными
            var a = document.querySelector('#nav'), b = null;  // селектор блока, который нужно закрепить
            window.addEventListener('scroll', Ascroll, false);
            document.body.addEventListener('scroll', Ascroll, false);  // если у html и body высота равна 100%
            function Ascroll() {
                if (b == null) {  // добавить потомка-обёртку, чтобы убрать зависимость с соседями
                    var Sa = getComputedStyle(a, ''), s = '';
                    b = document.createElement('div');  // создать потомка
                    a.insertBefore(b, a.firstChild);  // поместить потомка в цепляющийся блок первым
                    var l = a.childNodes.length;
                    for (var i = 1; i < l; i++) {  // переместить во вновь созданного потомка всех остальных потомков (итого: создан потомок-обёртка, внутри которого по прежнему работают скрипты)
                        b.appendChild(a.childNodes[1]);
                    }
                    a.style.height = b.getBoundingClientRect().height + 'px';  // если под скользящим элементом есть другие блоки, можно своё значение
                    a.style.padding = '0';
                    a.style.border = '0';  // если элементу присвоен padding или border
                }
                if (a.getBoundingClientRect().top <= 0) { // elem.getBoundingClientRect() возвращает в px координаты элемента относительно верхнего левого угла области просмотра окна браузера
                    b.className = 'scroll';
                } else {
                    b.className = '';
                }
                window.addEventListener('resize', function () {
                    a.children[0].style.width = getComputedStyle(a, '').width
                }, false);  // если изменить размер окна браузера, измениться ширина элемента
            }
        })()
    }

    //Скрол мобильного меню
    if($( window ).width()<769) {
        (function () {  // анонимная функция (function(){ })(), чтобы переменные "a" и "b" не стали глобальными
            var a = document.querySelector('.top-line'), b = null;  // селектор блока, который нужно закрепить
            window.addEventListener('scroll', Ascroll, false);
            document.body.addEventListener('scroll', Ascroll, false);  // если у html и body высота равна 100%
            function Ascroll() {
                if (b == null) {  // добавить потомка-обёртку, чтобы убрать зависимость с соседями
                    var Sa = getComputedStyle(a, ''), s = '';
                    b = document.createElement('div');  // создать потомка
                    a.insertBefore(b, a.firstChild);  // поместить потомка в цепляющийся блок первым
                    var l = a.childNodes.length;
                    for (var i = 1; i < l; i++) {  // переместить во вновь созданного потомка всех остальных потомков (итого: создан потомок-обёртка, внутри которого по прежнему работают скрипты)
                        b.appendChild(a.childNodes[1]);
                    }
                    a.style.height = b.getBoundingClientRect().height + 'px';  // если под скользящим элементом есть другие блоки, можно своё значение
                    a.style.padding = '1';
                    a.style.border = '0';  // если элементу присвоен padding или border
                }
                if (a.getBoundingClientRect().top <= 0) { // elem.getBoundingClientRect() возвращает в px координаты элемента относительно верхнего левого угла области просмотра окна браузера
                    b.className = 'scroll';
                } else {
                    b.className = 'normal';
                }
                window.addEventListener('resize', function () {
                    a.children[0].style.width = getComputedStyle(a, '').width
                }, false);  // если изменить размер окна браузера, измениться ширина элемента
            }
        })()
    }
});
