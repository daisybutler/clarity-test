$(document).ready(function(){

    // Change the nav dropdown icon to a close icon when open
    $('#nav-collapse-btn').click(function(){
        $(this).toggleClass('navbar-toggler');
        $(this).toggleClass('btn-close');
        $('#toggler-icon').toggleClass('navbar-toggler-icon');
    });

    // Hover behaviour of section 2 info circles
    $('.circle').mouseenter(function(){
        $(this).css("background-color", "rgba(2, 103, 107,.5)");
        $(this).children('.circle h3').addClass("d-none");
        $(this).children('.circle-hover-text').toggleClass("d-none");
        $(this).children('.circle-icon').addClass("d-none");
    });
    $('.circle').mouseleave(function(){
        $(this).css("background-color", "#02676B");
        $(this).children('.circle h3').removeClass("d-none");
        $(this).children('.circle-hover-text').toggleClass("d-none");
        $(this).children('.circle-icon').removeClass("d-none");
    });
    $(function(){
        function show_toast(){
            $('.toast').toast('show');
        };
        window.setTimeout( show_toast, 1000 ); // 5 seconds
     });
});


/*
// Help toast
$(window).scroll(function () {
	($(window).scrollTop() > 300);
		$('.toast').toast('show');
}); */