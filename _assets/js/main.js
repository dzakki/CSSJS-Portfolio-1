$(document).ready(function () {
    'use strict';
    //********* page loader js

    setTimeout(function () {
        $('.loader_bg').fadeToggle();
    }, 1500);

    //********* typed js

    var element = $(".text-affect");

    $(function(){
       element.typed({
           strings: ["Designer.", "Developer.", "Lovers."],
           loop: true,
           typeSpeed: 90
       });
    });

    //*********wow js

    new WOW().init();

    //********** menu background color change while scroll

    $(window).on('scroll', function () {
        var menu_area = $('.nav-area');
        if ($(window).scrollTop() > 200) {
            menu_area.addClass('sticky_navigation');
        } else {
            menu_area.removeClass('sticky_navigation');
        }
    });

    //********** menu hides after click (mobile menu)

    $(document).on('click', '.navbar-collapse.in', function (e) {
        if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
            $(this).collapse('hide');
        }
    });

    //*********** scrollspy js

    $('body').scrollspy({
        target: '.navbar-collapse',
        offset: 195
    });

    //************ smooth scroll js

    $('a.smooth-menu').on("click", function (e) {
        e.preventDefault();
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 50
        }, 1000);
    });

    $('#myTabs a').click(function (e) {
     e.preventDefault()
      $(this).tab('show')
    })


});
