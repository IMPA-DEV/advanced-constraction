$(function() {

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
            url: th.attr('id')=='i' ? "/mail-calc.php" : "/mail.php",
			data: th.serialize()
		}).done(function() {
            $('#popup').show();
            $('.popup').animate({
                top: '10%',
                opacity: 1
            }, 800 );
            $('.popup-sms').slideUp( 100 ).delay( 800 ).fadeIn( 400 );
            $('.request-form').css('display', 'none'); // делaем форме display: none;
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		}).success (function(){
		    $(dataLayer.push({'event': 'a-remodeling_nadia'}));
		});
		return false;
	});

    $('.close').click(function(){
        $('#popup').hide();
    });

    $('input[type="tel"]').mask("(999) 999-9999");
    $(".size-k input[type='tel']").unmask();

    /* pagescroll2id */
    $(".main-nav a").mPageScroll2id({
        scrollSpeed: 1000,
        offset:90
    });

    /* btn nav MOBILE */
    $('.mobile-nav').click(function(){
        $('#mobile-open').slideToggle('slow');
    });

    /* scroll Top Line */
    $(function() {
        var header = $("#main-top");
        var firstBlock = $("#first-block");
        $(window).scroll(function(scrlevt) {
            scrlevt.preventDefault();
            var scroll = $(window).scrollTop();

            if (innerWidth > 900) {

                if (scroll > 37) {
                    header.addClass("header-scroll");
                    firstBlock.css("margin-top","96px");
                } else {
                    header.removeClass("header-scroll");
                    firstBlock.css("margin-top","0");
                }

            } else {

                if (scroll > 1) {
                    header.addClass("header-scroll");
                    firstBlock.css("margin-top","60px");
                } else {
                    header.removeClass("header-scroll");
                    firstBlock.css("margin-top","0");
                }

            }

            return false;
        });
    });

	/* sliders */
    $('.how-slider').slick({
        dots: true,
        infinite: true,
        speed: 1200,
        slidesToShow: 1,
        adaptiveHeight: true,
        prevArrow: $('.prev-how'),
        nextArrow: $('.next-how')
    });

    $('.reviews-slider').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        adaptiveHeight: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next')
    });

    $('.slider-superior-1').slick({
        dots: true,
        infinite: true,
        swipe: false,
        speed: 500,
        slidesToShow: 1,
        prevArrow: $('.prev-superior-1'),
        nextArrow: $('.next-superior-1')
    });

    $('.slider-superior-2').slick({
        dots: true,
        infinite: true,
        swipe: false,
        speed: 500,
        slidesToShow: 1,
        prevArrow: $('.prev-superior-2'),
        nextArrow: $('.next-superior-2')
    });

    $('.bath-slider').slick({
        dots: true,
        infinite: true,
        swipe: false,
        speed: 0,
        slidesToShow: 1,
        prevArrow: $('.prev-bath'),
        nextArrow: $('.next-bath')
    });


    /* twenty - twenty
    $(function(){
        $(".twentytwenty-container").twentytwenty();
    });*/

    $(window).load(function() {
        $(".twentytwenty-container").twentytwenty();
    });

    /* FAQ */
    $('.faq-wrap h3').click(function() {
		$(this).next('.faq-answer').slideToggle('slow');
		$(this).toggleClass('open-faq');
    });

	/* Popup WORK */
    $('.popup-work').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: false,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        }
    });

    /* Popup Form */
    $('.popup-with-form').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#name',

        // When elemened is focused, some mobile browsers in some cases zoom in
        // It looks not nice, so we disable it:
        callbacks: {
            beforeOpen: function() {
                if($(window).width() < 700) {
                    this.st.focus = false;
                } else {
                    this.st.focus = '#name';
                }
            }
        }
    });

    //Меняет active при нажатии на элементы списка THE FINEST FUTURE FINISHES
    $('.finishes-overflow li').click(function (e) {
        $('.finishes-overflow li,.green-dot').removeClass('active');
        $(this).addClass('active');
        $('.green-dot').eq($(this).index()).addClass("active");
    });

    $('.green-dot').click(function (e) {
        $('.green-dot,.finishes-overflow li').removeClass('active');
        $(this).addClass('active');
        $('.finishes-overflow li').eq($(this).index()).addClass("active");
    });



    /* OPen Request Form */
    $('.open-request').click(function (e) {
        e.preventDefault();
        $('.overlay').fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
            function(){ // пoсле выпoлнения предъидущей aнимaции
                $('.request-form')
                    .css('display', 'block') // убирaем у мoдaльнoгo oкнa display: none;
                    .animate({opacity: 1, top: '10%'}, 500); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
            });
        if($(window).height() < 700) {
            $('html').css('overflow','auto');
        } else {
            $('html').css('overflow','hidden');
        }
    });

    /* Close Request Form */
    /* Зaкрытие мoдaльнoгo oкнa, тут делaем тo же сaмoе нo в oбрaтнoм пoрядке */
    $('.close, .overlay').click( function(){ // лoвим клик пo крестику или пoдлoжке
        $('.request-form')
            .animate({opacity: 0, top: '45%'}, 200,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
                function(){ // пoсле aнимaции
                    $(this).css('display', 'none'); // делaем ему display: none;
                    $('.overlay').fadeOut(400); // скрывaем пoдлoжку
                }
            );
        $('html').css('overflow','auto');
    });

    /* Label:focus */
    $('input').on("focus", function(){
        var input = $(this);
        // assuming label is the parent, i.e. <label><input /></label>
        var label = $(this).parent();
        label.addClass('focussed');
        input.on("blur", function(){
            label.removeClass('focussed');
            input.off("blur");
        });
    });
    $('textarea').on("focus", function(){
        var textarea = $(this);
        // assuming label is the parent, i.e. <label><input /></label>
        var label = $(this).parent();
        label.addClass('focussed');
        textarea.on("blur", function(){
            label.removeClass('focussed');
            textarea.off("blur");
        });
    });


    /* @@@@@@@@@@@@   KALCULATOR  @@@@@@@@@@ */
    /* twenty IMG */

    if ( $( "#style-slide" ).length ) {
        $('#style-slide').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            swipe: false
        });
        $('.slider-nav').slick({
            slidesToShow: 8,
            slidesToScroll: 1,
            asNavFor: '#style-slide',
            dots: false,
            focusOnSelect: true,
            swipeToSlide: true,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 7,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 6,
                        slidesToScroll: 1,
                        arrows: false
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 1,
                        arrows: false
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]

        });
    }



    // next-btn
    $('.next-2').click(function (e) {
        e.preventDefault();
        $('#step-1').slideToggle();
        $('#step-2').slideToggle();
        $('.step-1').hide();
        $('.step-2').css('display',' flex');
        $('.count-1').toggleClass('active');
        $('.count-2').toggleClass('active');
        var $that = $('.slick-current input[name="style"]').val();
        $('input[name="style-info"]').val($that);

    });
    $('.next-3').click(function (e) {
        e.preventDefault();
        $('#step-2').slideToggle();
        $('#step-3').slideToggle();
        $('.step-2').hide();
        $('.step-3').css('display',' flex');
        $('.count-2').toggleClass('active');
        $('.count-3').toggleClass('active');

        if(innerWidth < 481) {
            $("#step-count .sub-container").css({"transform": "translateX(-25%)"})
        }
    });
    $('.next-4').click(function (e) {
        e.preventDefault();
        $('#step-3').slideToggle();
        $('#step-4').slideToggle();
        $('.step-3').hide();
        $('.step-4').css('display',' flex');
        $('.count-3').toggleClass('active');
        $('.count-4').toggleClass('active');
    });

    // back-btn
    $('.back-1').click(function (e) {
        e.preventDefault();
        $('#step-1').slideToggle();
        $('#step-2').slideToggle();
        $('.step-1').css('display',' flex');
        $('.step-2').hide();
        $('.count-1').toggleClass('active');
        $('.count-2').toggleClass('active');
    });
    $('.back-2').click(function (e) {
        e.preventDefault();
        $('#step-2').slideToggle();
        $('#step-3').slideToggle();
        $('.step-2').css('display',' flex');
        $('.step-3').hide();
        $('.count-2').toggleClass('active');
        $('.count-3').toggleClass('active');
        $("#step-count .sub-container").css({"transform":"translateX(0%)"})
    });
    $('.back-3').click(function (e) {
        e.preventDefault();
        $('#step-3').slideToggle();
        $('#step-4').slideToggle();
        $('.step-3').css('display',' flex');
        $('.step-4').hide();
        $('.count-3').toggleClass('active');
        $('.count-4').toggleClass('active');
    });


    //STEP 1
    $('.color-select-1').click(function () {
        $('.color-select').removeClass('active');
        $('.color-select-1').addClass('active');
        $('.next-2').removeClass('disabled');
        $('.kitch-img').css('visibility','hidden');
        $('.kitch-img-1').css('visibility','visible;');

    });
    $('.color-select-2').click(function () {
        $('.color-select').removeClass('active');
        $('.color-select-2').addClass('active');
        $('.next-2').removeClass('disabled');
        $('.kitch-img').css('visibility','hidden');
        $('.kitch-img-2').css('visibility','visible;');
    });
    $('.color-select-3').click(function () {
        $('.color-select').removeClass('active');
        $('.color-select-3').addClass('active');
        $('.next-2').removeClass('disabled');
        $('.kitch-img').css('visibility','hidden');
        $('.kitch-img-3').css('visibility','visible;');
    });
    $('.color-select-4').click(function () {
        $('.color-select').removeClass('active');
        $('.color-select-4').addClass('active');
        $('.next-2').removeClass('disabled');
        $('.kitch-img').css('visibility','hidden');
        $('.kitch-img-4').css('visibility','visible;');
    });

    //STEP 2
    $('.select-1').click(function () {
        $('.select-1').removeClass('active');
        $(this).addClass('active');
        $(this).find('input').attr("checked");
        $('.next-3').removeClass('disabled');
    });

    $('.sel-1').click(function () {
        $('.size-k').hide();
        $('.l-shape').show();
    });
    $('.sel-2').click(function () {
        $('.size-k').hide();
        $('.u-shape').show();
    });
    $('.sel-3').click(function () {
        $('.size-k').hide();
        $('.galley').show();
    });
    $('.sel-4').click(function () {
        $('.size-k').hide();
        $('.g-shape').show();
    });
    $('.sel-5').click(function () {
        $('.size-k').hide();
        $('.one-wall').show();
    });
    $('.sel-6').click(function () {
        $('.size-k').hide();
        $('.no-shape').show();
    });

    //STEP 3

    //Тест на ввод значений размеров кухни
    $('.l-shape input').mouseout(function(){
        if($("input[name='second-l']").val()=='') {
            $('.next-4').addClass('disabled');
        }else if( $("input[name='four-l']").val()==''){
            $('.next-4').addClass('disabled');
        }else{
            $('.next-4').removeClass('disabled');
        }
    });

    $('.u-shape input').mouseout(function(){
        if($("input[name='second-u']").val()=='') {
            $('.next-4').addClass('disabled');
        }else if( $("input[name='third-u']").val()==''){
            $('.next-4').addClass('disabled');
        }else if( $("input[name='four-u']").val()==''){
            $('.next-4').addClass('disabled');
        }else{
            $('.next-4').removeClass('disabled');
        }
    });

    $('.galley input').mouseout(function(){
        if($("input[name='second-g']").val()=='') {
            $('.next-4').addClass('disabled');
        }else if( $("input[name='third-g']").val()==''){
            $('.next-4').addClass('disabled');
        }else{
            $('.next-4').removeClass('disabled');
        }
    });

    $('.g-shape input').mouseout(function(){
        if($("input[name='second-gh']").val()=='') {
            $('.next-4').addClass('disabled');
        }else if( $("input[name='first-gh']").val()==''){
            $('.next-4').addClass('disabled');
        }else if( $("input[name='third-gh']").val()==''){
            $('.next-4').addClass('disabled');
        }else if( $("input[name='four-gh']").val()==''){
            $('.next-4').addClass('disabled');
        }else{
            $('.next-4').removeClass('disabled');
        }
    });

    $('.one-wall input').mouseout(function(){
        if($("input[name='four-o']").val()=='') {
            $('.next-4').addClass('disabled');
        }else{
            $('.next-4').removeClass('disabled');
        }
    });


    //STEP 4

    //Раскрытие описания
    $('.price-descr h4').click(function() {
        $(this).next('.details').slideToggle('slow');
        $(this).toggleClass('open-descr');
    });


    //Counting PRICE

    $(".next-4").click( function () { // Событие нажатия на кнопку "Расчёт"

        var size_input; // Переменная результата
        var low; // $12 - inch
        var med; // 18.5 - inch
        var high; // 29.50 - inch
        var custom; // $47 - inch

        var first_l = $("input[name='first-l']").val() * 1; // Переменная первого числа
        var second_l = $("input[name='second-l']").val() * 1; // Переменная второго числа
        var third_l = $("input[name='third-l']").val() * 1; // Переменная третьего числа
        var four_l = $("input[name='four-l']").val() * 1; // Переменная четвертого числа

        var first_u = $("input[name='first-u']").val() * 1; // Переменная первого числа
        var second_u = $("input[name='second-u']").val() * 1; // Переменная второго числа
        var third_u = $("input[name='third-u']").val() * 1; // Переменная третьего числа
        var four_u = $("input[name='four-u']").val() * 1; // Переменная четвертого числа

        var first_g = $("input[name='first-g']").val() * 1; // Переменная первого числа
        var second_g = $("input[name='second-g']").val() * 1; // Переменная второго числа
        var third_g = $("input[name='third-g']").val() * 1; // Переменная третьего числа
        var four_g = $("input[name='four-g']").val() * 1; // Переменная четвертого числа

        var first_gh = $("input[name='first-gh']").val() * 1; // Переменная первого числа
        var second_gh = $("input[name='second-gh']").val() * 1; // Переменная второго числа
        var third_gh = $("input[name='third-gh']").val() * 1; // Переменная третьего числа
        var four_gh = $("input[name='four-gh']").val() * 1; // Переменная четвертого числа

        var first_o = $("input[name='first-o']").val() * 1; // Переменная первого числа
        var second_o = $("input[name='second-o']").val() * 1; // Переменная второго числа
        var third_o = $("input[name='third-o']").val() * 1; // Переменная третьего числа
        var four_o = $("input[name='four-o']").val() * 1; // Переменная четвертого числа

        size_input = first_l + second_l + third_l + four_l + first_u + second_u + third_u + four_u + first_g + second_g + third_g + four_g + first_gh + second_gh + third_gh + four_gh + first_o + second_o + third_o + four_o; // размер кухни в inch

        size_lf = size_input / 12; // размер кухни переводим в "Linear Foot"

        low = size_input * 12; // стоимость low в $$$
        med = size_input * 18.5; // стоимость med в $$$
        high = size_input * 29.50; // стоимость high в $$$
        custom = size_input * 47; // стоимость custom в $$$

        low_lf = low / size_lf ; // стоимость за 1 "Linear Foot"
        med_lf = med / size_lf; // стоимость за 1 "Linear Foot"
        high_lf = high / size_lf; // стоимость за 1 "Linear Foot"
        custom_lf = custom / size_lf; // стоимость за 1 "Linear Foot"

        $("input[name='size-info']").val(size_input); // выдаём общиую длину кухни

        $(".coast-size span").text(size_lf); // размер кухни в LF
        $(".coast-shape span").text('$' + med); // стоимость кухни med

        $(".low .co").text('$' + low); // стоимость кухни low выводим в прайс
        $(".med .co").text('$' + med); // стоимость кухни med выводим в прайс
        $(".high .co").text('$' + high); // стоимость кухни high выводим в прайс
        $(".custom .co").text('$' + custom); // стоимость кухни custom выводим в прайс

        $(".low .lf").text('$' + low_lf + 'LF'); // стоимость кухни low выводим в прайс
        $(".med .lf").text('$' + med_lf + 'LF'); // стоимость кухни med выводим в прайс
        $(".high .lf").text('$' + high_lf + 'LF'); // стоимость кухни high выводим в прайс
        $(".custom .lf").text('$' + custom_lf + 'LF'); // стоимость кухни custom выводим в прайс

        /* Передаём полученные данные в переменные и отправляем на почту */
        $("input[name='size_lf']").val(size_lf);
        $("input[name='low']").val('$' + low);
        $("input[name='low_lf']").val('$' + low_lf + 'LF');
        $("input[name='med']").val('$' + med);
        $("input[name='med_lf']").val('$' + med_lf + 'LF');
        $("input[name='high']").val('$' + high);
        $("input[name='high_lf']").val('$' + high_lf + 'LF');
        $("input[name='custom']").val('$' + custom);
        $("input[name='custom_lf']").val('$' + custom_lf + 'LF');
    });



    // input info
    $('input[name="shape"]').click(function(){
        var $that = $(this).val();
        $('input[name="shape-info"]').val($that);
        $('.d-1 span').text($that);
    });
    $('input[name="color"]').click(function(){
        var $that = $(this).val();
        $('input[name="color-info"]').val($that);
        $('.d-3 span').text($that);
    });


    /* calculator scroll Top Line */
    $(function() {
        var header = $("#main-top-calc");
        var firstBlock = $("#calculate");
        $(window).scroll(function(scrlevt) {
            scrlevt.preventDefault();
            var scroll = $(window).scrollTop();

            if (innerWidth > 900) {

                if (scroll > 37) {
                    header.addClass("header-scroll");
                    firstBlock.css("margin-top","96px");
                } else {
                    header.removeClass("header-scroll");
                    firstBlock.css("margin-top","0");
                }

            } else {

                if (scroll > 1) {
                    header.addClass("header-scroll");
                    firstBlock.css("margin-top","60px");
                } else {
                    header.removeClass("header-scroll");
                    firstBlock.css("margin-top","0");
                }

            }

            return false;
        });
    });
    /* fix calc footer counter menu */
    $(function() {
        var header = $("#step-changer");
        var firstBlock = $("footer");
        $(window).scroll(function(scrlevt) {
            scrlevt.preventDefault();
            var scroll = $(window).scrollTop();
            if (scroll < $(document).height()-$(window).height()-$("footer").height()) {
                    header.addClass("fixik");
                    firstBlock.css("margin-top",$("footer").height());
                } else {
                header.removeClass("fixik");
                firstBlock.css("margin-top", "0");
            }
            return false;
        });
    });


});

// Fixing step menu

/*
$(function() {
    var header = $("#step-changer");
    $(window).scroll(function(scrlevt) {
        scrlevt.preventDefault();
        var scroll = $(window).scrollTop();
        if (innerWidth > 900) {
            console.log($(window).height() - scroll);
            if ($(window).height() - scroll > 0) {
                header.addClass("fixik");
            } else {
                header.removeClass("fixik");
            }
        } else {

            if (scroll > 1) {
                header.addClass("fixik");
            } else {
                header.removeClass("fixik");
            }

        }

        return false;
    });
});
*/
