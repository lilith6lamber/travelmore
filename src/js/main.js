$(document).ready(function () {
    $('.nav-burger').click(function (e) {
        e.preventDefault();
        $('.nav-burger, .navbar').toggleClass('active_on_touch');
    });
    $(window).resize(function () {
        if ($(window).width() > 769 && $('.navbar').css("display") == "none") {
            $('.navbar').removeAttr("style");
        }
    });
});


let lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy"
});
new WOW().init();
$('a[href*=\\#]').on('click', function (event) {
    event.preventDefault();
    $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 800);
});
$('input').focus(function () {
    $(this).data('placeholder', $(this).attr('placeholder'))
        .attr('placeholder', '');
}).blur(function () {
    $(this).attr('placeholder', $(this).data('placeholder'));
});

let nav = $('#nav'),
    sticky = nav.offset().top;

function navScroll() {
    if (window.pageYOffset > sticky) {
        nav.addClass('sticky');
    } else {
        nav.removeClass('sticky');
    }
}
$(window).scroll(function () {
    navScroll();
});