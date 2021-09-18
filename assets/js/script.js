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
    });
    $('.circle').mouseleave(function(){
        $(this).css("background-color", "#02676B");
    });
});