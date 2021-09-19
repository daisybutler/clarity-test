$(document).ready(function(){

    // Change the nav dropdown icon to a close icon when open
    $('#nav-collapse-btn').click(function(){
        $(this).toggleClass('navbar-toggler');
        $(this).toggleClass('btn-close');
        $('#toggler-icon').toggleClass('navbar-toggler-icon');
    });

    // Hover behaviour of section 2 info circles
    $('.circle').mouseenter(function(){
        $(this).css("background-color", "rgba(2, 103, 107,.6)");
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

    // Show help box on small (576px) device types and above
    $(function(){
        var windowsize = $(window).width();
        if (windowsize > 576){
            function show_toast(){
                $('.toast').toast('show');
            };
            window.setTimeout( show_toast, 5000 ); // 5 seconds
        };
     });
});